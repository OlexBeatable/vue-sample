<template>
    <div class="l-header__registration  u-inlineBlock u-alignMiddle p-t-10 p-b-10 b-r b-l b-white-opacity-06">

        <!-- For guest -->
        <template v-if="!isAuthenticated">
            <button type="button" class="u-link-hover" @click.prevent="showSignInModal">Sign in</button>
            <span> | </span>
            <button type="button" class="u-link-hover" @click.prevent="showSignUpModal">Sign up</button>
        </template>

        <!-- For authenticated user -->
        <template v-if="isAuthenticated">
            <nuxt-link :to="{ name: 'profile.index' }" class="u-link-hover">Profile</nuxt-link>
            <span> | </span>
            <button type="button" class="u-link-hover" @click.prevent="logout">Logout</button>
        </template>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: mapGetters('auth', [
            'isAuthenticated'
        ]),
        methods: {
            logout() {
                this.$store.dispatch('auth/logout');

                this.$router.push('/');
            },
            showSignInModal() {
                this.$store.dispatch('modal/show', 'sign-in');
            },
            showSignUpModal() {
                this.$store.dispatch('modal/show', 'sign-up');
            }
        }
    };
</script>