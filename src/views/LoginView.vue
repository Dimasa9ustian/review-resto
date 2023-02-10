<script setup>
  import { reactive, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useAuthRepository } from '@/composable';

  const repository = useAuthRepository();
  const route = useRoute();
  const router = useRouter();

  const credentials = reactive({
    email: '',
    password: '',
    device_name: 'browser',
  });


  let isLoggingIn = ref(false)
  const onSubmit = async () => {

    isLoggingIn = true

    try {
      const {data} = await repository.login(credentials);
      if(data){
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('user', JSON.stringify(data.user));
        router.replace({ name: "about" });
      }
    } catch  (e) {
      console.error(e);
    }

    isLoggingIn = false
    
  };
</script>

<template>
  <main class="grid grid-cols-12 gap-4 min-h-screen">
    <section class="col-span-6 bg-white h-full shadow-xl">
        <form method="POST" :action="route.path" class="p-40" @submit.prevent="onSubmit">
          <div class="mb-4">
            <label for="email" class="block mb-2">Email</label>
            <input 
              v-model="credentials.email" 
              type="email" 
              required
              placeholder="someone@email.com"
              class="border p-2 w-full bg-gray-50 outline-none focus:ring-4 focus:ring-blue-300 rounded">
          </div>
          <div class="mb-4">
            <label for="password" class="block mb-2">Password</label>
            <input 
              v-model="credentials.password" 
              type="password" 
              class="border p-2 w-full bg-gray-50 outline-none focus:ring-4 focus:ring-blue-300 rounded">
          </div>
          <button type="submit" class="bg-blue-600 p-2 text-white w-full block hover:bg-blue-800 rounded transition-colors duration-200">Masuk</button>
        </form>
    </section>
  </main>
</template>
