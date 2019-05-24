import * as types from '../mutation-types';

const state = {
    modals: {}
};

const actions = {
    show({ commit }, type) {
        commit(types.SHOW_MODAL, type);
    },
    hide({ commit }, type) {
        commit(types.HIDE_MODAL, type);
    }
};

const mutations = {
    [types.SHOW_MODAL](state, type) {
        state.modals = { ...state.modals, [type]: true };
    },
    [types.HIDE_MODAL](state, type) {
        state.modals = { ...state.modals, [type]: false };
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
