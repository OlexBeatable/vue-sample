<template>
    <div class="inner__left-block u-inlineBlock u-alignTop" v-if="currencies.length">
        <b-dropdown :text="current.name" variant="link">
            <b-dropdown-item
                v-for="item in currencies"
                :key="item.id"
                v-show="item.id != current.id"
                @click.prevent="setCurrent(item)"
            >
                {{ item.name }}
            </b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        computed: mapState('currencies', {
            current: 'current',
            currencies: 'all'
        }),
        methods: mapActions('currencies', [
            'setCurrent'
        ])
    };
</script>