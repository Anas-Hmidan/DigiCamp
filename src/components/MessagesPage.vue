<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow flex h-[600px]">
      <!-- Conversations List -->
      <div class="w-1/3 border-r dark:border-gray-700">
        <div class="p-4 border-b dark:border-gray-700">
          <h2 class="text-xl font-semibold dark:text-white">Messages</h2>
          <div class="mt-2 relative">
            <input 
              type="text" 
              placeholder="Search messages..." 
              class="w-full p-2 pl-8 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white"
            />
            <search-icon class="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
        <div class="overflow-y-auto h-[calc(600px-73px)]">
          <div 
            v-for="conversation in conversations" 
            :key="conversation.id"
            @click="activeConversation = conversation.id"
            class="p-3 border-b dark:border-gray-700 flex items-center cursor-pointer"
            :class="activeConversation === conversation.id ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'"
          >
            <div class="relative">
              <img :src="conversation.avatar" alt="Contact" class="h-12 w-12 rounded-full" />
              <div v-if="conversation.online" class="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-gray-800"></div>
            </div>
            <div class="ml-3 flex-1 overflow-hidden">
              <div class="flex justify-between items-center">
                <p class="font-medium dark:text-white">{{ conversation.name }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">{{ conversation.time }}</p>
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400 truncate">{{ conversation.lastMessage }}</p>
            </div>
            <div v-if="conversation.unread" class="ml-2 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
              <span class="text-xs text-white">{{ conversation.unread }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Active Conversation -->
      <div class="w-2/3 flex flex-col">
        <div class="p-4 border-b dark:border-gray-700 flex items-center">
          <img 
            :src="getActiveConversation?.avatar" 
            alt="Contact" 
            class="h-10 w-10 rounded-full mr-3" 
          />
          <div>
            <p class="font-medium dark:text-white">{{ getActiveConversation?.name }}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              {{ getActiveConversation?.online ? 'Online' : 'Last seen recently' }}
            </p>
          </div>
          <div class="ml-auto flex">
            <button class="p-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
              <phone-icon class="h-5 w-5" />
            </button>
            <button class="p-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
              <video-icon class="h-5 w-5" />
            </button>
            <button class="p-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
              <more-vertical-icon class="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div class="flex-1 p-4 overflow-y-auto">
          <div v-if="getActiveConversation" class="space-y-4">
            <div v-for="(message, index) in getActiveConversation.messages" :key="index" class="flex">
              <div 
                v-if="message.sender === 'them'" 
                class="flex max-w-[80%]"
              >
                <img :src="getActiveConversation.avatar" alt="Contact" class="h-8 w-8 rounded-full mr-2 self-end" />
                <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <p class="text-sm dark:text-white">{{ message.text }}</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ message.time }}</p>
                </div>
              </div>
              <div 
                v-else 
                class="flex max-w-[80%] ml-auto"
              >
                <div class="bg-primary text-white p-3 rounded-lg">
                  <p class="text-sm">{{ message.text }}</p>
                  <p class="text-xs text-white/70 mt-1">{{ message.time }}</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="h-full flex items-center justify-center">
            <div class="text-center">
              <message-square-icon class="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
              <p class="text-gray-500 dark:text-gray-400">Select a conversation to start messaging</p>
            </div>
          </div>
        </div>
        
        <div v-if="getActiveConversation" class="p-4 border-t dark:border-gray-700">
          <div class="flex items-center">
            <button class="p-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
              <plus-circle-icon class="h-5 w-5" />
            </button>
            <button class="p-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
              <image-icon class="h-5 w-5" />
            </button>
            <button class="p-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
              <smile-icon class="h-5 w-5" />
            </button>
            <input 
              type="text" 
              placeholder="Type a message..." 
              class="flex-1 mx-2 p-2 border dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white"
            />
            <button class="p-2 text-primary dark:text-primary-light">
              <send-icon class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { 
  SearchIcon, 
  PhoneIcon, 
  VideoIcon, 
  MoreVerticalIcon, 
  MessageSquareIcon, 
  PlusCircleIcon, 
  ImageIcon, 
  SmileIcon, 
  SendIcon 
} from 'lucide-vue-next';

// Active conversation
const activeConversation = ref(1);

// Conversations data
const conversations = ref([
  {
    id: 1,
    name: 'Sarah Chen',
    avatar: 'https://i.pravatar.cc/150?img=5',
    online: true,
    time: '10:42 AM',
    lastMessage: 'Are you coming to the study group tonight?',
    unread: 2,
    messages: [
      {
        sender: 'them',
        text: 'Hey Alex! How\'s your project coming along?',
        time: '10:30 AM'
      },
      {
        sender: 'me',
        text: 'Pretty good! Just finishing up the final touches on the presentation.',
        time: '10:35 AM'
      },
      {
        sender: 'them',
        text: 'That\'s great to hear! Are you coming to the study group tonight?',
        time: '10:42 AM'
      }
    ]
  },
  {
    id: 2,
    name: 'Marcus Williams',
    avatar: 'https://i.pravatar.cc/150?img=8',
    online: false,
    time: 'Yesterday',
    lastMessage: 'Thanks for sharing those notes!',
    unread: 0,
    messages: [
      {
        sender: 'them',
        text: 'Hey, do you have the notes from yesterday\'s lecture?',
        time: 'Yesterday, 3:15 PM'
      },
      {
        sender: 'me',
        text: 'Yes, I\'ll send them over right now.',
        time: 'Yesterday, 3:20 PM'
      },
      {
        sender: 'me',
        text: '[File: CS301_Lecture_Notes.pdf]',
        time: 'Yesterday, 3:21 PM'
      },
      {
        sender: 'them',
        text: 'Thanks for sharing those notes!',
        time: 'Yesterday, 3:25 PM'
      }
    ]
  },
  {
    id: 3,
    name: 'Priya Patel',
    avatar: 'https://i.pravatar.cc/150?img=9',
    online: true,
    time: 'Yesterday',
    lastMessage: 'The basketball game was amazing!',
    unread: 0,
    messages: [
      {
        sender: 'me',
        text: 'Did you see the game last night?',
        time: 'Yesterday, 8:30 PM'
      },
      {
        sender: 'them',
        text: 'Yes! That last-minute three-pointer was incredible!',
        time: 'Yesterday, 8:45 PM'
      },
      {
        sender: 'them',
        text: 'The basketball game was amazing!',
        time: 'Yesterday, 8:46 PM'
      }
    ]
  },
  {
    id: 4,
    name: 'Computer Science Club',
    avatar: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    online: false,
    time: 'Monday',
    lastMessage: '[Event Reminder] Hackathon this weekend!',
    unread: 0,
    messages: [
      {
        sender: 'them',
        text: '[Event Reminder] Hackathon this weekend!',
        time: 'Monday, 9:00 AM'
      },
      {
        sender: 'them',
        text: 'Don\'t forget to register your team by Thursday if you plan to participate.',
        time: 'Monday, 9:01 AM'
      }
    ]
  }
]);

// Get active conversation
const getActiveConversation = computed(() => {
  return conversations.value.find(conv => conv.id === activeConversation.value);
});
</script>

