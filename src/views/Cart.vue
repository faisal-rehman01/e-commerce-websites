<script setup>
import { useCartStore } from '../store/cart'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

const checkout = () => {
  router.push('/thank-you')
}
</script>

<template>
  <div class="bg-gray-100 min-h-screen">


    <div class="bg-white shadow-md sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800">🛒 Your Cart</h1>

        <button 
          @click="router.push('/')"
          class="text-blue-500 hover:underline"
        >
          ← Continue Shopping
        </button>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

   
      <div class="lg:col-span-2 space-y-4">

   
        <div v-if="cartStore.cart.length === 0" class="text-center py-20 bg-white rounded-xl shadow">
          <div class="text-5xl mb-4">🛒</div>
          <h2 class="text-xl font-semibold text-gray-700">Your cart is empty</h2>
          <p class="text-gray-500 mb-4">Add some products first</p>

          <button 
            @click="router.push('/')"
            class="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600"
          >
            Shop Now
          </button>
        </div>


        <div 
          v-for="item in cartStore.cart" 
          :key="item.id"
          class="bg-white rounded-xl shadow-md p-4 flex gap-4 items-center"
        >

  
          <img 
            :src="item.image"
            class="w-20 h-20 object-contain"
          />

  
          <div class="flex-1">
            <h3 class="font-semibold text-gray-800">
              {{ item.title }}
            </h3>

            <p class="text-blue-600 font-bold">
              ${{ item.price }}
            </p>


            <div class="flex items-center gap-2 mt-2">
              <button 
                @click="cartStore.decrease(item.id)"
                class="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                -
              </button>

              <span class="px-3">{{ item.quantity }}</span>

              <button 
                @click="cartStore.increase(item.id)"
                class="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>

        </div>

      </div>


      <div class="bg-white rounded-xl shadow-md p-6 h-fit sticky top-24">

        <h2 class="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>

        <div class="flex justify-between mb-2 text-gray-600">
          <span>Items</span>
          <span>{{ cartStore.cart.length }}</span>
        </div>

        <div class="flex justify-between mb-4 text-gray-600">
          <span>Total</span>
          <span class="font-bold text-blue-600">
            ${{ cartStore.totalPrice }}
          </span>
        </div>

        <button 
          @click="checkout"
          :disabled="cartStore.cart.length === 0"
          class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition"
        >
          Checkout
        </button>

      </div>

    </div>

  </div>
</template>