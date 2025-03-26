import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router"; // Updated to import router from router/index.ts
import "./style.css";

// Create pinia store
const pinia = createPinia();

// Create app
const app = createApp(App);

// Use plugins
app.use(pinia);
app.use(router);

// Mount the app
app.mount("#app");
