import Vuex       from 'vuex';
import auth       from './modules/auth';
import categories from './modules/categories';
import config     from './modules/config';
import contactUs  from './modules/contact-us';
import discounts  from './modules/discounts';
import modal      from './modules/modal';

export default () => new Vuex.Store({
    actions: {
        nuxtClientInit({ state, dispatch }) {
            if (state.auth.token) {
                dispatch('auth/setBearerToken', state.auth.token);
            }
        },

        // Pre-rendering data from server
        nuxtServerInit({ dispatch }) {
            return Promise.all([
                dispatch('categories/fetchAll'),
                dispatch('config/fetchAll'),
                dispatch('discounts/fetchAll')
            ]);
        }
    },
    modules: {
        auth,
        categories,
        config,
        contactUs,
        discounts,
        modal
    }
});
