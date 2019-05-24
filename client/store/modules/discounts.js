import _          from 'lodash';
import api        from '@/api/discounts';
import * as types from '../mutation-types';

const state = {
    all: [],
    current: {}
};

const getters = {
    all: state => state.all,
    current: (state) => {
        let { current } = state;

        if (_.isEmpty(current)) {
            current = _.first(state.all);
        }

        return current;
    }
};

const actions = {

    /**
     * Fetch all discounts from api.
     *
     * @param commit
     * @returns {Promise.<void>}
     */
    async fetchAll({ commit }) {
        const { data } = await api.all(this);

        commit(types.SET_DISCOUNTS, data);
    },

    /**
     * Set current discount.
     *
     * @param commit
     * @param discount
     */
    setCurrent({ commit }, discount) {
        commit(types.SET_CURRENT_DISCOUNT, discount);
    }
};

const mutations = {
    [types.SET_DISCOUNTS](state, discounts) {
        state.all = discounts;
    },
    [types.SET_CURRENT_DISCOUNT](state, discount) {
        state.current = discount;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
