<template>
    <div class="inner__left-block u-inlineBlock u-alignTop" v-if="discounts.length">
        <b-dropdown :text="currentDiscount" variant="link" class="fa fa-tags">
            <b-dropdown-item
                v-for="item in discounts"
                :key="item.id"
                v-if="item != current"
                @click.prevent="setCurrent(item)"
            >
                {{ item.title }}
            </b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters('discounts', {
                current: 'current',
                discounts: 'all'
            }),
            currentDiscount() {
                return `${this.current.title}`;
            }
        },
        methods: mapActions('discounts', [
            'setCurrent'
        ])
    };
</script>