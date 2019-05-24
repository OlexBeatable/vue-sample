import * as types from '../mutation-types';

const state = {
    isScroll: false
};

const actions = {
    scroll({ commit }, value) {
        commit(types.SCROLL, value);
    }
};

const mutations = {
    [types.SCROLL](state, value) {
        state.isScroll = value;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
