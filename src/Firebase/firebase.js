import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const GoogleAuth = async () => {
	try {
		const data = await signInWithPopup(auth, provider);
		return data;
	} catch (error) {
		console.log(error);
	}
};
