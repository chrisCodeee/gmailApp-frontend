import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavBarState } from "../../state-management";
import { SendFeedbackWrapper } from "./MobileViewSettingStyle";
import { MdCheckBox, MdHelpOutline, MdOutlineAttachFile, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { useState } from "react";

const SendFeedBack = () => {
	const { setSendFeedback, setAccountAndSystemInfoState } = useNavBarState();
	const [isChecked, setIsChecked] = useState(false);

	return (
		<SendFeedbackWrapper className="animate__animated animate__fadeIn" style={{ backgroundColor: "#191919", width: "100vw" }}>
			<div className="d-flex justify-content-between align-items-center" style={{ padding: "2rem 2rem 1rem 2rem", boxShadow: "1px 2px 3px rgba(0,0,0,0.4)" }}>
				<h1 className="" style={{ fontSize: "1.8rem" }}>
					Send feedback to Google
				</h1>
				<div className="" onClick={() => setSendFeedback(false)}>
					<IoClose size={25} color="rgb(227, 227, 227)" />
				</div>
			</div>

			<div className="" style={{ padding: "2.5rem 2rem", fontSize: "1.5rem", boxShadow: "1px 2px 3px rgba(0,0,0,0.4)" }}>
				<div className="mb-3">Describe your feedback</div>

				<div className="input">
					<div className="content" contentEditable></div>
					<label>Tell us what prompted this feedback...</label>
				</div>

				<div className="d-flex align-items-center" style={{ margin: "-1.6rem 0 0 0" }}>
					<p className="" style={{ fontSize: "1.32rem" }}>
						Please don't include any sensitive information
					</p>

					<div className="d-flex" style={{ margin: "-.55rem 0 0 1rem" }}>
						<MdHelpOutline color="rgb(227, 227, 227)" />
					</div>
				</div>

				<div className="">A screenshot will help us better understand your feedback. (optional)</div>
				<div className="file-upload" style={{ border: "1px solid rgba(227, 227, 227,.3)", borderRadius: "5px", position: "relative", padding: ".5rem 0", margin: "1rem 0 7rem 0" }}>
					<input id="file" className="custom-file-input" type="file" style={{ width: "100%" }} />
					<label htmlFor="file" className="d-flex align-items-center" style={{ position: "absolute", top: "5px", left: "30%", color: "rgb(124, 172, 248)", fontSize: "1.4rem" }}>
						<div className="me-3">
							<MdOutlineAttachFile size={16} />
						</div>
						Upload screenshot
					</label>
				</div>

				<div className="d-flex align-items-center mb-3" onClick={() => setIsChecked(!isChecked)}>
					<div className="me-3">{!isChecked ? <MdOutlineCheckBoxOutlineBlank size={25} /> : <MdCheckBox size={25} color="rgb(124, 172, 248)" />}</div>
					<label htmlFor="email">We may email you for more information or updates</label>
				</div>

				<div className="footer">
					Some <span onClick={() => setAccountAndSystemInfoState(true)}>account and system information</span> may be sent to Google. We will use it to fix problems and improve our services, subject to our{" "}
					<Link to="https://policies.google.com/u/1/privacy" target="_blank">
						Privacy Policy
					</Link>{" "}
					and{" "}
					<Link to="https://policies.google.com/u/1/terms" target="_blank">
						Terms of Service
					</Link>
					. We may email you for more information or updates. Go to{" "}
					<Link to="https://support.google.com/legal/answer/3110420" target="_blank">
						Legal Help
					</Link>{" "}
					to ask for content changes for legal reasons.
				</div>
			</div>

			<div className="" style={{ textAlign: "end", padding: "2.5rem 2rem 1rem 0" }}>
				<button style={{ backgroundColor: "rgba(227, 227, 227, 0.12)", padding: ".6rem 2.5rem", borderRadius: "3px", fontSize: "1.5rem" }}>Send</button>
			</div>
		</SendFeedbackWrapper>
	);
};

export default SendFeedBack;
