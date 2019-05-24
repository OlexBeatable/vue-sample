<template>
    <div class="u-textCenter">
        <a
            target="_blank"
            class="m-social__item m-r-5"
            v-for="(item, index) in social_links"
            :key="index"
            :href="item"
        >
            <i :class="`fa fa-${index}`" aria-hidden="true"/>
        </a>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState('config', {
            social_links: (state) => {
                const config = state.all;

                let result = {};

                if (config) {
                    result = {
                        twitter: config.social_twitter,
                        facebook: config.social_facebook,
                        google: config.social_google
                    };
                }

                return result;
            }
        })
    };
</script>