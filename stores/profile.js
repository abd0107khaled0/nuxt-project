import { defineStore } from 'pinia'
export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: null,
    token:'myFakeToken12345',
    // token:null,
  }),

  actions: {
    async fetchProfile() {
      const response = await authFetch('/api/profile');
      this.profile = response.data.value;
    },
    async login(data) {
      const response = await authFetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      if (response.data.value) {
        this.profile = response.data.value;
        this.token = response.data.value.token;
      }
    },
    async logout() {
      const response = await authFetch('/api/logout', {
        method: 'POST'
      });
      if (response.data.value === true) {
        this.profile = null;
        this.token = "";
      }
    },
  }
});

