import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Styles
import './style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './assets/styles/mx-common.scss';

// Store
import { createPinia } from 'pinia'
import { useGameStore, PlayerData } from './pinia/game.pinia';

// Players Data
import player1 from './pl-data/江户川烟花.json';
import player2 from './pl-data/阿尼亚小星星.json';
import player3 from './pl-data/小林弘树.json';
import player4 from './pl-data/松本二婶.json';
import player5 from './pl-data/伊藤悠雅.json';

import avatar1 from './assets/avatars/pl-1.jpg';
import avatar2 from './assets/avatars/pl-2.jpg';
import avatar3 from './assets/avatars/pl-3.jpg';
import avatar4 from './assets/avatars/pl-4.jpg';
import avatar5 from './assets/avatars/pl-5.jpg';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.use(createPinia());

app.mount('#app');

const game = useGameStore();

game.players = [
  player1,
  player2,
  player3,
  player4,
  player5
];

game.avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5
];

