<template>
    <div class="footer-email m-t-5" v-if="email">
        <i class="fa fa-envelope m-b-10 m-r-5" aria-hidden="true"/>
        <a :href="`mailto:${email}`">{{ email }}</a>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState('config', {
            email: state => state.all.support_email
        })
    };
</script>