<template>
    <!-- Mobile Bottom Navigation -->
    <nav class="lg:hidden bg-white dark:bg-gray-800 shadow-lg fixed bottom-0 left-0 right-0 z-10">
      <div class="flex justify-around items-center py-2">
        <router-link 
          v-for="item in navItems.slice(0, 5)" 
          :key="item.name"
          :to="item.path"
          class="flex flex-col items-center p-2"
          :class="$route.path === item.path ? 'text-primary dark:text-primary-light' : 'text-gray-700 dark:text-gray-300'"
        >
          <component :is="item.icon" class="h-6 w-6" />
          <span class="text-xs mt-1">{{ item.name }}</span>
        </router-link>
        <button 
          @click="toggleTheme" 
          class="flex flex-col items-center p-2 text-gray-700 dark:text-gray-300"
        >
          <component :is="darkMode ? 'sun-icon' : 'moon-icon'" class="h-6 w-6" />
          <span class="text-xs mt-1">Theme</span>
        </button>
      </div>
    </nav>
  
    <!-- Desktop Sidebar -->
    <aside class="hidden lg:flex lg:w-64 flex-col fixed h-full bg-white dark:bg-gray-800 shadow-sm">
      <div class="p-5">
        <router-link to="/" class="block">
          <Logo class="w-full max-w-[150px]" />
        </router-link>
      </div>
      <nav class="flex-1 px-2 py-4">
        <router-link 
          v-for="item in navItems" 
          :key="item.name"
          :to="item.path"
          class="flex items-center p-3 mb-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          :class="$route.path === item.path ? 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light font-medium' : 'text-gray-700 dark:text-gray-300'"
        >
          <component :is="item.icon" class="h-5 w-5 mr-3" />
          {{ item.name }}
        </router-link>
      </nav>
      <div class="p-4 border-t dark:border-gray-700">
        <div class="flex items-center">
          <img src="https://i.pravatar.cc/150?img=11" alt="Profile" class="h-10 w-10 rounded-full mr-3" />
          <div>
            <p class="font-medium dark:text-white">Alex Johnson</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Computer Science</p>
          </div>
          
        </div>
      </div>
    </aside>
  </template>
  
  <script setup>
  import { inject } from 'vue';
  import Logo from './Logo.vue';
  import { 
    HomeIcon, 
    UserIcon, 
    BellIcon, 
    MessageSquareIcon, 
    UsersIcon, 
    MoonIcon,
    SunIcon,
    CalendarIcon,
    Settings as SettingsIcon
  } from 'lucide-vue-next';
  
  // Get dark mode state from parent
  const darkMode = inject('darkMode');
  
  // Navigation items
  const navItems = [
    { id: 'feed', name: 'Feed', icon: HomeIcon, path: '/' },
    { id: 'profile', name: 'Profile', icon: UserIcon, path: '/profile' },
    { id: 'notifications', name: 'Notifications', icon: BellIcon, path: '/notifications' },
    { id: 'events', name: 'Events', icon: CalendarIcon, path: '/events' },
    { id: 'groups', name: 'Groups', icon: UsersIcon, path: '/groups' },
    { id: 'messages', name: 'Messages', icon: MessageSquareIcon, path: '/messages' },
    { id: 'settings', name: 'Settings', icon: SettingsIcon, path: '/settings' },
  ];
  
  // Toggle theme function
  const toggleTheme = () => {
    // Get the toggleDarkMode function from parent
    const toggleDarkMode = inject('toggleDarkMode');
    if (toggleDarkMode) {
      toggleDarkMode();
    }
  };
  </script>
  
  