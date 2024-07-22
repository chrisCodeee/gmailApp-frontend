import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import { Form } from "./components";
import { GmailAuthGen } from "../assets";
import { BtnPrimaryLight } from "../components";
import { TryAnotherWayAuthWrapper } from "./AuthStyles";
import { useEffect, useState } from "react";
import { useCompose } from "../hooks";
import { Alert } from "../containers";
import { useAuthState } from "../state-management";

const TryAnotherwayLoginTapPhone = () => {
	const navigate = useNavigate();
	const { getHelpState } = useAuthState();

	const passwordBtn = () => {
		navigate("/login/confirmpassword");
	};

	const { useComposeMessage } = useCompose();
	const [count, setCount] = useState(10);

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
			{useComposeMessage.alertState && <Alert alertName="The phone number tap is not implemented. Thank you for checking my work" />}
			<SignUp>
				<Form heading={!getHelpState ? "Hi ............" : "Account recovery"} subHeading={getHelpState ? "To help keep your account safe, Google wants to make sure it’s really you trying to sign in" : ""} handleSubmit={passwordBtn} loginState>
					<div className="" style={{ position: "relative" }}>
						<TryAnotherWayAuthWrapper></TryAnotherWayAuthWrapper>
						<img src={GmailAuthGen} alt="gmail-ios-authgen" style={{ height: "370.362px", position: "relative" }} />

						<div className="">
							<div className="" style={{ fontSize: "2.1rem" }}>
								Open the Gmail app on iPhone
							</div>
							<p className="mt-3">
								Google sent a notification to your iPhone. Open the Gmail app and tap <b>Yes</b> on the prompt to verify it’s you.
							</p>
						</div>
					</div>
				</Form>

				<div className="d-inline-block" style={{ margin: "5rem 0 0 0" }}>
					<BtnPrimaryLight btnName2="Resend it" disabled={count > 0} link="" />
				</div>

				<div className="d-flex justify-content-end" style={{ margin: "3rem 0 0 0" }}>
					<BtnPrimaryLight btnName2="Try another way" link="/login/challenge/selection" />
				</div>
			</SignUp>
		</>
	);
};

export default TryAnotherwayLoginTapPhone;
