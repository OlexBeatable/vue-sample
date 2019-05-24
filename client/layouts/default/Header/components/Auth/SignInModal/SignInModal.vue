<template>
    <div class="auth-modal">
        <modal type="sign-in" hide-footer>
            <div class="l-auth">
                <div class="l-auth__block">
                    <h2 class="h1 u-textCenter">{{ title }}</h2>

                    <form class="m-form" @submit.prevent="handleSubmit">

                        <!-- Email -->
                        <div class="form-group">
                            <label class="form-control__label" for="email">Email</label>
                            <input id="email" type="email" v-model="form.email">

                            <div v-if="error.email" class="form-errors">{{ error.email[0] }}</div>
                        </div>

                        <!-- Password -->
                        <div class="form-group">
                            <label class="form-control__label" for="singin-password">Password</label>
                            <input id="singin-password" type="password" v-model="form.password">

                            <div v-if="error.password" class="form-errors">{{ error.password[0] }}</div>
                        </div>

                        <!-- Submit button -->
                        <div>
                            <button type="submit" class="m-button__bordered-white u-fillWidth">Sign in</button>
                        </div>

                        <!-- Remember me | Forgot password link -->
                        <div class="u-flex-between u-align-items-center m-t-5">
                            <div>
                                <input type="checkbox" id="remember-me" v-model="form.remember_me">
                                <label for="remember-me">Remember me</label>
                            </div>
                            <div>
                                <nuxt-link :to="{ name: 'password.reset' }">Forgot password?</nuxt-link>
                            </div>
                        </div>

                        <!-- Social Media links -->
                        <social-media-links />
                    </form>
                </div>

                <div class="u-flex-between l-auth__bottom-block">
                    <div>
                        <button
                            type="button"
                            class="u-link-hover--default"
                            @click.prevent="showSignUpModal"
                        >Registration</button>
                    </div>
                </div>
            </div>
        </modal>
    </div><!-- /.signin-modal -->
</template>

<script>
    import api              from '@/api/auth';
    import Modal            from '@/components/Modal/Modal.vue';
    import SocialMediaLinks from '../components/SocialMediaLinks/SocialMediaLinks.vue';

    export default {
        components: {
            Modal,
            SocialMediaLinks
        },
        head: {
            title: 'Sign in'
        },
        data: () => ({
            title: 'Sign in',
            form: {
                email: null,
                password: null,
                remember_me: false
            },
            error: {}
        }),
        methods: {
            handleSubmit() {
                api.signIn(this, this.form)
                    .then((response) => {
                        this.resetForm();

                        const { access_token: token } = response.data;

                        this.$store.dispatch('auth/login', { token })
                            .then(() => this.$store.dispatch('modal/hide', 'sign-in'));
                    })
                    .catch((error) => {
                        this.resetForm();

                        const { response } = error;

                        if (response) {
                            if (response.data.code && response.data.message) {
                                this.error.email = [response.data.message];
                            } else if (response.status === 422) {
                                this.error = response.data;
                            }
                        }
                    });
            },
            resetForm() {
                this.error = {};
            },
            showSignUpModal() {
                this.$store.dispatch('modal/show', 'sign-up');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .auth-modal {
        .modal {
            max-width: 430px;
        }

        .modal-dialog {
            background: none;
            padding: 0;
        }
    }
</style>