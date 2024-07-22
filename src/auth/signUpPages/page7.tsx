import { useNavigate } from "react-router-dom";
import { useAuthState } from "../../state-management";
import { Form, SignUpFormInput } from "../components";
import SignUp from "../SignUp";
import { RecoveryEmailBtnWrapper } from "../AuthStyles";
import { validateRecoveryEmail } from "./useValidateUser";
import ErrorMessage from "./ErrorMessage";

const page7 = () => {
	const { user, error, setError } = useAuthState();
	const navigate = useNavigate();

	const next = () => {
		const { error } = validateRecoveryEmail(user.recoveryEmailAddress);

		if (error) {
			return setError("recoveryEmailAddress", error.details[0].message);
		}
		user.username = user.username + "@gmail.com";
		navigate("/register/step_8");
	};

	const skip = () => {
		user.username = user.username + "@gmail.com";
		navigate("/register/step_8");
	};

	return (
		<>
			<SignUp>
				<Form heading="Add recovery email" subHeading="The address where Google can contact you if there’s unusual activity in your account or if you get locked out." handleSubmit={skip}>
					<SignUpFormInput name="recoveryEmailAddress" labelName="Recovery email address" value={user.recoveryEmailAddress} error={error.recoveryEmailAddress} autoFocusValue />

					{error.recoveryEmailAddress && <ErrorMessage errorMessage={error.recoveryEmailAddress} />}
				</Form>
				<RecoveryEmailBtnWrapper>
					<button className="col me-4" onClick={next}>
						Next
					</button>
					<button className="col" onClick={skip}>
						Skip
					</button>
				</RecoveryEmailBtnWrapper>
			</SignUp>
		</>
	);
};

export default page7;
