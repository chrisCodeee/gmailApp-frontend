import { useNavigate } from "react-router-dom";
import { useAuthState } from "../../state-management";
import { BtnNext, Form, SignUpFormInput } from "../components";
import SignUp from "../SignUp";
import { FormEvent, useEffect } from "react";
import { validateUsername } from "./useValidateUser";
import ErrorMessage from "./ErrorMessage";

const page3 = () => {
	const { user, error, setError } = useAuthState();
	const navigate = useNavigate();

	useEffect(() => {
		user.username = user.username.split("@")[0];
	}, []);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const { error } = validateUsername(user.username.trim());

		if (error) {
			user.username = user.username.split("@")[0];
			return setError("username", error.details[0].message);
		}

		if (user.username.includes("gmail")) {
			return setError("username", "This username isn't allowed. Try again.");
		} else {
			navigate("/register/step_4");
		}

		user.username = user.username + "@gmail.com";

		// axios
		// 	.post("http://localhost:8080/users/checkEmail", user)
		// 	.then((res) => {
		// 		if (res.status === 200) {
		// 			navigate("/register/step_4");
		// 		}
		// 	})
		// 	.catch(() => {
		// 		setError("username", "Username already registered");
		// 		user.username = user.username.split("@")[0];
		// 	});
	};

	return (
		<>
			<SignUp>
				<Form heading="How you’ll sign in" subHeading="Create a Gmail address for signing in to your Google Account" handleSubmit={handleSubmit}>
					<div style={{ position: "relative" }}>
						<SignUpFormInput name="username" labelName="Username" value={`${user.username}`} error={error.username} autoFocusValue />
						<span style={{ position: "absolute", right: "15px", top: "15px" }}>@gmail.com</span>
					</div>

					{error.username ? <ErrorMessage errorMessage={error.username} /> : <span style={{ fontSize: "1.2rem", paddingLeft: "1rem" }}>You can use letters, numbers & periods</span>}

					<div style={{ marginTop: "10rem" }}>
						<BtnNext />
					</div>
				</Form>
			</SignUp>
		</>
	);
};

export default page3;
