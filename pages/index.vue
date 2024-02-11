<template>
  <AuthLayout>
    <div class="mt-10">
      <h1 class="lg:text-5xl text-3xl text-center font-extrabold">
        Log in to your Linktree
      </h1>

      <form
        class="mt-12"
        @submit.prevent="$event => login()"
      >

      <div>
        <TextInput
          placeholder="Email: link@gmail.com"
          v-model:input="email"
          inputType="email"
          :error="errors && errors.email ? errors.email[0] : ''"
        />
      </div>

      <div class="mt-4">
        <TextInput
          placeholder="Password"
          v-model:input="password"
          inputType="password"
          :error="errors && errors.password ? errors.password[0] : ''"
        />
      </div>
    </form>
    </div>
  </AuthLayout>
</template>

<script setup>
  import AuthLayout from '~~/layouts/AuthLayout.vue';

  let email = ref(null);
  let password = ref(null);
  let errors = ref(null);
</script>