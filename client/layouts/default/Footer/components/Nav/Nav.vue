<template>
    <ul class="l-footer__sitemap">
        <li v-for="(item, index) in list" :key="index">
            <nuxt-link :to="item.route">{{ item.title }}</nuxt-link>
        </li>
    </ul>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                list: [
                    { route: { name: 'pages.view', params: { slug: 'payment-and-delivery' } }, title: 'Payment and delivery' },
                    { route: { name: 'reviews.index' }, title: 'Reviews' },
                    { route: { name: 'sizes.index' }, title: 'Sizes' },
                    { route: { name: 'products.index', query: { type: 'sale' } }, title: 'Sale' },
                    { route: { name: 'products.index', query: { type: 'max-sale' } }, title: 'Max Sale' }
                ]
            };
        }
    };
</script>