import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("formatTimestamp", function(timestamp) {
  return new Date(timestamp).toUTCString();
});

new Vue({
  render: h => h(App)
}).$mount("#app");
