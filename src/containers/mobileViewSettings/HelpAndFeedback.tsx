import { Link } from "react-router-dom";
import { HelpAndFeedbackWrapper } from "./MobileViewSettingStyle";
import { useNavBarState } from "../../state-management";

const HelpAndFeedback = () => {
	const { setHelpAndFeedback } = useNavBarState();
	return (
		<HelpAndFeedbackWrapper>
			<div className="container animate__animated animate__slideInUp">
				<div className="btn_wrapper" onClick={() => setHelpAndFeedback(false)}>
					<Link to="https://support.google.com/mail/" target="_blank">
						Help
					</Link>
					<button style={{ margin: "2rem 0 4rem 0" }}>Send Feedback</button>
					<button>Cancel</button>
				</div>
			</div>
		</HelpAndFeedbackWrapper>
	);
};

export default HelpAndFeedback;
