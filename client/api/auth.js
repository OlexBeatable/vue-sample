export default {
    signIn(ctx, credentials) {
        return ctx.$axios.post('/auth/login', credentials);
    },
    signUp(ctx, data) {
        return ctx.$axios.post('/auth/register', data);
    },
    me(ctx, config) {
        return ctx.$axios.post('/auth/me', {}, config);
    },
    update(ctx, data) {
        return ctx.$axios.put('/auth/me', data);
    },
    updatePassword(ctx, data) {
        return ctx.$axios.put('/auth/me/update-password', data);
    }
};
