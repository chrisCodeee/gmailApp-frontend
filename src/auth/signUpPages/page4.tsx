import { useNavigate } from "react-router-dom";
import { useAuthState } from "../../state-management";
import { BtnNext, Form, SignUpFormInput } from "../components";
import SignUp from "../SignUp";
import { FormEvent, useState } from "react";
import { validatePassword } from "./useValidateUser";
import ErrorMessage from "./ErrorMessage";

const page4 = () => {
	const { user, error, setError } = useAuthState();
	const navigate = useNavigate();

	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const { error } = validatePassword(user.password.trim());
		if (error) {
			return setError("password", error.details[0].message);
		}
		if (!user.confirmPassword) {
			return setError("confirmPassword", "Confirm your password");
		}
		if (user.confirmPassword.trim() !== user.password.trim()) {
			return setError("confirmPassword", "Those passwords didn't match. Try again.");
		}

		navigate("/register/step_5");
	};

	return (
		<>
			<SignUp>
				<Form heading="Create a strong password" subHeading="Create a strong password with a mix of letters, numbers and symbols" handleSubmit={handleSubmit}>
					<SignUpFormInput name="password" labelName="Password" value={user.password} type={showPassword ? "text" : "password"} error={error.password} autoFocusValue />
					<SignUpFormInput name="confirmPassword" labelName="Confirm" value={user.confirmPassword} margin="2.2rem" type={showPassword ? "text" : "password"} error={error.confirmPassword} />

					{error.password && <ErrorMessage errorMessage={error.password} />}
					{error.confirmPassword && <ErrorMessage errorMessage={error.confirmPassword} />}

					<div className="d-flex align-items-center" style={{ fontWeight: "500", marginTop: "1.5rem" }}>
						<input onChange={() => setShowPassword(!showPassword)} type="checkbox" name="showPassword" id="showPassword" style={{ height: "18.5px", width: "18.5px", marginRight: "2rem", cursor: "pointer" }} />
						<label htmlFor="showPassword" style={{ cursor: "pointer", fontSize: "1.45rem", margin: "-3px 0 0 0" }}>
							Show password
						</label>
					</div>

					<div style={{ marginTop: "10rem" }}>
						<BtnNext />
					</div>
				</Form>
			</SignUp>
		</>
	);
};

export default page4;
