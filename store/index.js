import {getUserFromCookie, getUserFromSession} from '@/helpers'
import { db } from '~/plugins/firebase';

export const actions = {

  async nuxtServerInit ({ dispatch }, { req }) {
    const [user, userData] = getUserFromCookie(req);
    if (user) {
      await dispatch('user/setUSER', userData);
      await dispatch('user/setLoggedIn', true);
    }
  }
}