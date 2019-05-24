<template>
    <div class="l-header__bottom m-t-20 m-b-20" v-if="categories.length">
        <div class="container">
            <div class="row">
                <div class="col-xs-24">
                    <div class="l-bottom__menu-outer">
                        <ul class="l-bottom__menu u-listUnstyled u-posRelative u-z-3">
                            <category-item
                                v-for="(category, index) in categories"
                                :key="index"
                                :category="category"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import CategoryItem from '../CategoryItem/CategoryItem.vue';

    export default {
        components: {
            CategoryItem
        },
        computed: mapState('categories', {
            categories(state) {
                let items = state.all;

                // Add route to categories.
                items = items.map((item) => {
                    item.route = { name: 'products.index', params: { category_slug: item.slug } };

                    return item;
                });

                // Add sale, max-sale links to categories.
                items.push(...[
                    { name: 'Sale', route: { name: 'products.index', query: { type: 'sale' } } },
                    { name: 'Max Sale', route: { name: 'products.index', query: { type: 'max_sale' } } }
                ]);

                return items;
            }
        })
    };
</script>