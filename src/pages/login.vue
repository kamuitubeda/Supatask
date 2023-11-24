<!-- src/components/LoginPage.vue -->

<template>
    <f7-page>
        <f7-page-content class="login-page-content">
            <!-- Vertically Centered Login Form -->
            <div class="login-form-container">
                <!-- Your login form goes here -->
                <div class="item-media"><img src="icons/256x256.png" width="150" /></div>
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
                        v-on:keydown.enter="login"
                    >
                    <template #media>
                        <f7-icon icon="demo-list-icon" />
                    </template>
                    </f7-list-input>
                    <f7-list-button style="padding-top:5px;">
                        <f7-button preloader :loading="isLoading" large fill @click="login">Login</f7-button>
                    </f7-list-button>
                </f7-list>
                
            </div>
        </f7-page-content>
    </f7-page>
</template>
  
<script>
import supabase from '../js/supabase';
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
        async login() {
            this.isLoading = true;

            try {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: this.email,
                    password: this.password,
                });

                //console.log(data.session.access_token);

                if (error) {
                    console.error('Error signing in:', error);
                    return;
                }

                this.isLoading = false;
                // localStorage.setItem('access_token', data.session.access_token);
                // localStorage.setItem('user', data.session.user);
                
                // Navigate to the home page or perform other actions
                f7.views.main.router.navigate('/');
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
  