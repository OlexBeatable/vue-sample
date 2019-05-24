<template>
    <div class="inner__left-block u-inlineBlock u-alignTop m-r-15" v-if="phones.length">
        <b-dropdown :text="phones[0]" variant="link" class="fa fa-phone m-r-5">
            <b-dropdown-item v-for="(item, index) in phones" :key="index">
                {{ item }}
            </b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState('config', {
            phones: state => state.all.phones || []
        })
    };
</script>