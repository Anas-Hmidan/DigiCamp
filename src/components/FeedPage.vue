<template>
  <div class="max-w-2xl mx-auto">
    <!-- Mobile Header for Feed Page -->
    <div class="lg:hidden flex items-center justify-between p-4 mb-4">
      <div class="w-32">
        <Logo />
      </div>
      <button @click="openPostModal" class="p-2 text-primary dark:text-primary-light">
        <edit-icon class="h-6 w-6" />
      </button>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow mb-6 p-4">
      <div class="flex items-center">
        <img src="https://i.pravatar.cc/150?img=11" alt="Profile" class="h-10 w-10 rounded-full mr-3" />
        <input 
          type="text" 
          placeholder="What's happening on campus?" 
          class="flex-1 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
          @click="openPostModal"
        />
      </div>
      <div class="flex mt-4 pt-3 border-t dark:border-gray-700">
        <button class="flex items-center mr-4 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
          <image-icon class="h-5 w-5 mr-1" />
          <span>Photo</span>
        </button>
        <button class="flex items-center mr-4 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
          <video-icon class="h-5 w-5 mr-1" />
          <span>Video</span>
        </button>
        <button class="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
          <calendar-icon class="h-5 w-5 mr-1" />
          <span>Event</span>
        </button>
      </div>
    </div>

    <!-- Stories -->
    <div class="mb-6 overflow-x-auto">
      <div class="flex space-x-2 pb-2">
        <div class="flex flex-col items-center">
          <div class="w-20 h-20 rounded-full border-2 border-dashed border-primary flex items-center justify-center bg-gray-100 dark:bg-gray-700">
            <plus-icon class="h-8 w-8 text-primary dark:text-primary-light" />
          </div>
          <span class="text-xs mt-1 dark:text-white">Add Story</span>
        </div>
        <div v-for="story in stories" :key="story.id" class="flex flex-col items-center">
          <div class="w-20 h-20 rounded-full border-2 border-primary p-1">
            <img :src="story.avatar" alt="Story" class="w-full h-full rounded-full object-cover" />
          </div>
          <span class="text-xs mt-1 dark:text-white">{{ story.name }}</span>
        </div>
      </div>
    </div>

    <!-- Posts -->
    <div v-for="post in posts" :key="post.id" class="bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
      <div class="p-4">
        <div class="flex items-center mb-3">
          <img :src="post.avatar" alt="Profile" class="h-10 w-10 rounded-full mr-3" />
          <div>
            <p class="font-medium dark:text-white">{{ post.author }}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ post.time }}</p>
          </div>
          <button class="ml-auto text-gray-500 dark:text-gray-400">
            <more-horizontal-icon class="h-5 w-5" />
          </button>
        </div>
        <p class="mb-3 dark:text-white">{{ post.content }}</p>
        <img v-if="post.image" :src="post.image" alt="Post image" class="w-full h-auto rounded-lg mb-3" />
        <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
          <div class="flex items-center">
            <div class="flex -space-x-1">
              <div class="h-5 w-5 rounded-full bg-red-500 flex items-center justify-center">
                <heart-icon class="h-3 w-3 text-white" />
              </div>
              <div class="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center">
                <thumbs-up-icon class="h-3 w-3 text-white" />
              </div>
            </div>
            <span class="ml-2">{{ post.likes }} likes</span>
          </div>
          <div>
            <span>{{ post.comments }} comments</span>
          </div>
        </div>
        <div class="flex items-center justify-between pt-3 border-t dark:border-gray-700">
          <button class="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
            <heart-icon class="h-5 w-5 mr-1" />
            <span>Like</span>
          </button>
          <button 
            @click="toggleComments(post)"
            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light"
          >
            <message-square-icon class="h-5 w-5 mr-1" />
            <span>Comment</span>
          </button>
          <button class="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
            <share-icon class="h-5 w-5 mr-1" />
            <span>Share</span>
          </button>
        </div>
        
        <!-- Comments -->
        <div v-if="post.showComments" class="mt-4 pt-3 border-t dark:border-gray-700">
          <div v-for="comment in post.commentList" :key="comment.id" class="flex mb-3">
            <img :src="comment.avatar" alt="Profile" class="h-8 w-8 rounded-full mr-2" />
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 flex-1">
              <p class="font-medium text-sm dark:text-white">{{ comment.author }}</p>
              <p class="text-sm dark:text-gray-300">{{ comment.text }}</p>
              <div class="flex items-center mt-1 text-xs text-gray-500 dark:text-gray-400">
                <span>{{ comment.time }}</span>
                <span class="mx-1">•</span>
                <button class="hover:text-primary dark:hover:text-primary-light">Like</button>
                <span class="mx-1">•</span>
                <button class="hover:text-primary dark:hover:text-primary-light">Reply</button>
              </div>
            </div>
          </div>
          <div class="flex mt-2">
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" class="h-8 w-8 rounded-full mr-2" />
            <input 
              type="text" 
              placeholder="Write a comment..." 
              class="flex-1 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-full py-1 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue';
import Logo from '../components/Logo.vue';
import { 
  ImageIcon, 
  VideoIcon, 
  CalendarIcon, 
  PlusIcon, 
  MoreHorizontalIcon, 
  HeartIcon, 
  ThumbsUpIcon, 
  MessageSquareIcon, 
  ShareIcon,
  Edit as EditIcon
} from 'lucide-vue-next';

const showPostModal = inject('showPostModal');

// Stories data
const stories = ref([
  { id: 1, name: 'Sarah', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 2, name: 'Marcus', avatar: 'https://i.pravatar.cc/150?img=8' },
  { id: 3, name: 'Priya', avatar: 'https://i.pravatar.cc/150?img=9' },
  { id: 4, name: 'David', avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: 5, name: 'Sophia', avatar: 'https://i.pravatar.cc/150?img=25' },
]);

// Sample posts data
const posts = ref([
  {
    id: 1,
    author: 'Sarah Chen',
    avatar: 'https://i.pravatar.cc/150?img=5',
    time: '2 hours ago',
    content: 'Just finished my research project on renewable energy! So excited to present at the symposium next week. Anyone else presenting?',
    image: 'https://images.unsplash.com/photo-1508615070457-7baeba4003ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    likes: 42,
    comments: 8,
    showComments: true,
    commentList: [
      {
        id: 1,
        author: 'Alex Johnson',
        avatar: 'https://i.pravatar.cc/150?img=11',
        text: "Congratulations! I'd love to hear more about your findings.",
        time: '1 hour ago'
      },
      {
        id: 2,
        author: 'Marcus Williams',
        avatar: 'https://i.pravatar.cc/150?img=8',
        text: "I'm presenting on Thursday! Let's connect and share notes.",
        time: '45 min ago'
      }
    ]
  },
  {
    id: 2,
    author: 'Marcus Williams',
    avatar: 'https://i.pravatar.cc/150?img=8',
    time: '4 hours ago',
    content: 'Study group for Advanced Algorithms tonight at the library, 7PM. We have pizza! 🍕',
    image: null,
    likes: 24,
    comments: 15,
    showComments: false,
    commentList: []
  },
  {
    id: 3,
    author: 'Priya Patel',
    avatar: 'https://i.pravatar.cc/150?img=9',
    time: 'Yesterday',
    content: 'Our basketball team won the inter-college championship! So proud of everyone who participated. Go Wildcats! 🏀🏆',
    image: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    likes: 128,
    comments: 32,
    showComments: false,
    commentList: []
  }
]);

// Toggle comments visibility
const toggleComments = (post) => {
  post.showComments = !post.showComments;
};

// Open post modal
const openPostModal = () => {
  showPostModal.show();
};

// Handle new post event
const handleNewPost = (event) => {
  const newPost = {
    id: posts.value.length + 1,
    author: 'Alex Johnson',
    avatar: 'https://i.pravatar.cc/150?img=11',
    time: 'Just now',
    content: event.detail.content,
    image: null,
    likes: 0,
    comments: 0,
    showComments: false,
    commentList: []
  };

  posts.value.unshift(newPost);
};

onMounted(() => {
  window.addEventListener('new-post', handleNewPost);
});

onUnmounted(() => {
  window.removeEventListener('new-post', handleNewPost);
});
</script>

