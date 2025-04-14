import { firestore } from "./firebase";
import {
  collection,
  setDoc,
  doc,
  Timestamp,
  query,
  getDocs,
} from "firebase/firestore";

export const getEBooks = async () => {
  const q = query(collection(firestore, "EBooks"));
  const results = await getDocs(q);
  return results.docs.map((d) => ({ ...d.data() }));
};

export const createEBook = async (data) => {
  const ref = doc(collection(firestore, "EBooks"));
  await setDoc(ref, { ...data, id: ref.id, created: Timestamp.now() });
};
