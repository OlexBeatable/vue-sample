<template>
    <div>
        <!-- Banners -->
        <banner-list/>

        <!-- Additional navigation -->
        <nav-list :categories="categories"/>

        <!-- Main description -->
        <description/>
    </div>
</template>

<script>
    import api from '@/api/categories';
    import BannerList from './components/BannerList.vue';
    import Description from './components/Description.vue';
    import NavList from './components/NavList.vue';

    export default {
        components: {
            BannerList,
            Description,\
            NavList
        },
        head: {
            title: 'Home'
        },
        async asyncData({ app }) {
            const { data } = await api.homepage(app);

            return { categories: data };
        }
    };
</script>

<style lang="scss">
    .bottom-slider {
        margin-top: 40px;
        padding-top: 35px;
        padding-bottom: 35px;
        background: url("/assets/images/home-product-bg.png") no-repeat;
        background-size: cover;
    }

</style>