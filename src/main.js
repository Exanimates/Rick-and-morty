import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from "vue-router";
import Main from './Main.vue';
import Episode from './Episode.vue';
import EpisodeList from './EpisodeList.vue'

const routes = [
    {
        path: "/",
        name: "EpisodeList",
        component: EpisodeList
    },
    {
      path: "/episode/:id",
      name: "Episode",
      component: Episode,
      props: true
    },
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

createApp(Main).use(router).mount('#app')