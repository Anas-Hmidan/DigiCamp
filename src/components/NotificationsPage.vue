<template>
  <Navbar />
  <div class="lg:ml-64 p-4">
  <div class="max-w-2xl mx-auto">
    <!-- Mobile Header for Notifications Page -->
    <div class="lg:hidden flex items-center justify-between p-4 mb-4">
      <h1 class="text-xl font-bold text-primary dark:text-primary-light">Notifications</h1>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div class="p-4 border-b dark:border-gray-700 flex justify-between items-center">
        <h2 class="text-xl font-semibold dark:text-white">Notifications</h2>
        <div>
          <button class="text-primary dark:text-primary-light text-sm font-medium">Mark all as read</button>
        </div>
      </div>
      <div>
        <div v-for="notification in notifications" :key="notification.id" 
          class="p-4 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-start"
          :class="{ 'bg-blue-50 dark:bg-blue-900/20': !notification.read }">
          <div class="h-10 w-10 rounded-full flex items-center justify-center mr-3"
            :class="getNotificationIconClass(notification.type)">
            <component :is="getNotificationIcon(notification.type)" class="h-5 w-5 text-white" />
          </div>
          <div class="flex-1">
            <p class="dark:text-white">
              <span class="font-medium">{{ notification.from }}</span>
              <span> {{ notification.message }}</span>
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ notification.time }}</p>
          </div>
          <div v-if="!notification.read" class="h-2 w-2 rounded-full bg-primary"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { 
  HeartIcon, 
  MessageSquareIcon, 
  UsersIcon, 
  CalendarIcon, 
  BellIcon 
} from 'lucide-vue-next';
import Navbar from './Navbar.vue';
// Notifications data
const notifications = ref([
  {
    id: 1,
    from: 'Sarah Chen',
    message: 'liked your post',
    time: '5 min ago',
    type: 'like',
    read: false
  },
  {
    id: 2,
    from: 'Computer Science Club',
    message: 'posted a new event: "Intro to Machine Learning Workshop"',
    time: '1 hour ago',
    type: 'event',
    read: false
  },
  {
    id: 3,
    from: 'Marcus Williams',
    message: 'commented on your post',
    time: '3 hours ago',
    type: 'comment',
    read: true
  },
  {
    id: 4,
    from: 'Priya Patel',
    message: 'sent you a friend request',
    time: 'Yesterday',
    type: 'friend',
    read: true
  },
  {
    id: 5,
    from: 'Campus Admin',
    message: 'posted an important announcement about final exams',
    time: '2 days ago',
    type: 'announcement',
    read: true
  }
]);

// Get notification icon based on type
function getNotificationIcon(type) {
  switch (type) {
    case 'like': return HeartIcon;
    case 'comment': return MessageSquareIcon;
    case 'friend': return UsersIcon;
    case 'event': return CalendarIcon;
    case 'announcement': return BellIcon;
    default: return BellIcon;
  }
}

// Get notification icon background color based on type
function getNotificationIconClass(type) {
  switch (type) {
    case 'like': return 'bg-red-500';
    case 'comment': return 'bg-blue-500';
    case 'friend': return 'bg-green-500';
    case 'event': return 'bg-purple-500';
    case 'announcement': return 'bg-yellow-500';
    default: return 'bg-gray-500';
  }
}
</script>

