export default {
    single(ctx, slug) {
        return ctx.$axios.get(`/pages/${slug}`);
    }
};
