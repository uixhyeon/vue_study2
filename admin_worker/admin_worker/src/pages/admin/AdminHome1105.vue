<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <!-- Font Awesome CDN 추가 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    <!-- 사이드 바 -->
    <div class="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg">
      <div class="flex flex-col h-full">
        <!-- 로고 -->
        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 class="text-xl font-bold text-gray-800 dark:text-white">관리자 대시보드</h1>
        </div>
        <!-- 네비게이션 메뉴 -->
        <nav class="flex-1 p-4 space-y-2">
          <router-link
            v-for="link in links"
            :key="link.path"
            class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            :to="link.path"
            :class="{
              'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300': isActive(link.path),
            }"
          >
            <i :class="[link.icon, 'mr-3']"></i>{{ link.name }}
          </router-link>
        </nav>
        <!-- 로그아웃 버튼 -->
        <div class="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            @click="logout"
            class="w-full flex items-center justify-center px-4 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <i class="fas fa-sign-out-alt mr-3"></i>
            로그아웃
          </button>
        </div>
      </div>
    </div>
    <!-- 네비게이션 메뉴 -->
    <!-- 오른쪽 내용 -->
    <div class="ml-64 min-h-screen">
      <div class="p-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
import router from "@/router";
import { useRoute } from "vue-router";

const route = useRoute;

const links = [
  { name: "대시보드", path: "/admin/dashboard", icon: "fas fa-chart-line" },
  {
    name: "예약관리",
    path: "/admin/reservations",
    icon: "fas fa-calendar-check",
  },
  { name: "기사관리", path: "/admin/workers", icon: "fas fa-user-tie" },
  { name: "고객관리", path: "/admin/customers", icon: "fas fa-users" },
  { name: "문의관리", path: "/admin/inquiries", icon: "fas fa-inbox" },
  { name: "고객 소통", path: "/admin/customers", icon: "fas fa-comments" },
  { name: "설정", path: "/admin/settings", icon: "fas fa-cog" },
];
//현재 경로에 다른 활성화 상태
const isActive = (path) => route.path === path;
const logout  = () =>{
//로그아웃처리
router.push("/admin")
}
</script>
<!-- 
🚨 문제 1. useRoute 호출 방식 오류
❌ 위쪽 코드:
const route = useRoute;


👉 이건 함수를 참조만 한 상태입니다.
그래서 route.path는 undefined, 즉 isActive(link.path)가 절대 true가 되지 않아요.
따라서 활성화 색상도 안 바뀌고, router 연동도 꼬입니다.

✅ 아래쪽처럼 해야 합니다:
const route = useRoute();


useRoute()는 호출(())해야 실제 라우터 정보 객체가 반환돼요.

🚨 문제 2. useRouter import 누락
❌ 위쪽 코드:
import router from "@/router"; // 직접 라우터 인스턴스 불러옴


이건 전역 인스턴스를 수동으로 가져오는 방식인데,
setup() 안에서는 Composition API 전용 함수 useRouter() 를 써야 반응형 동작이 됩니다.
그렇지 않으면 router.push()가 반응하지 않거나 undefined 오류가 발생할 수 있어요.

✅ 아래쪽 코드:
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();


이 방식은 Vue Composition API에 완전히 맞게 동작하고,
<router-link>와도 정상 연동됩니다.

🚨 문제 3. <template> 중복 선언

위쪽 코드는 코드 맨 아래에 같은 <template>이 또 한 번 반복되어 있어요.
→ Vue에서는 한 파일에 <template>이 두 개 이상 존재할 수 없습니다.

그래서 첫 번째 <template>만 읽히고,
두 번째 <script setup>은 제대로 연결되지 않아요.

✅ 결론 (한 줄 요약)

위쪽 코드는

const route = useRoute → 괄호 빠짐

useRouter import 없음

<template> 2개 선언
이 세 가지 때문에 Vue 컴파일러가 setup() 내부의 로직을 무시한 상태입니다. -->