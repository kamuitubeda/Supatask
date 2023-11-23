<!-- src/components/LoginPage.vue -->

<template>
    <f7-page>
        <f7-page-content class="login-page-content">
          <!-- Vertically Centered Login Form -->
          <div class="login-form-container">
            <!-- Your login form goes here -->
            <f7-list strong-ios dividers-ios inset-ios>
                <f7-list-input
                    outline
                    label="Email"
                    floating-label
                    type="email"
                    placeholder="Your email"
                    clear-button
                    v-model:value="email"
                >
                <template #media>
                  <f7-icon icon="demo-list-icon" />
                </template>
                </f7-list-input>
                <f7-list-input
                    outline
                    label="Password"
                    floating-label
                    type="password"
                    placeholder="Your password"
                    clear-button
                    v-model:value="password"
                >
                <template #media>
                  <f7-icon icon="demo-list-icon" />
                </template>
                </f7-list-input>
            </f7-list>
            <f7-button preloader :loading="isLoading" large fill @click="login">Login</f7-button>
          </div>
        </f7-page-content>
    </f7-page>
</template>
  
<script>
    import { createClient } from '@supabase/supabase-js';
    import { f7 } from 'framework7-vue';
    export default {
        data() {
            return {
                email: '',
                password: '',
                isLoading: false,
            };
        },
        props: {
            f7router: Object,
        },
        methods: {
            login() {
                const supabase = createClient('https://gkejeggnthubqwktnevo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrZWplZ2dudGh1YnF3a3RuZXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1MTM3ODQsImV4cCI6MjAxMDA4OTc4NH0.tChbYMN3RearQ4exFo5GY40Yjafxw60e_wC3h4qUfx0');

                this.isLoading = true;

                try {
                    const { data, error } = supabase.auth.signInWithPassword({
                        email: this.email,
                        password: this.password,
                    });

                    if (error) {
                        console.error('Error signing in:', error);
                        return;
                    }

                    this.isLoading = false;
                    //localStorage.setItem('token', token);
                    
                    // Navigate to the home page or perform other actions
                    f7.views.main.router.navigate('/');

                    // // User signed in successfully
                    // const user = data.user;
                    // console.log('User signed in:', user);

                    // // Store the user in Framework7 storage
                    // Framework7.Storage.set('user', user);

                    // // Redirect the user to the dashboard or other appropriate page
                    // router.push('/dashboard');
                } catch (error) {
                    this.isLoading = false;
                    console.error('Unexpected error:', error);
                }
            },
        },
    };
</script>
<style scoped>
.login-page-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 100% viewport height */
}

.login-form-container {
  text-align: center;
  max-width: 500px; /* Set a maximum width for the login form container if needed */
  width: 100%;
  margin: auto; /* Center the container horizontally */
}
</style>
  