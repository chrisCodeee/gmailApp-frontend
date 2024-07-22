import { useNavigate } from "react-router-dom";
import { useAuthState } from "../state-management";
import { BtnNext, Form, SignUpFormInput } from "./components";
import SignUp from "./SignUp";
import { FormEvent } from "react";
import ErrorMessage from "./signUpPages/ErrorMessage";
import { validateName } from "./signUpPages/useValidateUser";

const QueryRecoveryEmailName = () => {
	const { recoveryEmailDetails, error, setError } = useAuthState();
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const { error } = validateName(recoveryEmailDetails.firstName);

		if (error) {
			return setError("firstName", error?.details[0].message);
		}

		navigate("/login/noaccount"); //Query this from database
	};

	return (
		<>
			<SignUp>
				<Form heading="What’s your name?" subHeading="Enter the name on your Google Account" handleSubmit={handleSubmit}>
					<SignUpFormInput name="firstName" labelName="First name" value={recoveryEmailDetails.firstName} error={error.firstName} autoFocusValue />

					<SignUpFormInput name="lastName" labelName="Last name (optional)" margin="2rem" value={recoveryEmailDetails.lastName} />

					<ErrorMessage errorMessage={error.firstName} />

					<BtnNext margin="5rem" />
				</Form>
			</SignUp>
		</>
	);
};

export default QueryRecoveryEmailName;
