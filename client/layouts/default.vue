<template>
    <div>
        <!-- Header -->
        <header-component/>

        <!-- Main content -->
        <nuxt/>

        <!-- Footer -->
        <footer-component/>
    </div>
</template>

<script>
    import HeaderComponent from './default/Header/Header.vue';
    import FooterComponent from './default/Footer/Footer.vue';

    export default {
        components: {
            HeaderComponent,
            FooterComponent
        }
    };
</script>