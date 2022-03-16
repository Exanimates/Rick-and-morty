import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from "vue-router";
import Main from './Main.vue';
import Episode from './Episode.vue';
import EpisodeList from './EpisodeList.vue'
import Character from './Character.vue'
import Location from './Location.vue'

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
    {
      path: "/character/:id",
      name: "Character",
      component: Character,
      props: true
    },
    {
      path: "/location/:id",
      name: "Location",
      component: Location,
      props: true
    },
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

createApp(Main).use(router).mount('#app')