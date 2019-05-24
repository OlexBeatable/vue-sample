<template>
    <div class="swiper-slide">
        <div class="slider__info u-bottom-right m-b-40 m-r-25 u-fz-0" v-if="item.title || item.price">

            <!-- Title -->
            <div class="visible-xs u-fz-24 m-b-10 u-color-white" v-if="item.title">
                {{ item.title }}
            </div>
            <div class="hidden-xs u-inlineBlock slide__name m-button-default-lg button-dark no-hover" v-if="item.title">
                {{ item.title }}
            </div>

            <!-- Price -->
            <div
                class="u-inlineBlock m-button-default-lg button-white no-hover"
                v-if="item.price"
            >
                {{ item.price.value }} <span>{{ item.price.symbol }}</span>
            </div>

            <!-- Link -->
            <a
                class="m-button-default-lg button-blue"
                target="_blank"
                :href="item.url"
                v-if="item.url"
            >Buy</a>
        </div><!-- /.slider__info -->

        <!-- Image -->
        <img :src="item.image.url" :alt="item.title">
    </div>
</template>

<script>
    export default {
        props: ['item']
    };
</script>