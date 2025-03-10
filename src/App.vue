<template>
  <div class="min-h-screen">
    <!-- Main Content -->
    <div class="flex min-h-screen pb-[70px] lg:pb-0 lg:pt-0">
      <!-- Navbar Component -->
      <Navbar />
      
      <!-- Main Content -->
      <main class="flex-1 lg:ml-64 p-4">
        <router-view></router-view>
      </main>
    </div>

    <!-- New Post Modal -->
    <div v-if="showPostModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-gray-800 rounded-lg w-full max-w-lg">
        <div class="p-4 border-b dark:border-gray-700 flex items-center justify-between">
          <h3 class="text-lg font-semibold dark:text-white">Create Post</h3>
          <button @click="showPostModal = false">
            <x-icon class="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        <div class="p-4">
          <div class="flex items-center mb-4">
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" class="h-10 w-10 rounded-full mr-3" />
            <div>
              <p class="font-medium dark:text-white">Alex Johnson</p>
              <select class="text-xs text-gray-500 dark:text-gray-400 bg-transparent">
                <option>Public</option>
                <option>Friends</option>
                <option>Only Me</option>
              </select>
            </div>
          </div>
          <textarea 
            placeholder="What's happening on campus?" 
            class="w-full border dark:border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[120px] dark:bg-gray-700 dark:text-white"
            v-model="newPostContent"
          ></textarea>
          <div class="flex items-center justify-between mt-4 p-2 border dark:border-gray-700 rounded-lg">
            <p class="text-sm font-medium dark:text-white">Add to your post</p>
            <div class="flex space-x-2">
              <button class="p-2 text-primary dark:text-primary-light hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <image-icon class="h-5 w-5" />
              </button>
              <button class="p-2 text-primary dark:text-primary-light hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <users-icon class="h-5 w-5" />
              </button>
              <button class="p-2 text-primary dark:text-primary-light hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <map-pin-icon class="h-5 w-5" />
              </button>
              <button class="p-2 text-primary dark:text-primary-light hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <smile-icon class="h-5 w-5" />
              </button>
            </div>
          </div>
          <button 
            class="w-full mt-4 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 font-medium"
            @click="createPost"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, provide, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { 
  XIcon,
  ImageIcon,
  UsersIcon,
  MapPinIcon,
  SmileIcon,
} from 'lucide-vue-next';
import Navbar from './components/Navbar.vue';

const router = useRouter();
const showPostModal = ref(false);
const newPostContent = ref('');

// Dark mode state management
const darkMode = ref(false);

// Initialize dark mode based on browser preference and stored preference
onMounted(() => {
  // Check if user has a stored preference
  const storedTheme = localStorage.getItem('theme');
  
  if (storedTheme) {
    // Use stored preference if available
    darkMode.value = storedTheme === 'dark';
  } else {
    // Otherwise use browser/system preference
    darkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  // Apply the theme immediately
  applyTheme();
  
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    // Only update if user hasn't set a manual preference
    if (!localStorage.getItem('theme')) {
      darkMode.value = e.matches;
      applyTheme();
    }
  });
});

// Toggle dark mode and save preference
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  // Save user preference
  localStorage.setItem('theme', darkMode.value ? 'dark' : 'light');
  applyTheme();
};

// Apply theme to document
const applyTheme = () => {
  if (darkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Create a new post
const createPost = () => {
  if (newPostContent.value.trim()) {
    // Emit event to be caught by the feed component
    window.dispatchEvent(new CustomEvent('new-post', {
      detail: {
        content: newPostContent.value
      }
    }));
    
    showPostModal.value = false;
    newPostContent.value = '';
    
    // Navigate to feed if not already there
    if (router.currentRoute.value.path !== '/') {
      router.push('/');
    }
  }
};

// Provide shared state to child components
provide('showPostModal', {
  show: () => showPostModal.value = true,
  value: showPostModal
});

// Provide dark mode state and toggle function to child components
provide('darkMode', darkMode);
provide('toggleDarkMode', toggleDarkMode);
</script>

<style>
:root {
  --color-primary: #4f46e5;
  --color-primary-light: #818cf8;
}

.text-primary {
  color: var(--color-primary);
}

.dark .text-primary-light {
  color: var(--color-primary-light);
}

.bg-primary {
  background-color: var(--color-primary);
}

.bg-primary\/10 {
  background-color: rgba(79, 70, 229, 0.1);
}

.bg-primary\/20 {
  background-color: rgba(79, 70, 229, 0.2);
}

.bg-primary\/70 {
  background-color: rgba(79, 70, 229, 0.7);
}

.bg-primary\/90 {
  background-color: rgba(79, 70, 229, 0.9);
}

.hover\:bg-primary\/90:hover {
  background-color: rgba(79, 70, 229, 0.9);
}

.focus\:ring-primary\/50:focus {
  --tw-ring-color: rgba(79, 70, 229, 0.5);
}

.border-primary {
  border-color: var(--color-primary);
}

.hover\:text-primary:hover {
  color: var(--color-primary);
}

.dark .hover\:text-primary-light:hover {
  color: var(--color-primary-light);
}

.dark .border-primary-light {
  border-color: var(--color-primary-light);
}

/* Dark mode styles */
.dark {
  color-scheme: dark;
}

.dark .text-primary-light {
  color: var(--color-primary-light);
}
</style>

