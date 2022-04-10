import { sum } from './js/math';
import './css/bgc.less';
import { createApp } from 'vue';
import App from './vue/App.vue';


const divEl = document.createElement('div');
divEl.innerHTML = `<h1>Hello Vite</h1>`;
document.body.appendChild(divEl);


console.log(1234);
console.log(sum(12, 24));

createApp(App).mount('#app');
