import api         from '@/api/categories';
import * as types  from '../mutation-types';

const state = {
    all: []
};

const actions = {

    /**
     * Fetch all categories from api.
     *
     * @param commit
     * @returns {Promise.<void>}
     */
    async fetchAll({ commit }) {
        const { data } = await api.all(this);

        commit(types.SET_CATEGORIES, data);
    }
};

const mutations = {
    [types.SET_CATEGORIES](state, categories) {
        state.all = categories;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
