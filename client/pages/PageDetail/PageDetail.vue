<template>
    <div class="l-about container p2 u-color-white">
        <div class="row">
            <div class="col-xs-24">
                <h1 class="h1">{{ title }}</h1>
                <div class="l-about__info" v-html="description"/>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '@/api/pages';

    export default {
        head() {
            return {
                title: this.title
            };
        },
        data: () => ({
            title: null,
            description: null
        }),
        async asyncData({ app, route }) {
            const { slug } = route.params;

            const { data } = await api.single(app, slug);

            return data;
        }
    };
</script>