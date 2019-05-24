export default {
    create(ctx, data) {
        return ctx.$axios.post('/feedback', data);
    }
};
