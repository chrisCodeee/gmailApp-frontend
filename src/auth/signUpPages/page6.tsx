import { useNavigate } from "react-router-dom";
import { useAuthState } from "../../state-management";
import { BtnNext, Form, SignUpFormInput } from "../components";
import SignUp from "../SignUp";
import { FormEvent, useEffect, useState } from "react";
import { Alert } from "../../containers";
import { useCompose } from "../../hooks";
import ErrorMessage from "./ErrorMessage";

const page6 = () => {
	const { user, error, setError } = useAuthState();
	const navigate = useNavigate();

	const verificationCode = 123456;

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (parseInt(user.verificationCode) !== verificationCode) {
			return setError("verificationCode", "Wrong code. Try again. Please enter the code (123456) to proceed.");
		}
		navigate("/register/step_7");
	};

	const { useComposeMessage } = useCompose();
	const [count, setCount] = useState(30);

	useEffect(() => {
		if (count > 0) {
			const timer = setTimeout(() => {
				setCount(count - 1);
			}, 1000);

			// Cleanup the timer when component unmounts or count changes
			return () => clearTimeout(timer);
		}
	}, [count]);

	useEffect(() => {
		setTimeout(() => useComposeMessage.setAlertOn(), 1000);
	}, []);

	useEffect(() => {
		setTimeout(() => useComposeMessage.setAlertOff(), 10000);
	}, []);

	return (
		<>
			{useComposeMessage.alertState && <Alert alertName="The phone number verification is not implemented. Please Enter the code 123456 to proceed. Thank you for checking my work" />}

			<SignUp>
				<Form heading="Enter the code" subHeading="Enter 123456 to proceed" handleSubmit={handleSubmit}>
					<span>Enter the 6-digit verification code (123456) to confirm you got the text message</span>

					<div style={{ position: "relative" }}>
						<span style={{ position: "absolute", top: "15px", left: "10px" }}>G-</span>
						<SignUpFormInput name="verificationCode" labelName="Enter code" value={user.verificationCode} margin="2rem" autoFocusValue padding="1.5rem 1.5rem 1.5rem 6rem" error={error.verificationCode} />
					</div>

					<ErrorMessage errorMessage={error.verificationCode} />

					<div style={{ margin: "10rem 0 0 0" }}>
						<BtnNext btnName2={count > 0 ? `Get new code (${count} seconds)` : `Get new code`} disabled={count > 0} link="/register/step_5" />
					</div>
				</Form>
			</SignUp>
		</>
	);
};

export default page6;
