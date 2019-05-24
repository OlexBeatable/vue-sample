export default ({ store, redirect }) => {
    if (store.getters['cart/isEmpty']) {
        redirect('/');
    }
};
