<template>
  <div class="font-sans">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-31202308261755227-Ou1dUMEVhI511zxwJZQaLzOp2sVP7P.png" alt="ISET Djerba Logo" class="h-16" />
          </div>
          
          <div class="hidden md:flex space-x-8 text-gray-700">
            <a href="#home" class="hover:text-iset-blue transition-colors">Home</a>
            <a href="#about" class="hover:text-iset-blue transition-colors">About</a>
            <a href="#programs" class="hover:text-iset-blue transition-colors">Programs</a>
            <a href="#events" class="hover:text-iset-blue transition-colors">Events</a>
            <a href="#gallery" class="hover:text-iset-blue transition-colors">Gallery</a>
            <a href="#partners" class="hover:text-iset-blue transition-colors">Partners</a>
            <a href="#contact" class="hover:text-iset-blue transition-colors">Contact</a>
          </div>
          
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-gray-700">
            <Menu v-if="!mobileMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-md">
        <div class="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a href="#home" class="hover:text-iset-blue transition-colors" @click="mobileMenuOpen = false">Home</a>
          <a href="#about" class="hover:text-iset-blue transition-colors" @click="mobileMenuOpen = false">About</a>
          <a href="#programs" class="hover:text-iset-blue transition-colors" @click="mobileMenuOpen = false">Programs</a>
          <a href="#events" class="hover:text-iset-blue transition-colors" @click="mobileMenuOpen = false">Events</a>
          <a href="#gallery" class="hover:text-iset-blue transition-colors" @click="mobileMenuOpen = false">Gallery</a>
          <a href="#partners" class="hover:text-iset-blue transition-colors" @click="mobileMenuOpen = false">Partners</a>
          <a href="#contact" class="hover:text-iset-blue transition-colors" @click="mobileMenuOpen = false">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section with 3D Background -->
    <section id="home" class="relative h-screen pt-20">
      <div ref="threeContainer" class="absolute inset-0 z-0"></div>
      <div class="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div class="max-w-2xl bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-lg">
          <h1 class="text-4xl md:text-5xl font-light text-iset-blue mb-4">Welcome to <span class="font-semibold">ISET Djerba</span></h1>
          <p class="text-xl text-gray-700 mb-6">Higher Institute of Technological Studies of Djerba</p>
          <p class="text-gray-600 mb-8">"We Create Cleverness" - Empowering students with technological knowledge and practical skills for a successful future.</p>
          <div class="flex flex-wrap gap-4">
            <button class="bg-iset-blue hover:bg-iset-blue/90 text-white px-6 py-3 rounded-md transition-colors">
              Explore Programs
            </button>
            <button class="border border-iset-blue text-iset-blue hover:bg-iset-blue/10 px-6 py-3 rounded-md transition-colors">
              Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-light text-iset-blue mb-2">About <span class="font-semibold">ISET Djerba</span></h2>
          <div class="w-20 h-1 bg-iset-orange mx-auto"></div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-semibold mb-4">Our Mission</h3>
            <p class="text-gray-600 mb-6">ISET Djerba is dedicated to providing high-quality technological education that prepares students for successful careers in various industries. We focus on practical skills, innovation, and research to meet the demands of the modern workplace.</p>
            
            <h3 class="text-2xl font-semibold mb-4">Our Vision</h3>
            <p class="text-gray-600 mb-6">To be a leading technological institute recognized for excellence in education, research, and community service, producing graduates who contribute significantly to technological advancement and economic development.</p>
            
            <div class="grid grid-cols-2 gap-4 mt-8">
              <div class="bg-white p-4 rounded-lg shadow-sm text-center">
                <Users class="h-8 w-8 text-iset-blue mx-auto mb-2" />
                <h4 class="font-semibold">2,500+</h4>
                <p class="text-sm text-gray-500">Students</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm text-center">
                <GraduationCap class="h-8 w-8 text-iset-blue mx-auto mb-2" />
                <h4 class="font-semibold">15+</h4>
                <p class="text-sm text-gray-500">Programs</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm text-center">
                <BookOpen class="h-8 w-8 text-iset-blue mx-auto mb-2" />
                <h4 class="font-semibold">120+</h4>
                <p class="text-sm text-gray-500">Courses</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm text-center">
                <Award class="h-8 w-8 text-iset-blue mx-auto mb-2" />
                <h4 class="font-semibold">95%</h4>
                <p class="text-sm text-gray-500">Employment Rate</p>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                 alt="ISET Djerba Campus" 
                 class="rounded-lg shadow-lg w-full h-auto object-cover" />
            <div class="absolute -bottom-6 -left-6 bg-iset-orange text-white p-4 rounded-lg shadow-lg">
              <h4 class="font-semibold text-lg">Founded in 2000</h4>
              <p>23 years of excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section id="programs" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-light text-iset-blue mb-2">Academic <span class="font-semibold">Programs</span></h2>
          <div class="w-20 h-1 bg-iset-orange mx-auto"></div>
          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">Discover our diverse range of technological programs designed to prepare you for success in today's competitive job market.</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(program, index) in programs" :key="index" 
               class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div class="h-48 bg-gray-200 relative overflow-hidden">
              <img :src="program.image" :alt="program.title" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 class="text-white font-semibold text-xl p-4">{{ program.title }}</h3>
              </div>
            </div>
            <div class="p-4">
              <p class="text-gray-600 mb-4">{{ program.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-iset-blue font-semibold">{{ program.duration }}</span>
                <button class="text-iset-orange hover:text-iset-blue flex items-center gap-1 text-sm">
                  Learn more <ChevronRight class="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <button class="border border-iset-blue text-iset-blue hover:bg-iset-blue/10 px-6 py-3 rounded-md transition-colors">
            View All Programs
          </button>
        </div>
      </div>
    </section>

    <!-- Events Section -->
    <section id="events" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-light text-iset-blue mb-2">Events & <span class="font-semibold">News</span></h2>
          <div class="w-20 h-1 bg-iset-orange mx-auto"></div>
          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">Stay updated with the latest events, news, and activities happening at ISET Djerba.</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(event, index) in events" :key="index" 
               class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-48 bg-gray-200 relative overflow-hidden">
              <img :src="event.image" :alt="event.title" class="w-full h-full object-cover" />
              <div class="absolute top-0 left-0 bg-iset-orange text-white px-3 py-1 m-3 rounded">
                {{ event.date }}
              </div>
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-xl mb-2">{{ event.title }}</h3>
              <p class="text-gray-600 mb-4">{{ event.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500 flex items-center gap-1">
                  <MapPin class="h-4 w-4" /> {{ event.location }}
                </span>
                <button class="text-iset-orange hover:text-iset-blue flex items-center gap-1 text-sm">
                  Read more <ChevronRight class="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <button class="border border-iset-blue text-iset-blue hover:bg-iset-blue/10 px-6 py-3 rounded-md transition-colors">
            View All Events
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-light text-iset-blue mb-2">Photo <span class="font-semibold">Gallery</span></h2>
          <div class="w-20 h-1 bg-iset-orange mx-auto"></div>
          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">Explore our campus life, events, and activities through our photo gallery.</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="(image, index) in galleryImages" :key="index" 
               class="relative overflow-hidden rounded-lg group cursor-pointer"
               @click="openGalleryImage(index)">
            <img :src="image" alt="Gallery image" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-iset-blue/0 group-hover:bg-iset-blue/30 transition-colors flex items-center justify-center">
              <Search class="text-white opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8" />
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <button class="border border-iset-blue text-iset-blue hover:bg-iset-blue/10 px-6 py-3 rounded-md transition-colors">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section id="partners" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-light text-iset-blue mb-2">Our <span class="font-semibold">Partners</span></h2>
          <div class="w-20 h-1 bg-iset-orange mx-auto"></div>
          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">We collaborate with leading organizations and institutions to provide the best opportunities for our students.</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(partner, index) in partners" :key="index" 
               class="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
            <img :src="partner.logo" :alt="partner.name" class="max-h-16 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-light text-iset-blue mb-2">Contact <span class="font-semibold">Us</span></h2>
          <div class="w-20 h-1 bg-iset-orange mx-auto"></div>
          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">Have questions? We're here to help. Reach out to us using the contact information below.</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-iset-blue" />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-iset-blue" />
                </div>
              </div>
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" id="subject" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-iset-blue" />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-iset-blue"></textarea>
              </div>
              <button type="submit" class="bg-iset-blue hover:bg-iset-blue/90 text-white px-6 py-3 rounded-md transition-colors">
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h3 class="text-2xl font-semibold mb-6">Contact Information</h3>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="bg-iset-blue/10 p-3 rounded-full">
                  <MapPin class="h-6 w-6 text-iset-blue" />
                </div>
                <div>
                  <h4 class="font-semibold">Address</h4>
                  <p class="text-gray-600">Route Midoun, Djerba, Tunisia</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="bg-iset-blue/10 p-3 rounded-full">
                  <Phone class="h-6 w-6 text-iset-blue" />
                </div>
                <div>
                  <h4 class="font-semibold">Phone</h4>
                  <p class="text-gray-600">+216 75 XXX XXX</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="bg-iset-blue/10 p-3 rounded-full">
                  <Mail class="h-6 w-6 text-iset-blue" />
                </div>
                <div>
                  <h4 class="font-semibold">Email</h4>
                  <p class="text-gray-600">contact@isetdjerba.edu.tn</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="bg-iset-blue/10 p-3 rounded-full">
                  <Clock class="h-6 w-6 text-iset-blue" />
                </div>
                <div>
                  <h4 class="font-semibold">Office Hours</h4>
                  <p class="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              <h4 class="font-semibold mb-4">Follow Us</h4>
              <div class="flex gap-4">
                <a href="#" class="bg-iset-blue/10 p-3 rounded-full hover:bg-iset-blue hover:text-white transition-colors">
                  <Facebook class="h-5 w-5" />
                </a>
                <a href="#" class="bg-iset-blue/10 p-3 rounded-full hover:bg-iset-blue hover:text-white transition-colors">
                  <Twitter class="h-5 w-5" />
                </a>
                <a href="#" class="bg-iset-blue/10 p-3 rounded-full hover:bg-iset-blue hover:text-white transition-colors">
                  <Instagram class="h-5 w-5" />
                </a>
                <a href="#" class="bg-iset-blue/10 p-3 rounded-full hover:bg-iset-blue hover:text-white transition-colors">
                  <Linkedin class="h-5 w-5" />
                </a>
                <a href="#" class="bg-iset-blue/10 p-3 rounded-full hover:bg-iset-blue hover:text-white transition-colors">
                  <Youtube class="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-31202308261755227-Ou1dUMEVhI511zxwJZQaLzOp2sVP7P.png" alt="ISET Djerba Logo" class="h-16 mb-4 brightness-0 invert" />
            <p class="text-gray-400 mb-4">"We Create Cleverness"</p>
            <p class="text-gray-400">ISET Djerba is dedicated to providing high-quality technological education that prepares students for successful careers.</p>
          </div>
          
          <div>
            <h4 class="font-semibold text-lg mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#home" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" class="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#programs" class="text-gray-400 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#events" class="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="#gallery" class="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#partners" class="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#contact" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold text-lg mb-4">Resources</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Student Portal</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">E-Learning Platform</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Library</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Research</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Career Services</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Alumni</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold text-lg mb-4">Newsletter</h4>
            <p class="text-gray-400 mb-4">Subscribe to our newsletter to receive updates on events, news, and opportunities.</p>
            <form class="space-y-2">
              <input type="email" placeholder="Your email address" class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-iset-blue" />
              <button type="submit" class="w-full bg-iset-orange hover:bg-iset-orange/90 text-white px-4 py-2 rounded-md transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400">© 2023 ISET Djerba. All rights reserved.</p>
          <div class="flex gap-4 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { 
  Menu, X, Users, GraduationCap, BookOpen, Award, ChevronRight, 
  MapPin, Search, Facebook, Twitter, Instagram, Linkedin, Youtube,
  Phone, Mail, Clock
} from 'lucide-vue-next';

// Mobile menu state
const mobileMenuOpen = ref(false);

// Three.js setup
const threeContainer = ref(null);
let scene, camera, renderer, controls;
let animationFrameId;

// Sample data
const programs = ref([
  {
    title: 'Computer Science',
    description: 'Learn programming, algorithms, databases, and software engineering to build innovative applications.',
    duration: '3 Years',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Electrical Engineering',
    description: 'Study circuits, electronics, power systems, and control systems for various applications.',
    duration: '3 Years',
    image: 'https://images.unsplash.com/photo-1581092921461-39b9884d8d35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Business Administration',
    description: 'Develop management, marketing, finance, and entrepreneurship skills for business success.',
    duration: '3 Years',
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }
]);

const events = ref([
  {
    title: 'Technology Innovation Summit',
    description: 'Join industry experts and academics to explore the latest technological innovations and their applications.',
    date: 'Oct 15, 2023',
    location: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Annual Graduation Ceremony',
    description: 'Celebrating the achievements of our graduating class of 2023 with a formal ceremony and reception for graduates and their families.',
    date: 'Jun 30, 2023',
    location: 'Campus Garden',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Career Fair 2023',
    description: 'Connect with potential employers, explore job opportunities, and network with industry professionals.',
    date: 'Nov 5, 2023',
    location: 'Student Center',
    image: 'https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }
]);

const galleryImages = ref([
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1497&q=80'
]);

const partners = ref([
  { name: 'Partner 1', logo: 'https://via.placeholder.com/150x80?text=Partner+1' },
  { name: 'Partner 2', logo: 'https://via.placeholder.com/150x80?text=Partner+2' },
  { name: 'Partner 3', logo: 'https://via.placeholder.com/150x80?text=Partner+3' },
  { name: 'Partner 4', logo: 'https://via.placeholder.com/150x80?text=Partner+4' },
  { name: 'Partner 5', logo: 'https://via.placeholder.com/150x80?text=Partner+5' },
  { name: 'Partner 6', logo: 'https://via.placeholder.com/150x80?text=Partner+6' },
  { name: 'Partner 7', logo: 'https://via.placeholder.com/150x80?text=Partner+7' },
  { name: 'Partner 8', logo: 'https://via.placeholder.com/150x80?text=Partner+8' }
]);

// Gallery image viewer
const openGalleryImage = (index) => {
  // In a real implementation, this would open a lightbox or modal
  console.log('Opening gallery image:', index);
};

// Initialize Three.js scene
const initThree = () => {
  if (!threeContainer.value) return;
  
  // Scene setup
  scene = new THREE.Scene();
  
  // Camera setup
  camera = new THREE.PerspectiveCamera(
    75, 
    threeContainer.value.clientWidth / threeContainer.value.clientHeight, 
    0.1, 
    1000
  );
  camera.position.z = 5;
  
  // Renderer setup
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(threeContainer.value.clientWidth, threeContainer.value.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  threeContainer.value.appendChild(renderer.domElement);
  
  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;
  
  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);
  
  // Create particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1000;
  
  const posArray = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  // Materials
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x00a8ff, // ISET blue color
    transparent: true,
    opacity: 0.8
  });
  
  // Mesh
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);
  
  // Create floating shapes
  const shapes = [];
  
  // Create a sphere
  const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const sphereMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x00a8ff,
    transparent: true,
    opacity: 0.7
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(-2, 1, -2);
  scene.add(sphere);
  shapes.push(sphere);
  
  // Create a torus
  const torusGeometry = new THREE.TorusGeometry(0.3, 0.1, 16, 100);
  const torusMaterial = new THREE.MeshPhongMaterial({ 
    color: 0xff7f00, // ISET orange color
    transparent: true,
    opacity: 0.7
  });
  const torus = new THREE.Mesh(torusGeometry, torusMaterial);
  torus.position.set(2, -1, -1);
  scene.add(torus);
  shapes.push(torus);
  
  // Create an octahedron
  const octahedronGeometry = new THREE.OctahedronGeometry(0.4);
  const octahedronMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x00a8ff,
    transparent: true,
    opacity: 0.7
  });
  const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial);
  octahedron.position.set(0, 0, -3);
  scene.add(octahedron);
  shapes.push(octahedron);
  
  // Animation function
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    
    // Rotate particles
    particlesMesh.rotation.x += 0.0005;
    particlesMesh.rotation.y += 0.0005;
    
    // Animate shapes
    shapes.forEach((shape, i) => {
      shape.rotation.x += 0.005;
      shape.rotation.y += 0.005;
      shape.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
    });
    
    // Update controls
    controls.update();
    
    // Render
    renderer.render(scene, camera);
  };
  
  // Handle window resize
  const handleResize = () => {
    camera.aspect = threeContainer.value.clientWidth / threeContainer.value.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(threeContainer.value.clientWidth, threeContainer.value.clientHeight);
  };
  
  window.addEventListener('resize', handleResize);
  
  // Start animation
  animate();
  
  // Cleanup function
  return () => {
    window.removeEventListener('resize', handleResize);
    cancelAnimationFrame(animationFrameId);
    if (threeContainer.value) {
      threeContainer.value.removeChild(renderer.domElement);
    }
    
    // Dispose geometries and materials
    particlesGeometry.dispose();
    particlesMaterial.dispose();
    sphereGeometry.dispose();
    sphereMaterial.dispose();
    torusGeometry.dispose();
    torusMaterial.dispose();
    octahedronGeometry.dispose();
    octahedronMaterial.dispose();
  };
};

onMounted(() => {
  const cleanup = initThree();
  
  onUnmounted(() => {
    if (cleanup) cleanup();
  });
});
</script>

<style>
:root {
  --iset-blue: #00a8ff;
  --iset-orange: #ff7f00;
}

.text-iset-blue {
  color: var(--iset-blue);
}

.text-iset-orange {
  color: var(--iset-orange);
}

.bg-iset-blue {
  background-color: var(--iset-blue);
}

.bg-iset-orange {
  background-color: var(--iset-orange);
}

.border-iset-blue {
  border-color: var(--iset-blue);
}

.border-iset-orange {
  border-color: var(--iset-orange);
}

html {
  scroll-behavior: smooth;
}
</style>