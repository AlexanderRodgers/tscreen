export default function ({ store, redirect }) {
   console.log(store.getters);
   if (!store.getters['user/isLoggedIn']) {
      return redirect('/login');
   }
}