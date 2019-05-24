<template>
    <header class="l-header">
        <div class="l-header__mobile-filter">
            <div class="top__inner">

                <!-- Currency list -->
                <currency-list/>

                <!-- Phone list -->
                <phone-list/>
            </div>
        </div><!-- /.l-header__mobile-filter -->

        <div class="l-header__top container">
            <div class="l-header__mobile-top">

                <!-- Logo -->
                <nuxt-link to="/" class="l-header__logo">
                    <logo/>
                </nuxt-link>

                <!-- Authentication links -->
                <auth-links/>
            </div>

            <!-- Main navigation -->
            <nav-component/>

            <div class="top__inner u-fz-0 hidden-xs hidden-sm">

                <!-- Currency list -->
                <currency-list/>

                <!-- Discount list -->
                <discount-list v-if="isAuthenticated"/>

                <!-- Phone list -->
                <phone-list/>

                <!-- Discount badge -->
                <discount-badge/>

            </div><!-- /.top__inner -->
        </div><!-- /.l-header__top -->

        <div class="l-header__middle u-bg-default">
            <div class="container">
                <div class="row">
                    <div class="col-xs-24">
                        <div class="middle__outer">
                            <div class="header-menu-icon">
                                <i class="fa fa-bars"></i>
                                <span class="icon-text"> menu</span>
                            </div>
                            <div class="middle__inner p-t-10 p-b-10">

                                <!-- Logo -->
                                <nuxt-link to="/" class="l-header__logo u-inlineBlock u-alignMiddle">
                                    <logo/>
                                </nuxt-link>

                                <!-- Title (slogan) -->
                                <span class="u-alignMiddle visible-lg-inline-block">{{ title }}</span>

                            </div>

                            <div class="middle__inner">

                                <!-- Cart -->
                                <cart/>

                                <!-- Authentication links -->
                                <auth-links class="hidden-xs hidden-sm"/>
                            </div>
                        </div><!-- /.middle__outer -->
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container -->
        </div><!-- /.l-header__middle -->

        <!-- Categories -->
        <category-list/>

        <!-- Sign in modal -->
        <sign-in-modal/>

        <!-- Sign up modal -->
        <sign-up-modal/>

    </header>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Logo           from '@/components/Logo/Logo.vue';
    import AuthLinks      from './components/AuthLinks/AuthLinks.vue';
    import CategoryList   from './components/CategoryList/CategoryList.vue';
    import Cart           from './components/Cart/Cart.vue';
    import CurrencyList   from './components/CurrencyList/CurrencyList.vue';
    import DiscountBadge  from './components/DiscountBadge/DiscountBadge.vue';
    import DiscountList   from './components/DiscountList/DiscountList.vue';
    import NavComponent   from './components/Nav/Nav.vue';
    import PhoneList      from './components/PhoneList/PhoneList.vue';
    import Search         from './components/Search/Search.vue';
    import SignInModal    from './components/Auth/SignInModal/SignInModal.vue';
    import SignUpModal    from './components/Auth/SignUpModal/SignUpModal.vue';

    export default {
        components: {
            AuthLinks,
            CategoryList,
            Cart,
            CurrencyList,
            DiscountBadge,
            DiscountList,
            NavComponent,
            Logo,
            PhoneList,
            Search,
            SignInModal,
            SignUpModal
        },
        computed: mapGetters('auth', [
            'isAuthenticated',
            'user'
        ])
    };
</script>

<style lang="scss">
    .l-header__mobile-filter {
        background: #000000;
        color: #ffffff;
        text-align: right;
        padding-bottom: 2px;

        .b-dropdown {
            margin-right: 10px;
        }

        .dropdown-toggle,
        .dropdown-menu {
            font-family: Exo\ 2,sans-serif;
        }
    }

    .l-header__top {
        .b-dropdown {
            font-size: 15px;
            margin-right: 5px;
        }
    }
</style>