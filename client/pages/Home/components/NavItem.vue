<template>
    <nuxt-link
        :to="item.route"
        :class="`cards__item card-${index + 1}`"
        :style="`background-image: url('${item.image}')`"
    >

        <!-- Description -->
        <div class="u-transCenter u-textCenter" v-if="item.content">
            <i v-if="item.icon" :class="`${item.icon} u-fz-30 m-r-10`"/>
            <span v-html="item.content"/>
        </div>

        <!-- Badge -->
        <span
            class="m-button-default-md button-blue"
            v-if="item.text"
        >
            {{ item.text }}
        </span>
    </nuxt-link>
</template>

<script>
    export default {
        props: ['item', 'index']
    };
</script>