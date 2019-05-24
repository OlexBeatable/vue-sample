<template>
    <b-modal
        v-model="modalShow"
        :hide-footer="hideFooter"
        @hidden="hide"
        hide-header-close
    >
        <div slot="modal-header">
            <button
                type="button"
                aria-label="Close"
                class="close"
                @click.prevent="hide"
            />
            <slot name="modal-header"/>
        </div>

        <slot/>

        <slot name="modal-footer" />
    </b-modal>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState('modal', {
            modal(state) {
                return state.modals[this.type];
            }
        }),
        props: ['type', 'size', 'hideFooter'],
        data: () => ({
            modalShow: false
        }),
        methods: {
            hide() {
                this.$store.dispatch('modal/hide', this.type);
            }
        },
        watch: {
            modal(val) {
                this.modalShow = val;
            }
        }
    };
</script>

<style lang="scss">
    .modal-dialog {
        position: relative;
        padding: 15px 20px;
        color: #ffffff;

        .sub__title {
            font-size: 22px;
            font-weight: 500;
            margin-bottom: 5px;
        }

        table {
            width: 100%;
            border: 1px solid white;
            text-align: center;
            background: transparent;
        }

        tr:nth-child(odd) td {
            background-color: #749ed3;
        }

        tr:nth-child(even) td {
            background-color: #2a5285;
        }
    }

    .modal-header {
        position: absolute;
        top: 0;
        right: 5px;
        color: #ffffff;

        .close {
            transition: all 0.3s ease;

            &:hover {
                opacity: 0.7;
            }

            span {
                display: none;
            }
        }
    }
</style>