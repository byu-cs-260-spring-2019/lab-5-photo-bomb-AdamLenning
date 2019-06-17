import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')


Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyAYBJubC3PUzVjJPcWsvzA3dsmaab7mUVg",
    authDomain: "authproject-31270.firebaseapp.com",
    databaseURL: "https://authproject-31270.firebaseio.com",
    projectId: "authproject-31270",
    storageBucket: "authproject-31270.appspot.com",
    messagingSenderId: "567846446386",
    appId: "1:567846446386:web:3b1adbc403c29d81"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.commit('setUser',user);
  }
  else {
    store.commit('setUser',null);
  }
});
