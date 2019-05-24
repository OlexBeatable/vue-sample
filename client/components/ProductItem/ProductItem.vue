<template>
    <div class="col-sm-8 col-lg-6">
        <div class="m-product-card">
            <nuxt-link
                class="u-inlineBlock"
                :to="route"
            >
                <div class="card__markers">
                    <div class="m-button-default-xs button-blue u-inlineBlock">{{ status }}</div>
                </div>
                <div class="card__image">
                    <img class="u-imgResponsive" :src="product.thumbnail.url" :alt="product.name">

                    <div class="card__image-link">Quick review</div>
                </div>
            </nuxt-link>
            <div class="card__info">
                <div class="card__category">{{ product.category.name }}</div>
                <div class="card__name">{{ product.name }}</div>
                <div class="card__price">{{ product.final_price.value }} {{ product.final_price.symbol }}</div>
                <div class="card__add-cart">
                    <button class="m-button__simple" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div><!-- /.m-product-card -->
    </div><!-- /.col -->
</template>

<script>
    import _ from 'lodash';

    export default {
        computed: {

            /**
             * Collect product route.
             *
             * @returns string
             */
            route() {
                return {
                    name: 'products.view',
                    params: {
                        category_slug: this.product.category.slug,
                        slug: this.product.slug
                    }
                };
            },

            /**
             * Get human-friendly product status.
             *
             * @returns string
             */
            status() {
                switch (this.product.status) {
                    case 'max_sale':
                        return 'Max Sale';

                    case 'sale':
                        return 'Sale';

                    case 'novelty':
                        return 'New';

                    case 'top_sale':
                        return 'Top Sale';

                    default:
                        return '';
                }
            }
        },
        props: ['product'],
        methods: {
            addToCart() {
                this.$store.dispatch('cart/add', this.product);
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>