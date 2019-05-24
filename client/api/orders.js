export default {
    all(ctx, params) {
        return ctx.$axios.get('/orders', { params });
    },
    create(ctx, data) {
        return ctx.$axios.post('/orders', data);
    },
    downloadAll(ctx, params) {
        return ctx.$axios.post('/orders/download', null, { params, responseType: 'blob' });
    },
    downloadOne(ctx, id) {
        return ctx.$axios.post(`/orders/${id}/download`, null, { responseType: 'blob' });
    }
};
