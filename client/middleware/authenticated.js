export default function ({ store, redirect }) {
    if (!store.getters['auth/isAuthenticated']) {
        store.dispatch('auth/logout', process.server)
            .then(() => redirect('/'));
    }
}
