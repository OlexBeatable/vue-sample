<template>
    <div class="l-footer">
        <div class="container">
            <div class="row">

                <!-- Contact form -->
                <div class="col-xs-24 col-sm-10 col-lg-7">
                    <contact-form/>
                </div>

                <div class="col-xs-24 col-sm-14 col-lg-17">

                    <!-- Navigation title -->
                    <h3 class="h3 m-b-20 m-t-20">{{ navigationTitle }}</h3>

                    <!-- Navigation, category lists for desktop devices -->
                    <div class="row footer-sitemap">

                        <!-- Navigation -->
                        <div class="col-xs-12 col-sm-6">
                            <nav-component/>
                        </div>

                        <!-- Category list -->
                        <div
                            v-for="(category, index) in categories"
                            :key="index"
                            :class="(index > 2) ? 'col-xs-6 col-sm-3' : 'col-xs-12 col-sm-6'"
                        >
                            <category-item :category="category"/>
                        </div>

                        <!-- Divider -->
                        <div class="col-xs-24"><div class="b-b b-white-opacity p-b-30 m-b-20"/></div>
                    </div>

                    <!-- Contacts title -->
                    <h3 class="h3 m-b-20">{{ contactTitle }}</h3>

                    <div class="row">
                        <div class="col-xs-24 col-sm-15">

                            <!-- Phone list -->
                            <phone-list/>

                            <!-- Email -->
                            <email/>
                        </div>

                        <!-- Social links -->
                        <div class="col-xs-24 col-sm-9 m-t-5">
                            <social-links/>
                        </div>

                    </div><!-- /.row -->
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </div><!-- /.l-footer -->
</template>

<script>
    import { mapState } from 'vuex';
    import CategoryItem from './components/CategoryItem/CategoryItem.vue';
    import ContactForm  from './components/ContactForm/ContactForm.vue';
    import Email        from './components/Email/Email.vue';
    import Nav          from './components/Nav/Nav.vue';
    import PhoneList    from './components/PhoneList/PhoneList.vue';
    import SocialLinks  from './components/SocialLinks/SocialLinks.vue';

    export default {
        components: {
            CategoryItem,
            ContactForm,
            Email,
            navComponent: Nav,
            PhoneList,
            SocialLinks
        },
        computed: mapState('categories', {
            categories: 'all'
        }),
        data: () => ({
            navigationTitle: 'Sitemap',
            contactTitle: 'Contacts'
        })
    };
</script>

<style lang="scss" scoped>
    .h3 {
        text-align: center;
    }

    .l-footer__sitemap {
        margin-bottom: 15px;
    }

    .footer-sitemap {
        margin-bottom: 20px;
        text-align: center;
    }

    .h3,
    .footer-phone,
    .footer-email {
        text-align: center;
    }
</style>