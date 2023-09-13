import React from "react";
import { GoogleAuth } from "./Firebase/firebase";

const Login = () => {
	const loginWithGoogle = async () => {
		try {
			const data = await GoogleAuth();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<div>
				<button onClick={loginWithGoogle}>Google</button>
				<button>Facebook</button>
				<button>Github</button>
			</div>

			<div>
				<input type="text" placeholder="username" />
				<input type="password" placeholder="password" />
				<button>Login</button>
			</div>
		</div>
	);
};

export default Login;
