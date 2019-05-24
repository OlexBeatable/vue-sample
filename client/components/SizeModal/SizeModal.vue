<template>
    <modal type="sizes" hide-footer>

        <!-- Modal header -->
        <h2 class="h2">
            <span>{{ title }}</span>
            <span> {{ brand.name }}</span>
        </h2>
        <div class="sub__title">{{ group.name }} {{ brand.name }}</div>

        <!-- Size list -->
        <table class="responsive">
            <thead>
                <tr>
                    <th
                        v-for="(value, index) in titles"
                        :key="index"
                    >
                        {{ value }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(size, index) in group.sizes"
                    :key="index"
                >
                    <td
                        v-for="(value, index) in size.values"
                        :key="index"
                    >
                        {{ value.value }}
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Description -->
        <div class="m-popup__danger">
            <i class="icon-sport_shop_icons-01"></i>
            <div class="danger__text">{{ description }}</div>
        </div>

    </modal>
</template>

<script>
    import _ from 'lodash';
    import { mapState } from 'vuex';
    import Modal from '@/components/Modal/Modal.vue';

    export default {
        components: {
            Modal
        },
        computed: {
            ...mapState('sizes', [
                'group',
                'brand'
            ]),
            titles() {
                let result = _.first(this.group.sizes);

                if (result) {
                    result = _.map(result.values, 'title');
                }

                return result;
            }
        },
        data: () => ({
            title: 'Size list',
            description: 'Size list'
        })
    };
</script>

<style lang="scss">
    .m-popup__container {
        overflow-y: auto;
    }

    .m-popup__danger {
        display: flex;
        align-items: center;
    }

    .icon-sport_shop_icons-01 {
        margin-right: 10px;
    }
</style>