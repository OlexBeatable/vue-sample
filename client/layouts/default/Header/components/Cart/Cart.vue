<template>
    <div class="l-header__basket u-inlineBlock u-alignMiddle p-t-10 p-b-10">
        <nuxt-link :to="{ name: 'cart.index' }">

            <!-- Icon -->
            <i class="icon-sport_shop_icons-53 m-r-5 u-fz-20 u-alignMiddle"/>

            <!-- Quantity -->
            <span class="basket__count u-alignMiddle">
                {{ quantity }} products
                <i class="icon-sport_shop_icons-26 u-alignMiddle"/>
            </span>

            <!-- Sum -->
            <span class="basket__total u-fw700 u-alignMiddle">
                {{ sum.value }} {{ sum.symbol }}
            </span>

        </nuxt-link>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters('cart', [
                'quantity',
                'sum'
            ]),
            ...mapGetters('discounts', {
                currentDiscount: 'current'
            })
        },
        watch: {
            currentDiscount() {
                this.$store.dispatch('cart/fetchProducts');
            }
        }
    };
</script>

<style lang="scss">
    .l-header__basket {
        margin-right: 20px;
    }
</style>