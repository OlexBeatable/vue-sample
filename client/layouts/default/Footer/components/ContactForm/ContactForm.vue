<template>
    <div>

        <!-- Title -->
        <h3 class="h3 m-b-20 m-t-20">Contact us</h3>

        <!-- Form -->
        <b-form @submit.prevent="handleSubmit" v-if="!isSent" class="footer-form">

            <!-- Name -->
            <b-form-group label="Name" for="inputName">
                <b-form-input
                    id="inputName"
                    type="text"
                    placeholder="Name"
                    v-model="form.name"
                    :state="false"
                />
                <b-form-feedback id="input-feedback" v-if="error.name">{{ error.name[0] }}</b-form-feedback>
            </b-form-group>

            <!-- Email -->
            <b-form-group label="Email" for="inputEmail">
                <b-form-input
                    id="inputEmail"
                    type="text"
                    placeholder="Email"
                    v-model="form.email"
                />
                <b-form-feedback id="input-feedback" v-if="error.email">{{ error.email[0] }}</b-form-feedback>
            </b-form-group>

            <!-- Phone -->
            <b-form-group label="Phone" for="inputPhone">
                <b-form-input
                    id="inputPhone"
                    type="text"
                    placeholder="(___) ___-__-__"
                    v-model="form.phone"
                />
                <b-form-feedback id="input-feedback" v-if="error.phone">{{ error.phone[0] }}</b-form-feedback>
            </b-form-group>

            <!-- Message -->
            <b-form-group label="Message" for="inputMessage">
                <b-form-textarea
                    id="inputMessage"
                    placeholder="Message"
                    v-model="form.message"
                    :rows="3"
                    :max-rows="6"
                />
                <b-form-feedback id="input-feedback" v-if="error.message">{{ error.message[0] }}</b-form-feedback>
            </b-form-group>

            <!-- Submit button -->
            <div class="btn-wrap">
                <button type="submit" class="btn btn-send">Send</button>
            </div>
        </b-form>

        <!-- Success message -->
        <div v-if="isSent">Success</div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import VueScrollTo              from 'vue-scrollto';
    import api                      from '@/api/feedback';

    export default {
        data: () => ({
            isSent: false,
            form: {},
            error: {}
        }),
        computed: mapState('contactUs', [
            'isScroll'
        ]),
        methods: {
            ...mapActions('contactUs', [
                'scroll'
            ]),
            handleSubmit() {
                api.create(this, this.form)
                    .then(() => {
                        this.form = {};
                        this.error = {};
                        this.isSent = true;
                    })
                    .catch((error) => {
                        if (error.response.status === 422) {
                            this.error = error.response.data;
                        }
                    });
            },
            handleScroll() {
                const scrollOptions = {
                    easing: 'ease-in'
                };

                // Scroll to form
                VueScrollTo.scrollTo(this.$el, 500, scrollOptions);

                // Set focus to first input
                this.$el.querySelector('input').focus();

                this.scroll(false);
            }
        },
        watch: {
            isScroll(val) {
                if (val) {
                    this.handleScroll();
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    $color-dark-grey: #757575;

    .form-group {
        margin-bottom: 20px;
        padding-right: 20px;

        input {
            width: 100%;
            padding: 5px 10px 6px;
            font-size: 14px;
            border: none;
            color: $color-dark-grey;
            border-radius: 2px;
        }

        textarea {
            font-size: 14px;
            padding: 5px 10px;
            color: $color-dark-grey;
            width: 100%;
            resize: none;
            border: none;
            border-radius: 2px;
        }
    }
</style>