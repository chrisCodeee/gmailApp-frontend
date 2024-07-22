import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "../state-management";
import { SignUpFormInput, BtnNext } from "./components";
import SignUp from "./SignUp";
import ErrorMessage from "./signUpPages/ErrorMessage";
import { Form } from "./components";

const ConfirmLoginPassword = () => {
	const { signinDetails, error, setError } = useAuthState();
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const password = "1234"; //From database
		if (!signinDetails.password) {
			return setError("password", "Enter a password");
		}
		if (signinDetails.password !== password) {
			return setError("password", "Wrong password. Try again or click Forgot password to reset it.");
		}

		navigate("/");
	};

	return (
		<>
			<SignUp>
				<Form heading={`Hi ............`} handleSubmit={handleSubmit} loginState>
					<div className="">To continue, first verify it’s you</div>

					<div style={{ margin: "5rem 0 0 0" }}>
						<SignUpFormInput name="password" labelName="Enter your password" value={signinDetails.password} error={error.password} type={showPassword ? "text" : "password"} autoFocusValue />
						{error.password && <ErrorMessage errorMessage={error.password} />}

						<div className="d-flex align-items-center" style={{ fontWeight: "500", marginTop: "1.5rem" }}>
							<input onChange={() => setShowPassword(!showPassword)} type="checkbox" name="showPassword" id="showPassword" style={{ height: "18.5px", width: "18.5px", marginRight: "2rem", cursor: "pointer" }} />
							<label htmlFor="showPassword" style={{ cursor: "pointer", fontSize: "1.45rem", margin: "-3px 0 0 0" }}>
								Show password
							</label>
						</div>
					</div>
					<div>
						<BtnNext btnName2="Try another way" link="/login/challenge/selection" margin="5rem" />
					</div>
				</Form>
			</SignUp>
		</>
	);
};

export default ConfirmLoginPassword;
