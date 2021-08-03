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

export const createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (err) {
      console.log('Error on creating user', err)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ promt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
