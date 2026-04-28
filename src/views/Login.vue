<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    
    <div class="bg-white p-8 rounded-xl shadow-md w-96">

      <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>

      <input
        type="email"
        placeholder="Email"
        class="w-full p-3 border rounded-lg mb-3"
      />

      <input
        type="password"
        placeholder="Password"
        class="w-full p-3 border rounded-lg mb-5"
      />

      <button class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
        Login
      </button>


      <div class="text-center my-4 text-gray-400">OR</div>


      <router-link
        to="/signup"
        class="block w-full text-center px-4 py-3 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition"
      >
        Create New Account
      </router-link>

    </div>

  </div>
</template>