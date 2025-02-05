import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "../state-management";
import { SignUpFormInput, BtnNext } from "./components";
import SignUp from "./SignUp";
import ErrorMessage from "./signUpPages/ErrorMessage";
import { Form } from "./components";
import { LoginUsernameContainer } from "./AuthStyles";
import { validateSigninEmail } from "./signUpPages/useValidateUser";

const Login = () => {
	const { signinDetails, error, setError } = useAuthState();
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const { error } = validateSigninEmail(signinDetails.username.trim());

		if (error) {
			return setError("username", error.details[0].message);
		}

		// console.log(signinDetails);

		// Without Backend
		if (signinDetails.username) {
			localStorage.setItem("username", JSON.stringify(signinDetails.username));
			navigate("/login/confirmpassword");
		}

		// axios
		// 	// .post("https://gmailapp-backend-production.up.railway.app/users/checkloginemail", signinDetails)
		// 	.post("http://localhost:8080/users/checkloginemail", signinDetails)
		// 	.then((res) => {
		// 		if (res.status === 200) {
		// 			// console.log(res.data);
		// 			// localStorage.setItem("user", JSON.stringify(res.data));
		// 			navigate("/login/confirmpassword");
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 		setError("username", "Couldn't find your Google Account");
		// 	});
	};

	return (
		<>
			<SignUp>
				<Form heading="Sign in" subHeading="to continue to Gmail" handleSubmit={handleSubmit}>
					<LoginUsernameContainer>
						<SignUpFormInput name="username" labelName="Email or phone" value={signinDetails.username} error={error.username} autoFocusValue />

						{error.username && <ErrorMessage errorMessage={error.username} />}

						<p className="link forgotEmail" onClick={() => navigate("/login/usernamerecovery")}>
							Forgot email?
						</p>
					</LoginUsernameContainer>

					<LoginUsernameContainer style={{ margin: "5rem 0 0 0" }}>
						<p>Not your computer? Use Guest mode to sign in privately.</p>
						<Link to="https://support.google.com/chrome/answer/6130773?hl=en" className="link learnMore">
							Learn more about using Guest mode
						</Link>
					</LoginUsernameContainer>

					<div>
						<BtnNext btnName2="Create account" link="/register" margin="4rem" />
					</div>
				</Form>
			</SignUp>
		</>
	);
};

export default Login;
