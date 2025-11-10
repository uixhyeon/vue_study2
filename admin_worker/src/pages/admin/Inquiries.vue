<template>
<div class="space-y-6 bg-white text-black dark:bg-black dark:text-white p-4 rounded">

<h1 class="text-3xl font-bold text-gray-800 dark:text-white"
>문의 관리</h1>
    <!-- 통계카드 -->
    <DashboardStats :stats="stats" class="md:grid-cols-4"/>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">예약 정보를 관리하고 상태를 확인할 수 있습니다.</p>

</div>




</template>
<script setup>
import DashboardStats from '@/pages/admin/DashbordStats.vue';

// 통계더미
const stats = [
  {
    title: "전체 문의",
    value: 5,
    icon: "fas fa-inbox",
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "답변 대기",
    value: 3,
    icon: "fas fa-clock",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    title: "답변 완료",
    value: 2,
    icon: "fas fa-check-circle",
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "오늘 문의",
    value: 0,
    icon: "fas fa-comments",
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
];

</script>