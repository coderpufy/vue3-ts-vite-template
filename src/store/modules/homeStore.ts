import { defineStore } from 'pinia'

const useHomeStore = defineStore('home', {
  state: () => ({
    name: 'coderyang'
  }),

  getters: {},

  actions: {
    changeName(value: string) {
      this.name = value
    }
  }
})

export default useHomeStore
