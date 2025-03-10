import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import FeedPage from "./components/FeedPage.vue"
import ProfilePage from "./components/ProfilePage.vue"
import NotificationsPage from "./components/NotificationsPage.vue"
import EventsPage from "./components/EventsPage.vue"
import GroupsPage from "./components/GroupsPage.vue"
import SettingsPage from "./components/SettingsPage.vue"
import MessagesPage from "./components/MessagesPage.vue"
import Home from "./components/home2.vue"
import "./assets/main.css"

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: FeedPage },
    { path: "/profile", component: ProfilePage },
    { path: "/notifications", component: NotificationsPage },
    { path: "/events", component: EventsPage },
    { path: "/groups", component: GroupsPage },
    { path: "/settings", component: SettingsPage },
    { path: "/messages", component: MessagesPage },
    { path: "/home", component: Home },
  ],
})

// Create and mount the app
const app = createApp(App)
app.use(router)

// Apply dark mode class early to prevent flash of wrong theme
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
const savedTheme = localStorage.getItem("theme")

if (savedTheme === "dark" || (!savedTheme && darkModeMediaQuery.matches)) {
  document.documentElement.classList.add("dark")
} else {
  document.documentElement.classList.remove("dark")
}

app.mount("#app")

