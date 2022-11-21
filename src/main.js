import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
require('dotenv').config();

app.use(router);

app.mount("#app");
