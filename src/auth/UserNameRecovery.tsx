import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "../state-management";
import { SignUpFormInput, BtnNext } from "./components";
import SignUp from "./SignUp";
import ErrorMessage from "./signUpPages/ErrorMessage";
import { Form } from "./components";
import { validateSigninEmail } from "./signUpPages/useValidateUser";

const Login = () => {
	const { recoveryEmailDetails, error, setError } = useAuthState();
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const { error } = validateSigninEmail(recoveryEmailDetails.username);
		if (error) {
			return setError("username", error.details[0].message);
		}

		navigate("/login/queryname");
	};

	return (
		<>
			<SignUp>
				<Form heading="Find your email" subHeading="Enter your phone number or recovery email" handleSubmit={handleSubmit}>
					<div>
						<SignUpFormInput name="username" labelName="Phone number or email" value={recoveryEmailDetails.username} autoFocusValue error={error.username} />
					</div>

					<ErrorMessage errorMessage={error.username} />

					<div>
						<BtnNext margin="12rem" />
					</div>
				</Form>
			</SignUp>
		</>
	);
};

export default Login;
