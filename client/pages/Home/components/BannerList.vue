<template>
    <div class="l-home__main-slider container m-t-15 m-t-10" v-if="active">
        <div class="row">
            <div class="col-xs-24">
                <div v-swiper:mySwiper="swiperOptions">

                    <!-- Banners -->
                    <div class="swiper-wrapper">
                        <banner-item
                            v-for="(item, index) in items"
                            :key="index"
                            :item="item"
                            v-if="item.image"
                        />
                    </div>

                    <!-- Control Actions -->
                    <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
                    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
                    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                </div>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.l-home__main-slider -->
</template>

<script>
    import { mapGetters } from 'vuex';
    import _ from 'lodash';
    import api from '@/api/banners';
    import BannerItem from './BannerItem.vue';

    export default {
        components: {
            BannerItem
        },
        computed: mapGetters('currencies', {
            currentCurrency: 'current'
        }),
        data: () => ({
            active: false,

            // Banners
            items: [],

            // Swiper options
            swiperOptions: {
                autoplay: 5000,
                initialSlide: 1,
                loop: true,
                pagination: '.swiper-pagination',
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
                effect: 'fade'
            }
        }),
        methods: {
            async retrieveBanners() {
                const { data } = await api.all(this);

                this.items = data;

                return true;
            }
        },
        watch: {
            currentCurrency() {
                this.convertPrices();
            }
        },
        mounted() {
            this.retrieveBanners()
                .then(() => {
                    this.active = true;
                });
        }
    };
</script>