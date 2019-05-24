<template>
    <div class="l-home__cards m-t-10 hidden-xs">
        <div class="container">
            <div class="row">
                <div class="col-xs-24 u-fz-0 hidden-xs">
                    <div class="u-posRelative clearfix u-color-white">
                        <nav-item
                            v-for="(item, index) in items"
                            :key="index"
                            :item="item"
                            :index="index"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    import NavItem from './NavItem.vue';

    export default {
        components: {
            NavItem
        },
        props: ['categories'],
        computed: {
            items() {
                let items = this.additionalItems;

                items = _.orderBy(items, 'sort_order');

                return items;
            }
        },
        data: () => ({
            active: false
        })
    };
</script>