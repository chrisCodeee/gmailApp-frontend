import { useNavigate } from "react-router-dom";
import { useAuthState } from "../../state-management";
import { BtnNext, Form, SignUpFormInput } from "../components";
import SignUp from "../SignUp";
import { FormEvent, useEffect, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { USAFlag } from "../../assets";
import { Alert } from "../../containers";
import { useCompose } from "../../hooks";
import { validatePhoneNumber } from "./useValidateUser";
import ErrorMessage from "./ErrorMessage";

const page5 = () => {
	const { user, error, setError } = useAuthState();
	const navigate = useNavigate();

	const [isCountry, setIsCountry] = useState(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const { error } = validatePhoneNumber(user.phoneNumber);

		if (error) {
			return setError("phoneNumber", error.details[0].message);
		}

		if (user.phoneNumber.length < 10) {
			return setError("phoneNumber", "This phone number format isn't recognized. Please check the country and number");
		}
		navigate("/register/step_6");
	};

	const { useComposeMessage } = useCompose();

	useEffect(() => {
		setTimeout(() => useComposeMessage.setAlertOn(), 1000);
	}, []);

	useEffect(() => {
		setTimeout(() => useComposeMessage.setAlertOff(), 8000);
	}, []);

	return (
		<>
			{useComposeMessage.alertState && <Alert alertName="The phone number verification is not implemented. Thank you for checking my work" />}
			<SignUp>
				<Form heading="Confirm you’re not a robot" subHeading="" handleSubmit={handleSubmit}>
					<span>Get a verification code sent to your phone</span>
					<div style={{ margin: "2rem 0 3rem 0" }}>
						<div className="d-flex">
							<div onClick={() => setIsCountry(!isCountry)} className="d-flex align-items-center align-self-stretch" style={{ cursor: "pointer", border: isCountry ? "2px solid rgb(11, 87, 208)" : "2px solid transparent", borderRadius: "5px", padding: "0 1rem 0 1.5rem" }}>
								<img src={USAFlag} alt="USA Flag" style={{ marginRight: "1rem", height: "15px" }} />
								<div style={{ marginTop: "-0.3rem" }}>{isCountry ? <MdArrowDropUp size={24} color={isCountry ? "rgb(11, 87, 208)" : ""} /> : <MdArrowDropDown size={24} color={"rgb(11, 87, 208)"} />}</div>
							</div>
							<div className="w-100">
								<SignUpFormInput name="phoneNumber" labelName="Phone number" value={user.phoneNumber} error={error.phoneNumber} autoFocusValue />
							</div>
						</div>
						{error.phoneNumber && (
							<div className="d-flex m-0">
								<div className="col m-0">&nbsp;</div>
								<div className="col-10 ps-2 m-0">
									<ErrorMessage errorMessage={error.phoneNumber} />
								</div>
							</div>
						)}
					</div>

					<span>Google will verify this number via SMS (charges may apply).</span>

					<div>
						<BtnNext />
					</div>
				</Form>
			</SignUp>
		</>
	);
};

export default page5;
