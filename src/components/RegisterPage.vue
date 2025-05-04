<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="flex justify-center mb-8">
        <Logo class="w-48" />
      </div>
      
      <!-- Register Card -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 class="text-2xl font-bold text-center mb-6 dark:text-white">Create Account</h1>
        
        <form @submit.prevent="handleRegister">
          <!-- Profile Photo Upload -->
          <div class="mb-6 flex flex-col items-center">
            <div class="relative mb-2">
              <div 
                class="h-24 w-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden"
                :class="{ 'border-2 border-primary': profilePhoto }"
              >
                <img 
                  v-if="profilePhoto" 
                  :src="profilePhotoPreview" 
                  alt="Profile Preview" 
                  class="h-full w-full object-cover"
                />
                <user-icon v-else class="h-12 w-12 text-gray-400" />
              </div>
              <button 
                type="button"
                @click="triggerFileInput"
                class="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full"
              >
                <camera-icon class="h-4 w-4" />
              </button>
              <input 
                ref="fileInput"
                type="file"
                accept="image/*"
                class="hidden"
                @change="handleFileChange"
              />
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              Profile photo (optional)
            </p>
          </div>
          
          <!-- Name Fields -->
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label for="firstName" class="block text-sm font-medium mb-1 dark:text-white">
                First Name
              </label>
              <input 
                id="firstName"
                v-model="firstName"
                type="text" 
                class="w-full px-3 py-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="First name"
                required
              />
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium mb-1 dark:text-white">
                Last Name
              </label>
              <input 
                id="lastName"
                v-model="lastName"
                type="text" 
                class="w-full px-3 py-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          
          <!-- Username Input -->
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium mb-1 dark:text-white">
              Username
            </label>
            <div class="relative">
              <at-sign-icon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                id="username"
                v-model="username"
                type="text" 
                class="w-full pl-10 pr-3 py-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Choose a username"
                required
              />
            </div>
          </div>
          
          <!-- Email Input -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium mb-1 dark:text-white">
              Email
            </label>
            <div class="relative">
              <mail-icon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                id="email"
                v-model="email"
                type="email" 
                class="w-full pl-10 pr-3 py-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your email address"
                required
              />
            </div>
          </div>
          
          <!-- Date of Birth -->
          <div class="mb-4">
            <label for="dateOfBirth" class="block text-sm font-medium mb-1 dark:text-white">
              Date of Birth
            </label>
            <div class="relative">
              <calendar-icon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                id="dateOfBirth"
                v-model="dateOfBirth"
                type="date" 
                class="w-full pl-10 pr-3 py-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>
          </div>
          
          <!-- Password Input -->
          <div class="mb-4">
            <label for="registerPassword" class="block text-sm font-medium mb-1 dark:text-white">
              Password
            </label>
            <div class="relative">
              <lock-icon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                id="registerPassword"
                v-model="password"
                :type="showPassword ? 'text' : 'password'" 
                class="w-full pl-10 pr-10 py-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Create a password"
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
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Password must be at least 8 characters long
            </p>
          </div>
          
          <!-- Confirm Password -->
          <div class="mb-6">
            <label for="confirmPassword" class="block text-sm font-medium mb-1 dark:text-white">
              Confirm Password
            </label>
            <div class="relative">
              <lock-icon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                id="confirmPassword"
                v-model="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'" 
                class="w-full pl-10 pr-10 py-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Confirm your password"
                required
              />
              <button 
                type="button"
                @click="showConfirmPassword = !showConfirmPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <eye-icon v-if="!showConfirmPassword" class="h-5 w-5" />
                <eye-off-icon v-else class="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <!-- Terms and Conditions -->
          <div class="flex items-center mb-6">
            <input 
              id="terms"
              type="checkbox"
              v-model="agreeToTerms"
              class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              required
            />
            <label for="terms" class="ml-2 block text-sm dark:text-gray-300">
              I agree to the 
              <a href="#" class="text-primary dark:text-primary-light hover:underline">Terms of Service</a>
              and
              <a href="#" class="text-primary dark:text-primary-light hover:underline">Privacy Policy</a>
            </label>
          </div>
          
          <!-- Register Button -->
          <button 
            type="submit"
            class="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 font-medium"
          >
            Create Account
          </button>
        </form>
        
        <!-- Login Link -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?
            <router-link to="/login" class="text-primary dark:text-primary-light hover:underline font-medium">
              Sign in
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
  EyeOffIcon,
  AtSignIcon,
  MailIcon,
  CalendarIcon,
  CameraIcon
} from 'lucide-vue-next';

// Form data
const firstName = ref('');
const lastName = ref('');
const username = ref('');
const email = ref('');
const dateOfBirth = ref('');
const password = ref('');
const confirmPassword = ref('');
const agreeToTerms = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// Profile photo
const profilePhoto = ref(null);
const profilePhotoPreview = ref('');
const fileInput = ref(null);

// Trigger file input click
const triggerFileInput = () => {
  fileInput.value.click();
};

// Handle file selection
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    profilePhoto.value = file;
    
    // Create preview URL
    const reader = new FileReader();
    reader.onload = (e) => {
      profilePhotoPreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

// Handle registration submission
const handleRegister = () => {
  // Here you would implement your registration logic
  // First, validate that passwords match
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match');
    return;
  }
  
  console.log('Registration attempt:', {
    firstName: firstName.value,
    lastName: lastName.value,
    username: username.value,
    email: email.value,
    dateOfBirth: dateOfBirth.value,
    hasProfilePhoto: !!profilePhoto.value
  });
  
  // For demo purposes, we'll just redirect to the login page
  // In a real app, you would register with your backend first
  // router.push('/login');
};
</script>
