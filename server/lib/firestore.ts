import { collection, getDocs, getDoc, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore'
import { firestoreDB } from './firebase'

export const queryByCollection = async (col: string) => {
  // @ts-ignore
  const colRef = collection(firestoreDB, col)

  const snapshot = await getDocs(colRef)

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      title: doc.data().title,
      id: doc.id
    }
  })

  return docs
}

export const queryById = async (col: string, id: string) => {
  const docRef = doc(firestoreDB, col, id)
  const docSnap = await getDoc(docRef)

  return docSnap.data()
}

export const set = async (col: string, document: Object) => {
  await setDoc(doc(collection(firestoreDB, col)), document, { merge: true })
}

export const add = async (col: string, document: Object) => {
  // @ts-ignore
  const colRef = collection(firestoreDB, col)

  const docRef = await addDoc(colRef, document)

  return docRef
}

export const del = async (col, id) => {
  const docRef = doc(firestoreDB, col, id)
  return await deleteDoc(docRef)
}
