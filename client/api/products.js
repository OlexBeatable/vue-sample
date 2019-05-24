export default {
    all(ctx, params) {
        return ctx.$axios.get('/products', params);
    },
    single(ctx, categorySlug, slug, params) {
        return ctx.$axios.get(`/products/${categorySlug}/${slug}`, params);
    },
    requestFeedback(ctx, productId, data) {
        return ctx.$axios.post(`/products/${productId}/feedback`, data);
    },
    requestCall(ctx, productId, data) {
        return ctx.$axios.post(`/products/${productId}/call`, data);
    },
    getFilterData(ctx, url) {
        return ctx.$axios.get(`/filter${url}`);
    },
    featureProducts(ctx, params) {
        return ctx.$axios.get('/products/feature', { params });
    }
};
