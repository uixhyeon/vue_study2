<template>
  <div class="space-y-6 bg-white text-black dark:bg-black dark:text-white p-4 rounded">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">설정</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- 알림설정 -->
      <div class="bg-indigo-50 p-6 border-b border-gray-200 flex items-center gap-4">
        <i class="fas fa-bell text-xl text-indigo-600"></i>
        <h2 class="text-xl font-semibold text-gray-800">알림 설정</h2>
       
        <div class="p-6 space-y-6">
          <div
            v-for="notification in notificationSettings"
            :key="notification.key"
            class="flex justify-between items-center"
          >
            <div class="flex justufy-between items-center">
              <div class="flex-1">
                <h3 class="text-gray-800 font-medium mb-1">{{ notification.title }}</h3>
                <p class="text-sm text-gray-500">{{ notification.description }}</p>
              00</div>
              <label class="relative inline-flex items-center cursor-pointer ml-4">
                <input type="checkbox" class="st-only peer" v-model="settings[notification.key]"/>
                <div
                  class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- 시스템 설정 -->
      <div class="bg-green-50 p-6 border-b border-gray-200 flex items-center gap-4">
        <i class="fas fa-cog text-xl text-green-600"></i>
        <h2 class="text-xl font-semibold text-gray-800">시스템 설정</h2>
        <div class="p-6 space-y-6">
          <div class="flex justify-between items-center">
            <div class="flex-1">
              <h3 class="text-gray-800 font-medium mb-1">자동 저장</h3>
              <p class="text-sm text-gray-500">
                변경사항을 자동으로 저장합니다
              </p>
            </div>
            <label
              class="relative inline-flex items-center cursor-pointer ml-4">
              <input
                type="checkbox"
                v-model="settings.autoSave"
                class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>

          <div class="border-t pt-6">
            <h3 class="text-gray-800 font-medium mb-3">세션 타임아웃</h3>
            <select
              v-model="settings.sessionTimeout"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option value="15">15분</option>
              <option value="30">30분</option>
              <option value="60">1시간</option>
              <option value="120">2시간</option>
            </select>
            <p class="text-sm text-gray-500 mt-2">
              일정 시간 동안 활동이 없으면 자동으로 로그아웃됩니다
            </p>
          </div>
        </div>
      </div>
      <!-- 데이터 관리 -->
      <div class="bg-blue-50 p-6 border-b border-gray-200 flex items-center gap-4">
        <i class="fas fa-database text-xl text-blue-600"></i>
        <h2 class="text-xl font-semibold text-gray-800">데이터 백업</h2>
         <div class="flex-1">
              <h3 class="text-gray-800 font-medium mb-1">데이터 백업</h3>
              <p class="text-sm text-gray-500">
                모든 데이터를 안전하게 백업합니다
              </p>
              <button  class="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                <i class="fas fa-download mr-2"></i>
                백업
              </button>
            </div>
            
      </div>
      <!-- 통계 관리 -->
      <div class="bg-purple-50 p-6 border-b border-gray-200 flex items-center gap-4">
        <i class="fas fa-chart-bar text-xl text-purple-600"></i>
        <h2 class="text-xl font-semibold text-gray-800">통계 관리</h2>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';

// 알림 설정 목록
const notificationSettings = [
  {
    key: "emailNotifications",
    title: "이메일 알림",
    description: "예약 및 작업 관련 알림을 이메일로 받습니다",
  },
  {
    key: "pushNotifications",
    title: "푸시 알림",
    description: "중요한 소식을 실시간으로 받습니다",
  },
  {
    key: "cancelNotifications",
    title: "예약 취소 알림",
    description: "예약 취소 시 즉시 알림을 받습니다",
  },
];
// 설정정보를 담고 있는 반응형 객체
const settings = reactive({
  emailNotifications: true,
  pushNotifications: true,
  cancelNotifications: false,
  autoSave: true,
  sessionTimeout: "30",
  dailyReport: false,
  reportFormat: "pdf",
})
</script>
