import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyAqTii5VkpItBe9ee261ccGeCm42OPPqjQ',
  authDomain: 'cwb-ecommerce.firebaseapp.com',
  projectId: 'cwb-ecommerce',
  storageBucket: 'cwb-ecommerce.appspot.com',
  messagingSenderId: '402797409147',
  appId: '1:402797409147:web:c62557e210de82328783de',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ promt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
