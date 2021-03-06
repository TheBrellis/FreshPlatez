const state = {
    cart: [
    ]
};

const getters = {
    getCartItems: (state) => state.cart
};

const actions = {
    removeCartItem: function ({ commit }, itemId) {
        commit('removeItem', itemId);
        commit('storeData');
    },

    addCartItem: function ({ commit }, newItem) {
        commit('addItem', newItem);
        commit('storeData');
    },

    updateCartItem: function ({ commit }, updatedItem) {
        commit('updateItem', updatedItem);
        commit('storeData');
    },

    clearCartData: function ({ commit }) {
        commit('clearData');
    },

    preLoadCart: function ({ commit }) {
        commit('loadCart');
    }
};

const mutations = {

    addItem: (state, newItem) => {
        state.cart.push(newItem);
    },

    removeItem: (state, itemId) => {
        state.cart = state.cart.filter(item => {
            return item.id != itemId;
        })
    },

    updateItem: (state, updatedItem) => {
        state.cart.map((item, index) => {
            if (item.id === updatedItem.id) {
                state.cart[index] = updatedItem
            }
        })
    },

    storeData: (state) => {
        window.localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    clearData: (state) => {
        state.cart = [];
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    loadCart: (state) => {
        if (localStorage.getItem('cart')) {
            state.cart = JSON.parse(localStorage.getItem('cart'));
        }
    }


};


export default {
    state,
    getters,
    actions,
    mutations
};