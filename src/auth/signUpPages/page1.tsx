import { BtnNext, Form, SignUpFormInput } from "../components";
import { useAuthState } from "../../state-management";
import SignUp from "../SignUp";
import { FormEvent } from "react";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import { validateName } from "./useValidateUser";

const Page1 = () => {
	const { user, error, setError } = useAuthState();
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const { error } = validateName(user.firstName);

		if (error) {
			return setError("firstName", error?.details[0].message);
		}

		navigate("/register/step_2");
	};

	return (
		<>
			<SignUp>
				<Form heading="Create a Google Account" subHeading="Enter your name" handleSubmit={handleSubmit}>
					<SignUpFormInput name="firstName" labelName="First name" value={user.firstName} error={error.firstName} autoFocusValue />

					<SignUpFormInput name="lastName" labelName="Last name (optional)" margin="2rem" value={user.lastName} />

					<ErrorMessage errorMessage={error.firstName} />

					<BtnNext />
				</Form>
			</SignUp>
		</>
	);
};

export default Page1;
