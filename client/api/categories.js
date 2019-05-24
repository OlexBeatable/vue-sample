export default {
    all(ctx) {
        return ctx.$axios.get('/categories');
    },
    homepage(ctx) {
        const params = { type: 'homepage' };

        return ctx.$axios.get('/categories', { params });
    }
};
