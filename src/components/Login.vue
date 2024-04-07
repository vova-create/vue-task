<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center" >
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field v-model="myEmail" label="Email" :error-messages="emailErrors" required></v-text-field>
              <v-text-field v-model="password" label="Password" :error-messages="passwordErrors" type="password" required></v-text-field>
              <div class="error" v-if="isError">Login or password incorrect</div>
              <v-btn color="primary" type="submit">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import { useRouter } from 'vue-router';


export default {
  name: 'Login',

  setup() {
    const myEmail = ref('');
    const password = ref('');
    const isError = ref(false);
    const router = useRouter();

    const rules = {
      myEmail: { required, email },
      password: { required, minLength: minLength(6) }
    };

    const v$ = useVuelidate(rules, { myEmail, password });

    const login = () => {
      v$.value.$touch();
      if (v$.value.$error) {
        isError.value = v$.value.$error;
        return;
      }
      router.push('/gamePage');
    };

    return {
      myEmail,
      password,
      login,
      emailErrors: v$.value.myEmail.$errors,
      passwordErrors: v$.value.password.$errors,
      isError
    };
  }
};
</script>

<style scoped>
.error {
  padding: 10px;
  color: #b61d1d;
  font-size: 15px;
}
</style>
