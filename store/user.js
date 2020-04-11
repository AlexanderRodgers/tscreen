import firebase, { db } from '~/plugins/firebase';

export const state = () => ({
   uid: null,
   user: null,
   loggedIn: false
})

export const getters = {
   uid (state) {
      if (state.user && state.user.uid) return state.user.uid;
      else return null;
   },
   user (state) {
      return state.user;
   },
   isLoggedIn (state) {
      return state.loggedIn;
   }
}

export const actions = {

  async login({dispatch, state}, user) {
    console.log('[STORE ACTIONS] - login');
    const token = await firebase.auth().currentUser.getIdToken(true);
    const uid = firebase.auth().currentUser.uid;
    let { displayName, photoUrl, emailVerified } = user;
    db.collection('users').doc(uid).get()
      .then(doc => {
        let userInfo = doc.data();
        (async () => {
          await(dispatch('setUSER', { ...userInfo, displayName, photoUrl, emailVerified }));
          await dispatch('saveUID', userInfo.uid);
          await dispatch('setLoggedIn', true);    
          this.$cookies.set('access_token', token); // saving token in cookie for server rendering
        })();
      })
      .catch(e => console.log('[STORE ERROR]: UNABLE TO GET USER DATA'))
  },

  async logout({commit, dispatch}) {
    console.log('[STORE ACTIONS] - logout');
    await firebase.auth().signOut();

    this.$cookies.remove('access_token');
    commit('setUSER', null);
    commit('saveUID', null);
    commit('setLoggedIn', false);
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