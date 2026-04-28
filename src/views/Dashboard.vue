<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useCartStore } from '../store/cart'
import { useRouter } from 'vue-router'

const products = ref([])
const search = ref('')
const cartStore = useCartStore()
const router = useRouter()


const productSection = ref(null)


const currentPage = ref(1)
const perPage = 8

onMounted(async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    products.value = data.map(p => ({
      ...p,
      availableQty: 5
    }))
  } catch (err) {
    alert('API Failed')
  }
})


const filteredProducts = computed(() =>
  products.value.filter(p =>
    p.title.toLowerCase().includes(search.value.toLowerCase())
  )
)


const totalPages = computed(() =>
  Math.ceil(filteredProducts.value.length / perPage)
)

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredProducts.value.slice(start, start + perPage)
})

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

watch(search, () => {
  currentPage.value = 1
})


const addToCart = (product) => {
  if (product.availableQty > 0) {
    cartStore.addToCart(product)
    product.availableQty--
  }
}


const goToProducts = () => {
  productSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="bg-gray-100 min-h-screen">


    <div class="bg-white shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 class="text-2xl font-bold text-gray-800">🛍 Shop</h1>


        <input 
          v-model="search"
          placeholder="Search product..."
          class="w-1/2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div class="flex items-center gap-3">

          <router-link to="/login"
            class="px-4 py-2 text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-50 transition">
            Login
          </router-link>

          <router-link to="/signup"
            class="bg-blue-500 px-4 py-2 text-white rounded-lg hover:bg-blue-600 transition">
            Sign Up
          </router-link>

          <button 
            @click="router.push('/cart')"
            class="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
          >
            Cart ({{ cartStore.cart.length }})
          </button>

        </div>

      </div>
    </div>


    <section class="relative">

  
      <img 
        src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
        class="w-full h-[500px] object-cover cursor-pointer"
        @click="goToProducts"
      />


      <div class="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">

        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Shop.com
        </h1>

        <p class="mb-6 text-lg">
          Click button to explore products
        </p>

        <button 
          @click="goToProducts"
          class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Shopping Now
        </button>

      </div>

    </section>


    <div ref="productSection" class="max-w-7xl mx-auto px-6 py-10">

      <div 
        v-if="paginatedProducts.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >

        <div 
          v-for="p in paginatedProducts" 
          :key="p.id"
          class="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
        >
          <img :src="p.image" class="h-48 object-contain mb-4" />

          <h3 class="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
            {{ p.title }}
          </h3>

          <p class="text-lg font-bold text-blue-600">
            ${{ p.price }}
          </p>

          <p class="text-sm text-gray-500 mb-3">
            Stock: {{ p.availableQty }}
          </p>

          <button 
            @click="addToCart(p)"
            :disabled="p.availableQty === 0"
            class="mt-auto bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
          >
            Add to Cart
          </button>
        </div>

      </div>

  
      <div v-else class="text-center py-20">
        <div class="text-5xl mb-4">📦</div>
        <h2 class="text-2xl font-semibold">No Products Found</h2>
      </div>

      <div v-if="totalPages > 1" class="flex justify-center gap-2 mt-10">

        <button 
          @click="changePage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="px-3 py-1 bg-gray-300 rounded-lg"
        >
          Prev
        </button>

        <button
          v-for="page in totalPages"
          :key="page"
          @click="changePage(page)"
          class="px-3 py-1 rounded-lg"
          :class="page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'"
        >
          {{ page }}
        </button>

        <button 
          @click="changePage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="px-3 py-1 bg-gray-300 rounded-lg"
        >
          Next
        </button>

      </div>

    </div>

  </div>
</template>