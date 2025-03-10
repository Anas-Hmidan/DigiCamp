<template>
  <div class="max-w-2xl mx-auto">
    <!-- Mobile Header for Groups Page -->
    <div class="lg:hidden flex items-center justify-between p-4 mb-4">
      <h1 class="text-xl font-bold text-primary dark:text-primary-light">Groups</h1>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
      <div class="p-4 border-b dark:border-gray-700 flex justify-between items-center">
        <h2 class="text-xl font-semibold dark:text-white">Your Groups</h2>
        <button class="text-primary dark:text-primary-light flex items-center">
          <plus-icon class="h-5 w-5 mr-1" />
          Create Group
        </button>
      </div>
      
      <!-- Group Filters -->
      <div class="p-4 border-b dark:border-gray-700 flex flex-wrap gap-2">
        <button class="bg-primary text-white px-3 py-1 rounded-full text-sm">All Groups</button>
        <button class="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm dark:text-white">Academic</button>
        <button class="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm dark:text-white">Clubs</button>
        <button class="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm dark:text-white">Sports</button>
      </div>
      
      <!-- Groups List -->
      <div>
        <div v-for="group in groups" :key="group.id" class="p-4 border-b dark:border-gray-700 last:border-b-0 flex">
          <img :src="group.image" alt="Group" class="h-16 w-16 rounded-lg mr-4" />
          <div class="flex-1">
            <h3 class="font-medium text-lg dark:text-white">{{ group.name }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ group.members }} members</p>
            <p class="mt-1 text-sm dark:text-gray-300">{{ group.description }}</p>
            <div class="mt-2 flex">
              <span class="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-xs text-gray-500 dark:text-gray-400">{{ group.category }}</span>
            </div>
          </div>
          <button class="self-center text-primary dark:text-primary-light">
            <chevron-right-icon class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
    
    <!-- Suggested Groups -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div class="p-4 border-b dark:border-gray-700">
        <h2 class="text-lg font-semibold dark:text-white">Suggested Groups</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        <div v-for="group in suggestedGroups" :key="group.id" class="border dark:border-gray-700 rounded-lg p-3">
          <img :src="group.image" alt="Group" class="w-full h-32 object-cover rounded-lg mb-3" />
          <h3 class="font-medium dark:text-white">{{ group.name }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ group.members }} members</p>
          <p class="text-sm mt-1 line-clamp-2 dark:text-gray-300">{{ group.description }}</p>
          <button class="w-full mt-3 bg-primary text-white py-1.5 rounded-lg text-sm">Join Group</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { 
  PlusIcon, 
  ChevronRightIcon 
} from 'lucide-vue-next';

// Groups data
const groups = ref([
  {
    id: 1,
    name: 'Computer Science Club',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    members: 156,
    description: 'A community for CS students to collaborate, learn, and network.',
    category: 'Academic'
  },
  {
    id: 2,
    name: 'Campus Photography',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    members: 89,
    description: 'Share your photos and improve your photography skills.',
    category: 'Hobby'
  },
  {
    id: 3,
    name: 'Intramural Basketball',
    image: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    members: 42,
    description: 'Join our casual basketball games every Tuesday and Thursday.',
    category: 'Sports'
  }
]);

// Suggested groups
const suggestedGroups = ref([
  {
    id: 1,
    name: 'AI Research Group',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    members: 78,
    description: 'Exploring cutting-edge AI technologies and their applications in various fields.'
  },
  {
    id: 2,
    name: 'Campus Entrepreneurs',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    members: 112,
    description: 'Connect with fellow student entrepreneurs and share ideas, resources, and opportunities.'
  },
  {
    id: 3,
    name: 'Environmental Action',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    members: 95,
    description: 'Working together to promote sustainability and environmental awareness on campus.'
  },
  {
    id: 4,
    name: 'Film Club',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    members: 64,
    description: 'Watch, discuss, and create films with fellow cinema enthusiasts.'
  }
]);
</script>

