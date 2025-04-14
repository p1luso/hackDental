import { storage } from "./firebase";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";

export const uploadFile = async (file, folder) => {
  const fileRef = ref(storage, `${folder}/${file.name}`);
  const uploadResult = await uploadBytes(fileRef, file);
  return getDownloadURL(uploadResult.ref);
};
