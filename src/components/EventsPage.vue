<template>
  <div class="max-w-2xl mx-auto">
    <!-- Mobile Header for Events Page -->
    <div class="lg:hidden flex items-center justify-between p-4 mb-4">
      <h1 class="text-xl font-bold text-primary dark:text-primary-light">Events</h1>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
      <div class="p-4 border-b dark:border-gray-700 flex justify-between items-center">
        <h2 class="text-xl font-semibold dark:text-white">Upcoming Events</h2>
        <button class="text-primary dark:text-primary-light flex items-center">
          <plus-icon class="h-5 w-5 mr-1" />
          Create Event
        </button>
      </div>
      
      <!-- Event Filters -->
      <div class="p-4 border-b dark:border-gray-700 flex flex-wrap gap-2">
        <button class="bg-primary text-white px-3 py-1 rounded-full text-sm">All Events</button>
        <button class="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm dark:text-white">This Week</button>
        <button class="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm dark:text-white">Academic</button>
        <button class="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm dark:text-white">Social</button>
        <button class="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm dark:text-white">Sports</button>
      </div>
      
      <!-- Events List -->
      <div>
        <div v-for="event in events" :key="event.id" class="p-4 border-b dark:border-gray-700 last:border-b-0 flex">
          <div class="mr-4 text-center min-w-[60px]">
            <div class="bg-gray-100 dark:bg-gray-700 rounded-t-lg p-1">
              <p class="text-xs font-medium text-gray-500 dark:text-gray-400">{{ event.month }}</p>
            </div>
            <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-b-lg p-2">
              <p class="text-xl font-bold dark:text-white">{{ event.day }}</p>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="font-medium text-lg dark:text-white">{{ event.title }}</h3>
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
              <clock-icon class="h-4 w-4 mr-1" />
              <span>{{ event.time }}</span>
              <span class="mx-2">•</span>
              <map-pin-icon class="h-4 w-4 mr-1" />
              <span>{{ event.location }}</span>
            </div>
            <p class="mt-2 text-sm dark:text-gray-300">{{ event.description }}</p>
            <div class="mt-3 flex items-center">
              <div class="flex -space-x-2 mr-3">
                <img v-for="(attendee, index) in event.attendees.slice(0, 3)" :key="index" 
                  :src="attendee" alt="Attendee" class="h-6 w-6 rounded-full border border-white dark:border-gray-800" />
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ event.totalAttendees }} going</p>
              <div class="ml-auto">
                <button class="bg-primary text-white px-3 py-1 rounded-lg text-sm">Interested</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { 
  PlusIcon, 
  ClockIcon, 
  MapPinIcon 
} from 'lucide-vue-next';

// Events data
const events = ref([
  {
    id: 1,
    title: 'Intro to Machine Learning Workshop',
    month: 'NOV',
    day: '15',
    time: '3:00 PM - 5:00 PM',
    location: 'Tech Building, Room 305',
    description: 'Learn the basics of machine learning algorithms and how to implement them using Python.',
    attendees: ['https://i.pravatar.cc/150?img=5', 'https://i.pravatar.cc/150?img=8', 'https://i.pravatar.cc/150?img=9'],
    totalAttendees: 24
  },
  {
    id: 2,
    title: 'Campus Fall Festival',
    month: 'NOV',
    day: '18',
    time: '12:00 PM - 8:00 PM',
    location: 'Main Quad',
    description: 'Annual fall festival with food, games, and performances by student groups.',
    attendees: ['https://i.pravatar.cc/150?img=12', 'https://i.pravatar.cc/150?img=25', 'https://i.pravatar.cc/150?img=20'],
    totalAttendees: 156
  },
  {
    id: 3,
    title: 'Basketball Game: Wildcats vs. Eagles',
    month: 'NOV',
    day: '22',
    time: '7:00 PM - 9:00 PM',
    location: 'University Arena',
    description: 'Come support our team in this important conference match!',
    attendees: ['https://i.pravatar.cc/150?img=5', 'https://i.pravatar.cc/150?img=8', 'https://i.pravatar.cc/150?img=9'],
    totalAttendees: 89
  },
  {
    id: 4,
    title: 'Career Fair: Tech & Engineering',
    month: 'NOV',
    day: '25',
    time: '10:00 AM - 4:00 PM',
    location: 'Student Center Ballroom',
    description: 'Meet recruiters from top companies in the tech and engineering fields.',
    attendees: ['https://i.pravatar.cc/150?img=11', 'https://i.pravatar.cc/150?img=12', 'https://i.pravatar.cc/150?img=20'],
    totalAttendees: 210
  }
]);
</script>

