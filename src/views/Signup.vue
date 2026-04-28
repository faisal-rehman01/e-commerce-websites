<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    
    <div class="bg-white p-8 rounded-xl shadow-md w-96">

      <h1 class="text-2xl font-bold mb-6 text-center">Sign Up</h1>


      <input
        type="text"
        placeholder="Name"
        class="w-full p-3 border rounded-lg mb-3"
      />

  
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


      <button class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 mb-4">
        Create Account
      </button>

  
      <div class="text-center my-4 text-gray-400">OR</div>


      <a
        href="https://accounts.google.com/"
        target="_blank"
        class="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition"
      >


        <svg class="w-5 h-5" viewBox="0 0 48 48">
          <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"/>
          <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"/>
          <path fill="#4CAF50" d="M24 44c5.3 0 10.1-2 13.7-5.3l-6.3-5.2C29.4 35 26.8 36 24 36c-5.3 0-9.8-3.3-11.3-7.9l-6.6 5.1C9.5 39.7 16.2 44 24 44z"/>
          <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.6 5.4-6.8 6.9l6.3 5.2C39.8 37.6 44 31.5 44 24c0-1.3-.1-2.7-.4-3.5z"/>
        </svg>

        <span class="font-medium text-gray-700">
          Continue with Google
        </span>

      </a>

    </div>

  </div>
</template>