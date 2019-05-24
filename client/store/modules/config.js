import _           from 'lodash';
import api         from '@/api/config';
import * as types  from '../mutation-types';

const state = {
    all: {}
};

const actions = {

    /**
     * Fetch global config from api.
     *
     * @param commit
     * @returns {Promise.<void>}
     */
    async fetchAll({ commit }) {
        const { data } = await api.all(this);

        data.phones = _.split(data.phones, ',');

        commit(types.SET_CONFIG, data);
    }
};

const mutations = {
    [types.SET_CONFIG](state, config) {
        state.all = config;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
