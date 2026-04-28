import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart')) || []
  }),

  actions: {
    addToCart(product) {
      const existing = this.cart.find(p => p.id === product.id)

      if (existing) {
        existing.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }

      this.save()
    },

    increase(id) {
      const item = this.cart.find(p => p.id === id)
      item.quantity++
      this.save()
    },

    decrease(id) {
      const item = this.cart.find(p => p.id === id)

      if (item.quantity > 1) {
        item.quantity--
      } else {
        this.cart = this.cart.filter(p => p.id !== id)
      }

      this.save()
    },

    save() {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  },

  getters: {
    totalPrice: (state) =>
      state.cart.reduce((total, item) =>
        total + item.price * item.quantity, 0)
  }
})