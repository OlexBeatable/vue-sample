export default ({ store, req }) => {
    if (!process.server) {
        return;
    }

    store.dispatch('auth/retrieveToken', req).then((token) => {
        if (token) {
            store.dispatch('auth/login', { token });
        }
    });
};
