import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VueFire } from 'vuefire'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// Initialize Firebase
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDyjJeqXsmmSldQL6AO9FlDWQqCYq16tl8',
  authDomain: 'vitesse-vuefire-example.firebaseapp.com',
  databaseURL:
    'https://vitesse-vuefire-example-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'vitesse-vuefire-example',
  appId: '1:682870035896:web:8bac46c2357e0bd147eb4d',
})

if (process.env.NODE_ENV === 'production') {
  import('firebase/analytics')
    .then(({ getAnalytics }) => {
      getAnalytics(firebaseApp)
    })
    .catch((err) => {
      console.log('Analytics not loaded', err)
    })
}

createApp(App)
  // install VueFire and provide the firebase app to components
  .use(VueFire, {
    firebaseApp,
    // add modules like VueFireAuth, ...
    modules: [],
  })
  .mount('#app')
