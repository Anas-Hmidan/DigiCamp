<template>
  <div class="logo-container">
    <!-- The logo image with adaptive styling for dark/light modes -->
    <img 
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-yh0c5vAYREiCSHjy0VTSte7fT1bdqZ.png" 
      alt="DigiCamp Logo" 
      class="logo-image"
      :class="{ 'light-mode': !isDarkMode, 'dark-mode': isDarkMode }"
    />
  </div>
</template>

<script setup>
import { inject, computed } from 'vue';

// Get dark mode state from parent
const darkMode = inject('darkMode');
const isDarkMode = computed(() => darkMode?.value || false);
</script>

<style scoped>
.logo-container {
  display: inline-block;
}

.logo-image {
  max-width: 100%;
  height: auto;
}

/* Light mode - invert and adjust colors to make it visible on light background */
.logo-image.light-mode {
  filter: invert(0.2) brightness(0.7) contrast(1.2);
}

/* Dark mode - use original colors which are designed for dark background */
.logo-image.dark-mode {
  filter: none;
}
</style>

