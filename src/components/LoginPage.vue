<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="flex justify-center mb-8">
        <Logo class="w-48" />
      </div>
      
      <!-- Login Card -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 class="text-2xl font-bold text-center mb-6 dark:text-white">Welcome Back</h1>
        
        <form @submit.prevent="handleLogin">
          <!-- Email/Username Input -->
          <div class="mb-4">
            <label for="emailOrUsername" class="block text-sm font-medium mb-1 dark:text-white">
              Email or Username
            </label>
            <div class="relative">
              <user-icon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                id="emailOrUsername"
                v-model="emailOrUsername"
                type="text" 
                class="w-full pl-10 pr-3 py-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your email or username"
                required
              />
            </div>
          </div>
          
          <!-- Password Input -->
          <div class="mb-6">
            <div class="flex justify-between items-center mb-1">
              <label for="password" class="block text-sm font-medium dark:text-white">
                Password
              </label>
              <router-link to="/forgot-password" class="text-sm text-primary dark:text-primary-light hover:underline">
                Forgot password?
              </router-link>
            </div>
            <div class="relative">
              <lock-icon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'" 
                class="w-full pl-10 pr-10 py-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your password"
                required
              />
              <button 
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <eye-icon v-if="!showPassword" class="h-5 w-5" />
                <eye-off-icon v-else class="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <!-- Remember Me -->
          <div class="flex items-center mb-6">
            <input 
              id="remember"
              type="checkbox"
              v-model="rememberMe"
              class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label for="remember" class="ml-2 block text-sm dark:text-gray-300">
              Remember me
            </label>
          </div>
          
          <!-- Login Button -->
          <button 
            type="submit"
            class="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 font-medium"
          >
            Sign In
          </button>
        </form>
        
        <!-- Divider -->
        <div class="flex items-center my-6">
          <div class="flex-1 border-t dark:border-gray-700"></div>
          <div class="px-3 text-sm text-gray-500 dark:text-gray-400">Or continue with</div>
          <div class="flex-1 border-t dark:border-gray-700"></div>
        </div>
        
       
        
        <!-- Register Link -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?
            <router-link to="/register" class="text-primary dark:text-primary-light hover:underline font-medium">
              Sign up
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Logo from './Logo.vue';
import { 
  UserIcon, 
  LockIcon, 
  EyeIcon, 
  EyeOffIcon 
} from 'lucide-vue-next';

// Form data
const emailOrUsername = ref('');
const password = ref('');
const rememberMe = ref(false);
const showPassword = ref(false);

// Handle login submission
const handleLogin = () => {
  // Here you would implement your login logic
  console.log('Login attempt:', {
    emailOrUsername: emailOrUsername.value,
    password: password.value,
    rememberMe: rememberMe.value
  });
  
  // For demo purposes, we'll just redirect to the feed page
  // In a real app, you would authenticate with your backend first
  // router.push('/');
};
</script>
