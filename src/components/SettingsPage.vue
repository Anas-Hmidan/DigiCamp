<template>
  <div class="max-w-2xl mx-auto">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div class="p-4 border-b dark:border-gray-700">
        <h2 class="text-xl font-semibold dark:text-white">Account Settings</h2>
      </div>
      
      <!-- Settings Tabs -->
      <div class="flex border-b dark:border-gray-700">
        <button 
          @click="settingsTab = 'general'"
          class="py-3 px-4 font-medium"
          :class="settingsTab === 'general' ? 'text-primary dark:text-primary-light border-b-2 border-primary' : 'text-gray-500 dark:text-gray-400'"
        >
          General
        </button>
        <button 
          @click="settingsTab = 'privacy'"
          class="py-3 px-4 font-medium"
          :class="settingsTab === 'privacy' ? 'text-primary dark:text-primary-light border-b-2 border-primary' : 'text-gray-500 dark:text-gray-400'"
        >
          Privacy
        </button>
        <button 
          @click="settingsTab = 'notifications'"
          class="py-3 px-4 font-medium"
          :class="settingsTab === 'notifications' ? 'text-primary dark:text-primary-light border-b-2 border-primary' : 'text-gray-500 dark:text-gray-400'"
        >
          Notifications
        </button>
      </div>
      
      <!-- General Settings -->
      <div v-if="settingsTab === 'general'" class="p-4">
        <div class="mb-6">
          <h3 class="text-lg font-medium mb-4 dark:text-white">Profile Information</h3>
          <div class="grid gap-4">
            <div>
              <label class="block text-sm font-medium mb-1 dark:text-white">Name</label>
              <input type="text" value="Alex Johnson" class="w-full p-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1 dark:text-white">Email</label>
              <input type="email" value="alex.johnson@university.edu" class="w-full p-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1 dark:text-white">Major</label>
              <input type="text" value="Computer Science" class="w-full p-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1 dark:text-white">Bio</label>
              <textarea class="w-full p-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white" rows="3">Passionate about technology, AI, and building community on campus. Always looking to connect with fellow students!</textarea>
            </div>
          </div>
        </div>
        
        <div class="mb-6">
          <h3 class="text-lg font-medium mb-4 dark:text-white">Appearance</h3>
          <div class="flex items-center justify-between">
            <div>
              <p class="font-medium dark:text-white">Dark Mode</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">Switch between light and dark themes</p>
            </div>
            <button @click="toggleDarkMode" class="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700">
              <span class="sr-only">Toggle dark mode</span>
              <span :class="darkMode ? 'translate-x-6 bg-primary' : 'translate-x-1 bg-white'" class="inline-block h-4 w-4 transform rounded-full transition"></span>
            </button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-medium mb-4 dark:text-white">Account Actions</h3>
          <div class="grid gap-2">
            <button class="text-left p-3 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              <p class="font-medium dark:text-white">Change Password</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">Update your password for better security</p>
            </button>
            <button class="text-left p-3 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              <p class="font-medium text-red-500">Deactivate Account</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">Temporarily disable your account</p>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Privacy Settings -->
      <div v-if="settingsTab === 'privacy'" class="p-4">
        <div class="mb-6">
          <h3 class="text-lg font-medium mb-4 dark:text-white">Privacy Controls</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium dark:text-white">Profile Visibility</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">Who can see your profile</p>
              </div>
              <select class="p-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white">
                <option>Everyone</option>
                <option>Friends Only</option>
                <option>Only Me</option>
              </select>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium dark:text-white">Post Visibility</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">Who can see your posts by default</p>
              </div>
              <select class="p-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white">
                <option>Everyone</option>
                <option>Friends Only</option>
                <option>Only Me</option>
              </select>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium dark:text-white">Friend Requests</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">Who can send you friend requests</p>
              </div>
              <select class="p-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white">
                <option>Everyone</option>
                <option>Friends of Friends</option>
                <option>Nobody</option>
              </select>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-medium mb-4 dark:text-white">Blocked Users</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">People you've blocked will not be able to see your profile or contact you</p>
          <div class="border dark:border-gray-700 rounded-lg divide-y dark:divide-gray-700">
            <div class="p-3 flex items-center justify-between">
              <div class="flex items-center">
                <img src="https://i.pravatar.cc/150?img=20" alt="Blocked User" class="h-10 w-10 rounded-full mr-3" />
                <p class="font-medium dark:text-white">James Wilson</p>
              </div>
              <button class="text-primary dark:text-primary-light text-sm">Unblock</button>
            </div>
            <div class="p-3 flex items-center justify-between">
              <div class="flex items-center">
                <img src="https://i.pravatar.cc/150?img=32" alt="Blocked User" class="h-10 w-10 rounded-full mr-3" />
                <p class="font-medium dark:text-white">Emma Thompson</p>
              </div>
              <button class="text-primary dark:text-primary-light text-sm">Unblock</button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Notification Settings -->
      <div v-if="settingsTab === 'notifications'" class="p-4">
        <h3 class="text-lg font-medium mb-4 dark:text-white">Notification Preferences</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="font-medium dark:text-white">Push Notifications</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">Receive notifications on your device</p>
            </div>
            <button class="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
              <span class="sr-only">Enable push notifications</span>
              <span class="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6 transition"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <p class="font-medium dark:text-white">Email Notifications</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">Receive notifications via email</p>
            </div>
            <button class="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
              <span class="sr-only">Enable email notifications</span>
              <span class="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6 transition"></span>
            </button>
          </div>
          
          <div class="pt-4 border-t dark:border-gray-700">
            <p class="font-medium mb-3 dark:text-white">Notify me about:</p>
            <div class="space-y-3">
              <div class="flex items-center">
                <input type="checkbox" id="likes" checked class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                <label for="likes" class="ml-2 dark:text-white">Likes on my posts</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="comments" checked class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                <label for="comments" class="ml-2 dark:text-white">Comments on my posts</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="friend_requests" checked class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                <label for="friend_requests" class="ml-2 dark:text-white">Friend requests</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="events" checked class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                <label for="events" class="ml-2 dark:text-white">Event invitations</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="messages" checked class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                <label for="messages" class="ml-2 dark:text-white">Direct messages</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="group_activity" checked class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                <label for="group_activity" class="ml-2 dark:text-white">Group activity</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';

// Settings tab state
const settingsTab = ref('general');

// Get dark mode from parent
const darkMode = inject('darkMode');

// Toggle dark mode function
const toggleDarkMode = () => {
  if (darkMode.value !== undefined) {
    darkMode.value = !darkMode.value;
    // Save user preference
    localStorage.setItem('theme', darkMode.value ? 'dark' : 'light');
    
    if (darkMode.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
};
</script>

