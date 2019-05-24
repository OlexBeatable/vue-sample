<template>
    <li class="menu__item">

        <!-- Link -->
        <nuxt-link class="menu__link" :to="category.route">
            {{ category.name }}
        </nuxt-link>

        <!-- Subcategories -->
        <div class="item__submenu u-top-left" v-if="subCategories && subCategories.length">
            <ul class="u-listUnstyled">
                <li v-for="(category, index) in subCategories">
                    <nuxt-link
                        class="submenu__link"
                        :to="{ name: 'products.index', params: { category_slug: category.slug } }"
                    >
                        <i :class="`icon-sport_shop_${category.icon}`"></i>
                        <span>{{ category.name }}</span>
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </li>
</template>

<script>
    export default {
        props: ['category'],
        computed: {
            subCategories() {
                return this.category.children;
            }
        }
    };
</script>