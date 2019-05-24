import Cookie     from 'js-cookie';
import JWTDecode  from 'jwt-decode';
import * as types from '../mutation-types';

const state = {
    token: null,
    user: {}
};

const getters = {
    isAuthenticated: state => !!state.token,
    user: state => state.user
};

const actions = {
    login({ commit, dispatch }, { token }) {
        Cookie.set('access_token', token);

        if (!process.server) {
            localStorage.setItem('access_token', token);
        }

        commit(types.SET_TOKEN, token);
        commit(types.SET_USER, token);

        dispatch('setBearerToken', token);
    },
    logout({ commit, dispatch }) {
        Cookie.remove('access_token');

        if (!process.server) {
            localStorage.removeItem('access_token');
        }

        commit(types.UNSET_TOKEN);
        commit(types.UNSET_USER);

        dispatch('setBearerToken', false);
    },
    retrieveToken(ctx, req) {
        try {
            const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('access_token='));

            /* eslint-disable */
            const token = jwtCookie.split('=')[1];
            /* eslint-enable */

            return token;
        } catch (error) {
            return false;
        }
    },
    setBearerToken(ctx, token) {
        this.$axios.setToken(token, 'Bearer');
    }
};

const mutations = {
    [types.SET_TOKEN](state, token) {
        state.token = token;
    },
    [types.SET_USER](state, token) {
        state.user = JWTDecode(token).data;
    },
    [types.UNSET_TOKEN](state) {
        state.token = null;
    },
    [types.UNSET_USER](state) {
        state.user = {};
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
