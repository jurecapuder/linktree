import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  axios.defaults.baseURL = "http://localhost:8000";

  axious.defaults.withCredentials = true;

  return {
    provide: {
      axios: axios
    }
  }
})