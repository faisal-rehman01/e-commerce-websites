<script setup>
import { useCartStore } from '../store/cart'

const cartStore = useCartStore()
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">

    <div class="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 text-center">

 
      <div class="text-6xl mb-4"></div>


      <h1 class="text-3xl font-bold text-gray-800 mb-2">
        Thank You for Your Order!
      </h1>

      <p class="text-gray-500 mb-6">
        Your order has been placed successfully
      </p>


      <div class="bg-gray-50 rounded-xl p-4 text-left mb-6">

        <h2 class="font-semibold text-gray-700 mb-3">Order Summary</h2>

        <div 
          v-for="item in cartStore.cart" 
          :key="item.id"
          class="flex justify-between py-2 border-b last:border-b-0 text-gray-600"
        >
          <span>
            {{ item.title }} × {{ item.quantity }}
          </span>

          <span class="font-medium text-gray-800">
            ${{ (item.price * item.quantity).toFixed(2) }}
          </span>
        </div>

      </div>


      <div class="flex justify-between text-lg font-bold mb-6">
        <span>Total Paid</span>
        <span class="text-blue-600">
          ${{ cartStore.totalPrice }}
        </span>
      </div>


      <router-link 
        to="/"
        class="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Continue Shopping
      </router-link>

    </div>

  </div>
</template>