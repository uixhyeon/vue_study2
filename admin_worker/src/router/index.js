import AdminHome from "@/pages/admin/AdminHome.vue";
import Communication from "@/pages/admin/Communication.vue";
import Customer from "@/pages/admin/customer.vue";
import Dashbord_admin from "@/pages/admin/Dashbord_admin.vue";
import Inquiries from "@/pages/admin/Inquiries.vue";
import LoginAdmin from "@/pages/admin/LoginAdmin.vue";
import Reservations from "@/pages/admin/Reservations.vue";
import Settings from "@/pages/admin/Settings.vue";
import Worker_admin from "@/pages/admin/Worker_admin.vue";
import Calender from "@/pages/worker/Calender.vue";
import Dashbord from "@/pages/worker/Dashbord.vue";
import Jobs from "@/pages/worker/Jobs.vue";
import LoginWorker from "@/pages/worker/LoginWorker.vue";
import Payment from "@/pages/worker/Payment.vue";
import HomeVue from "@/views/Home.vue";
import ReserVue from "@/views/Reser.vue";
import ReviewVue from "@/views/Review.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: HomeVue, name: "HomeVue" },
  { path: "/reser", component: ReserVue, name: "ReserVue" },
  { path: "/review", component: ReviewVue, name: "ReviewVue" },
  //관리자 패이지
  { path: "/admin", component: LoginAdmin, name: "LoginAdmin" },
  {
    path: "/admin",
    component: AdminHome,
    redirect: "admin/dashboard",
    children: [
      { path: "dashboard", component: Dashbord_admin },
      { path: "reservations", component: Reservations },
      { path: "workers", component: Worker_admin },
      { path: "customers", component: Customer },
      { path: "inquiries", component: Inquiries },
      { path: "communication", component: Communication },
      { path: "settings", component: Settings },
    ],
  },

  // 기사 페이지
  { path: "/worker", component: LoginWorker, name: "LoginWorker" },
  {
    path: "/worker/dashboard",
    component: Dashbord,
    redirect: "/worker/dashboard/jobs",
    children: [
      { path: "jobs", component: Jobs, name: "MobileJobs" },
      { path: "calender", component: Calender, name: "MobileCalender" },
      { path: "payment", component: Payment, name: "MobilePayment" },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
