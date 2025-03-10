<template>
  <div class="max-w-2xl mx-auto">
    <!-- Mobile Header for Profile Page -->
    <div class="lg:hidden flex items-center justify-between p-4 mb-4">
      <h1 class="text-xl font-bold text-primary dark:text-primary-light">Profile</h1>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <div class="h-40 bg-gradient-to-r from-primary to-primary/70"></div>
      <div class="px-4 py-6 relative">
        <img src="https://i.pravatar.cc/150?img=11" alt="Profile" class="h-24 w-24 rounded-full border-4 border-white dark:border-gray-800 absolute -top-12 left-4" />
        <div class="mt-12 flex justify-between items-start">
          <div>
            <h2 class="text-2xl font-bold dark:text-white">Alex Johnson</h2>
            <p class="text-gray-600 dark:text-gray-400">Computer Science, Class of 2025</p>
          </div>
          <button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
            Edit Profile
          </button>
        </div>
        
        <p class="mt-4 dark:text-white">Passionate about technology, AI, and building community on campus. Always looking to connect with fellow students!</p>
        
        <div class="flex mt-4 space-x-4">
          <div>
            <p class="font-bold dark:text-white">245</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Posts</p>
          </div>
          <div>
            <p class="font-bold dark:text-white">1.2K</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Followers</p>
          </div>
          <div>
            <p class="font-bold dark:text-white">568</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Following</p>
          </div>
        </div>
      </div>
      
      <!-- Profile Tabs -->
      <div class="px-4 border-t dark:border-gray-700">
        <div class="flex">
          <button 
            @click="profileTab = 'posts'"
            class="py-3 px-4 font-medium"
            :class="profileTab === 'posts' ? 'text-primary dark:text-primary-light border-b-2 border-primary' : 'text-gray-500 dark:text-gray-400'"
          >
            Posts
          </button>
          <button 
            @click="profileTab = 'about'"
            class="py-3 px-4 font-medium"
            :class="profileTab === 'about' ? 'text-primary dark:text-primary-light border-b-2 border-primary' : 'text-gray-500 dark:text-gray-400'"
          >
            About
          </button>
          <button 
            @click="profileTab = 'friends'"
            class="py-3 px-4 font-medium"
            :class="profileTab === 'friends' ? 'text-primary dark:text-primary-light border-b-2 border-primary' : 'text-gray-500 dark:text-gray-400'"
          >
            Friends
          </button>
          <button 
            @click="profileTab = 'photos'"
            class="py-3 px-4 font-medium"
            :class="profileTab === 'photos' ? 'text-primary dark:text-primary-light border-b-2 border-primary' : 'text-gray-500 dark:text-gray-400'"
          >
            Photos
          </button>
        </div>
      </div>
    </div>

    <!-- Profile Content -->
    <div class="mt-6">
      <!-- Posts Tab -->
      <div v-if="profileTab === 'posts'" class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h3 class="text-lg font-semibold mb-4 dark:text-white">Your Posts</h3>
        <div v-for="post in userPosts" :key="post.id" class="border-b dark:border-gray-700 last:border-b-0 py-4">
          <p class="mb-2 dark:text-white">{{ post.content }}</p>
          <div v-if="post.image" class="mb-2">
            <img :src="post.image" alt="Post image" class="w-full h-auto rounded-lg" />
          </div>
          <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <clock-icon class="h-4 w-4 mr-1" />
            <span>{{ post.time }}</span>
            <span class="mx-2">•</span>
            <heart-icon class="h-4 w-4 mr-1" />
            <span>{{ post.likes }}</span>
            <span class="mx-2">•</span>
            <message-square-icon class="h-4 w-4 mr-1" />
            <span>{{ post.comments }}</span>
          </div>
        </div>
      </div>

      <!-- About Tab -->
      <div v-if="profileTab === 'about'" class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h3 class="text-lg font-semibold mb-4 dark:text-white">About</h3>
        
        <div class="mb-6">
          <h4 class="font-medium mb-2 dark:text-white">Education</h4>
          <div class="flex items-start mb-3">
            <graduation-cap-icon class="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400 mt-0.5" />
            <div>
              <p class="font-medium dark:text-white">Computer Science</p>
              <p class="text-gray-500 dark:text-gray-400">Westlake University • 2022 - 2025</p>
            </div>
          </div>
          <div class="flex items-start">
            <graduation-cap-icon class="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400 mt-0.5" />
            <div>
              <p class="font-medium dark:text-white">Oakridge High School</p>
              <p class="text-gray-500 dark:text-gray-400">2018 - 2022</p>
            </div>
          </div>
        </div>
        
        <div class="mb-6">
          <h4 class="font-medium mb-2 dark:text-white">Contact Information</h4>
          <div class="flex items-center mb-2">
            <mail-icon class="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
            <p class="dark:text-white">alex.johnson@university.edu</p>
          </div>
          <div class="flex items-center">
            <phone-icon class="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
            <p class="dark:text-white">(555) 123-4567</p>
          </div>
        </div>
        
        <div>
          <h4 class="font-medium mb-2 dark:text-white">Interests</h4>
          <div class="flex flex-wrap gap-2">
            <span class="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm dark:text-white">Artificial Intelligence</span>
            <span class="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm dark:text-white">Web Development</span>
            <span class="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm dark:text-white">Basketball</span>
            <span class="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm dark:text-white">Photography</span>
            <span class="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm dark:text-white">Chess</span>
          </div>
        </div>
      </div>

      <!-- Friends Tab -->
      <div v-if="profileTab === 'friends'" class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h3 class="text-lg font-semibold mb-4 dark:text-white">Friends (568)</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div v-for="friend in friends" :key="friend.id" class="flex flex-col items-center">
            <img :src="friend.avatar" alt="Friend" class="w-20 h-20 rounded-full mb-2" />
            <p class="font-medium text-center dark:text-white">{{ friend.name }}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 text-center">{{ friend.mutualFriends }} mutual friends</p>
          </div>
        </div>
        <button class="w-full mt-4 py-2 text-primary dark:text-primary-light border border-primary dark:border-primary-light rounded-lg">
          See All Friends
        </button>
      </div>

      <!-- Photos Tab -->
      <div v-if="profileTab === 'photos'" class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h3 class="text-lg font-semibold mb-4 dark:text-white">Photos</h3>
        <div class="grid grid-cols-3 gap-2">
          <div v-for="photo in photos" :key="photo.id" class="aspect-square">
            <img :src="photo.url" alt="Photo" class="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
        <button class="w-full mt-4 py-2 text-primary dark:text-primary-light border border-primary dark:border-primary-light rounded-lg">
          See All Photos
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { 
  ClockIcon, 
  HeartIcon, 
  MessageSquareIcon, 
  GraduationCapIcon, 
  MailIcon, 
  PhoneIcon 
} from 'lucide-vue-next';

// Profile tab state
const profileTab = ref('posts');

// User posts for profile page
const userPosts = ref([
  {
    id: 1,
    content: 'Looking for teammates for the upcoming hackathon! I have experience with full-stack development and AI. DM if interested!',
    time: '1 day ago',
    likes: 18,
    comments: 7,
    image: null
  },
  {
    id: 2,
    content: 'Just enrolled in the new Data Science course. Has anyone taken it before? Any tips?',
    time: '3 days ago',
    likes: 12,
    comments: 5,
    image: null
  },
  {
    id: 3,
    content: 'Campus coffee shop has a new study area with power outlets at every table. Game changer for finals week!',
    time: '1 week ago',
    likes: 35,
    comments: 8,
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
]);

// Friends data
const friends = ref([
  { id: 1, name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?img=5', mutualFriends: 12 },
  { id: 2, name: 'Marcus Williams', avatar: 'https://i.pravatar.cc/150?img=8', mutualFriends: 8 },
  { id: 3, name: 'Priya Patel', avatar: 'https://i.pravatar.cc/150?img=9', mutualFriends: 15 },
  { id: 4, name: 'David Kim', avatar: 'https://i.pravatar.cc/150?img=12', mutualFriends: 6 },
  { id: 5, name: 'Sophia Rodriguez', avatar: 'https://i.pravatar.cc/150?img=25', mutualFriends: 3 },
  { id: 6, name: 'James Wilson', avatar: 'https://i.pravatar.cc/150?img=20', mutualFriends: 9 },
]);

// Photos data
const photos = ref([
  { id: 1, url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 2, url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 3, url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 4, url: 'https://images.unsplash.com/photo-1519070994522-88c6b756330e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 5, url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 6, url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 7, url: 'https://images.unsplash.com/photo-1517486430290-35657bdcef51?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 8, url: 'https://images.unsplash.com/photo-1517502151529-ee8e51697258?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 9, url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
]);
</script>

