<template>
    <ul class="l-footer__sitemap">

        <!-- Main category -->
        <li>
            <nuxt-link :to="{ name: 'products.index', params: { category_slug: category.slug } }">
                {{ category.name }}
            </nuxt-link>
        </li>

        <!-- Subcategories -->
        <template v-if="subCategories && subCategories.length">
            <li
                v-for="(category, index) in subCategories"
                :key="index"
            >
                <nuxt-link :to="{ name: 'products.index', params: { category_slug: category.slug } }">
                    {{ category.name }}
                </nuxt-link>
            </li>
        </template>
    </ul>
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