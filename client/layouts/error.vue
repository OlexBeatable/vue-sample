<template>
    <div class="error-wrap">
        <h1 v-if="error.statusCode === 404" class="error-title">
            <span class="error-number">4<b>0</b>4</span> <br />
            Page not found
        </h1>

        <h1 v-else class="error-title">An error occurred</h1>

        <div class="error-link">
            <nuxt-link to="/">Back to Home page</nuxt-link>
        </div><!-- /.error-link -->
    </div><!-- /.error-wrap -->
</template>

<script>
    export default {
        props: ['error']
    };
</script>

<style lang="scss" scoped>
    .error-wrap {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .error-title {
        font-size: 32px;
        text-align: center;
        color: #ffffff;
    }
    
    .error-number {
        font-weight: bold;
        color: #3c76bf;

        b {
            color: #ffffff;
        }
    }

    .error-link {
        text-align: center;
        text-transform: uppercase;
        margin-top: 20px;

        a {
            color: #3c76bf;

            transition: all 0.3s ease;

            &:hover {
                color: #ffffff;
            }
        }
    }
</style>