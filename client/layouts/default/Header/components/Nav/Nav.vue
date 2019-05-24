<template>
    <div class="top__inner">
        <template v-for="item in list">
            <nuxt-link :to="item.route" v-if="!item.isContactUsLink">
                {{ item.title }}
            </nuxt-link>
            <a :href="item.url" v-if="item.isContactUsLink" @click.stop="scroll(true)">
                {{ item.title }}
            </a>
        </template>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data: () => ({
            list: [
                { route: { name: 'pages.view', params: { slug: 'about' } }, title: 'About us' },
                { route: '#contact-us-form', title: 'Contact us', isContactUsLink: true },
                { route: { name: 'pages.view', params: { slug: 'payment-and-delivery' } }, title: 'Payment and delivery' },
                { route: { name: 'reviews.index' }, title: 'Reviews' },
                { route: { name: 'sizes.index' }, title: 'Sizes' }
            ]
        }),
        methods: mapActions('contactUs', [
            'scroll'
        ])
    };
</script>