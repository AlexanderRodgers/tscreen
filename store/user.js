import firebase from '~/plugins/firebase';

import Cookies from 'cookie-universal-nuxt';

export const state = () => ({
   uid: null,
   user: null,
   loggedIn: false
})

export const getters = {
   uid (state) {
      if (state.user && state.user.uid) return state.user.uid
      else return null
   },
   user (state) {
      return state.user
   },
   isAuthenticated (state) {
      return !!state.user && !!state.user.uid
   }
}

export const actions = {

  async login({dispatch, state}, user) {
    console.log('[STORE ACTIONS] - login');
    const token = await firebase.auth().currentUser.getIdToken(true)
    console.log(user);
    const userInfo = {
      name: user.displayName,
      email: user.email,
      avatar: user.photoURL,
      uid: user.uid
    }
    console.log(userInfo);

    this.$cookies.set('access_token', token); // saving token in cookie for server rendering
    await dispatch('setUSER', userInfo);
    await dispatch('saveUID', userInfo.uid);
    await dispatch('setLoggedIn', true);
    console.log('[STORE ACTIONS] - in login, response:', status);

  },

  async logout({commit, dispatch}) {
    console.log('[STORE ACTIONS] - logout');
    await firebase.auth().signOut();

    this.$cookies.remove('access_token');
    commit('setUSER', null);
    commit('saveUID', null);
  },

  saveUID({commit}, uid) {
    console.log('[STORE ACTIONS] - saveUID');
    commit('saveUID', uid);
  },

  setUSER({commit}, user) {
    commit('setUSER', user);
  },

  setLoggedIn({ commit }, loggedIn) {
    commit('setLoggedIn', loggedIn);
  }

}

export const mutations = {
  saveUID (state, uid) {
    console.log('[STORE MUTATIONS] - saveUID:', uid);
    state.uid = uid;
  },
  setUSER (state, user) {
    console.log('[STORE MUTATIONS] - setUSER:', user);
    state.user = user;
  },
  setLoggedIn(state, loggedIn) {
    console.log('[STORE MUTATIONS] - loggedIn:', loggedIn)
    state.loggedIn = loggedIn;
  }
}