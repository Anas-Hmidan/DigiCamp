<template>
  <div class="min-h-screen">
    <!-- 3D Background Container -->
    <div ref="threeContainer" class="three-container fixed inset-0 z-0"></div>

    <!-- Main Content -->
    <div class="relative z-10 flex flex-col min-h-screen pb-[70px] lg:pb-0 lg:pt-0">
      <!-- Navbar Component -->
      
      <!-- Main Content -->
      <main class="flex-1  overflow-auto">
        <router-view></router-view>
      </main>
    </div>

    <!-- New Post Modal -->
    <div v-if="showPostModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg w-full max-w-lg">
        <div class="p-4 border-b flex items-center justify-between">
          <h3 class="text-lg font-semibold">Create Post</h3>
          <button @click="showPostModal = false">
            <x-icon class="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <div class="p-4">
          <div class="flex items-center mb-4">
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" class="h-10 w-10 rounded-full mr-3" />
            <div>
              <p class="font-medium">Alex Johnson</p>
              <select class="text-xs text-gray-500 bg-transparent">
                <option>Public</option>
                <option>Friends</option>
                <option>Only Me</option>
              </select>
            </div>
          </div>
          <textarea 
            placeholder="What's happening on campus?" 
            class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[120px]"
            v-model="newPostContent"
          ></textarea>
          <div class="flex items-center justify-between mt-4 p-2 border rounded-lg">
            <p class="text-sm font-medium">Add to your post</p>
            <div class="flex space-x-2">
              <button class="p-2 text-primary hover:bg-gray-100 rounded-full">
                <image-icon class="h-5 w-5" />
              </button>
              <button class="p-2 text-primary hover:bg-gray-100 rounded-full">
                <users-icon class="h-5 w-5" />
              </button>
              <button class="p-2 text-primary hover:bg-gray-100 rounded-full">
                <map-pin-icon class="h-5 w-5" />
              </button>
              <button class="p-2 text-primary hover:bg-gray-100 rounded-full">
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
import { ref, provide, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import * as THREE from 'three';
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

const threeContainer = ref(null);
let scene, camera, renderer, stars, starGeo, starMaterial, animationFrameId;

const initThree = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 1;
  camera.rotation.x = Math.PI / 2;

  renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
  renderer.setClearColor(0x000000, 0); // Set clear color to transparent
  renderer.setSize(window.innerWidth, window.innerHeight);
  threeContainer.value.appendChild(renderer.domElement);

  starGeo = new THREE.BufferGeometry();
  const starVertices = [];
  for (let i = 0; i < 6000; i++) {
    starVertices.push(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300
    );
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

  starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.5,
    transparent: true,
    opacity: 0.5
  });

  stars = new THREE.Points(starGeo, starMaterial);
  scene.add(stars);

  animate();
};

const animate = () => {
  const positions = starGeo.attributes.position.array;
  for (let i = 0; i < positions.length; i += 3) {
    positions[i + 1] -= 0.005; // Slower animation
    positions[i] += 0.002; // Move stars horizontally
    if (positions[i + 1] < -200) {
      positions[i + 1] = 200;
    }
    if (positions[i] > 300) {
      positions[i] = -300;
    }
  }
  starGeo.attributes.position.needsUpdate = true;

  renderer.render(scene, camera);
  animationFrameId = requestAnimationFrame(animate);
};

onMounted(() => {
  initThree();
  window.addEventListener('resize', onWindowResize);
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener('resize', onWindowResize);
  threeContainer.value.removeChild(renderer.domElement);
  renderer.dispose();
});

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};
</script>

<style>
:root {
  --color-primary: #4f46e5;
  --color-primary-light: #818cf8;
}

.text-primary {
  color: var(--color-primary);
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

body, html, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  position: relative;
}

.three-container {
  background: linear-gradient(to top left, #95a5a6, #d7dbdd); /* More orange gradient */
}
</style>

