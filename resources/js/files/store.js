import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

const localStoragePlugin = store => {
    store.subscribe((mutation, {carts}) => {
        window.localStorage.setItem('carts', JSON.stringify(carts))
    })
}

Vue.use(Vuex)

let state = {
    user: {},
    carts: JSON.parse(window.localStorage.getItem('carts') || '[]'),
    // csrfToken: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
};

const getters = {
    user(state) {
        return state.user
    },
    username(state) {
        if (state.user.name == "" || state.user.name == null)
            return state.user.mobile;
        return state.user.name;
    },
    cartsInfo(state) {
        let informations = {
            waresCount: 0,
            carts: [],
        }

        state.carts.forEach((cart, index) => {
            let info = {
                totalPrice: 0,
                totalCount: 0,
            }

            cart.wares.forEach((ware) => {
                info.totalCount += ware.count
                info.totalPrice += ware.price * ware.count
            })

            informations.carts[index] = info
            informations.waresCount += info.totalCount
        })

        return informations
    }
}

const mutations = {
    setUser(state) {
        let url = window.location.pathname
        if (url !== '/')
            router.push('/')
        axios.get('/check-user').then(response => {
            if (response.data)
                state.user = response.data

            $(".fullscreen-loading").hide("fade", 200)

            if (url === '/') {
                $("#publicCard").css('margin-top', 0)

                $("#topBannerDiv").animate({
                    marginTop: "-56px"
                }, 300, function () {
                    $("#topNavbar").removeClass("bg-dark", 300);
                    $("#topBannerShadow").show("fade", 500);
                    $("#publicCard").animate({
                        marginTop: "-170px",
                        opacity: 1
                    }, 300, function () {
                        $("#publicCard").removeClass("opacity-0");
                        $(this).animate({
                            marginTop: "-150px"
                        }, 200);
                    });
                });
            }
            if (url !== '/')
                router.push(url)
        })
    },
    addToCart(state, payload) {
        let cartIndex = state.carts.findIndex(cart => cart.business.id === payload.business.id)

        if (cartIndex > -1) {
            let wareIndex = state.carts[cartIndex].wares.findIndex(ware => ware.id === payload.ware.id)
            if (wareIndex > -1) {
                state.carts[cartIndex].wares[wareIndex].count++
            } else {
                let ware = payload.ware
                //Change Detection Caveats
                //Reactivity in Depth
                Vue.set(ware, 'count', 1)
                state.carts[cartIndex].wares.push(ware)
            }
        } else {
            let ware = payload.ware
            Vue.set(ware, 'count', 1)
            let cart = {
                wares: [ware],
                business: payload.business
            }
            state.carts.push(cart)
        }
    },
    decreaseFromCart(state, payload) {
        let cartIndex = state.carts.findIndex(cart => cart.business.id === payload.business.id)
        if (cartIndex < 0)
            return;
        let wareIndex = state.carts[cartIndex].wares.findIndex(ware => ware.id === payload.ware.id)
        if (wareIndex < 0)
            return;

        let ware = state.carts[cartIndex].wares[wareIndex]
        if (!ware.count || ware.count < 1)
            return;
        ware.count--
        if (ware.count < 1) {
            if (state.carts[cartIndex].wares.length === 1) {
                state.carts.splice(cartIndex, 1)
                return;
            }
            state.carts[cartIndex].wares.splice(wareIndex, 1)
        }
    },
    removeFromCart(state, payload) {
        let cartIndex = state.carts.findIndex(cart => cart.business.id === payload.business.id)
        if (cartIndex < 0)
            return;
        let wareIndex = state.carts[cartIndex].wares.findIndex(ware => ware.id === payload.ware.id)
        if (wareIndex < 0)
            return;

        let ware = state.carts[cartIndex].wares[wareIndex]
        if (!ware.count || ware.count < 1)
            return;

        if (state.carts[cartIndex].wares.length === 1) {
            state.carts.splice(cartIndex, 1)
            return;
        }
        state.carts[cartIndex].wares.splice(wareIndex, 1)
    }
}

const actions = {
    setUser({commit}) {
        commit('setUser')
    },
    addToCart({commit}, payload) {
        commit('addToCart', payload)
    },
    decreaseFromCart({commit}, payload) {
        commit('decreaseFromCart', payload)
    },
    removeFromCart({commit}, payload) {
        commit('removeFromCart', payload)
    },
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    plugins: [localStoragePlugin]
})

export default store


