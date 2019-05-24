<template>
    <div class="footer-phone">
        <i class="fa fa-phone m-r-5" aria-hidden="true"/>
        <a
            v-for="(item, index) in phones"
            :key="index"
            :href="`tel:${item}`"
            :class="index ? 'm-r-5 u-inlineBlock' : ''"
        >
            {{ `${item} ${!index ? '|' : ''}` }}
        </a>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState('config', {
            phones: state => state.all.phones
        })
    };
</script>