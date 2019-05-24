export default {
    all(ctx) {
        return ctx.$axios.get('/sizes');
    }
};
