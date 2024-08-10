import { Link } from "react-router-dom";
import { HelpAndFeedbackWrapper } from "./MobileViewSettingStyle";
import { useNavBarState } from "../../state-management";

const HelpAndFeedback = () => {
	const { setHelpAndFeedback, setSendFeedback } = useNavBarState();

	const sendFeedbackFunc = () => {
		setTimeout(() => {
			setSendFeedback(true);
		}, 500);
	};
	return (
		<HelpAndFeedbackWrapper>
			<div className="container animate__animated animate__slideInUp">
				<div className="btn_wrapper">
					<Link to="https://support.google.com/mail/" target="_blank">
						Help
					</Link>
					<button
						style={{ margin: "2rem 0 4rem 0" }}
						onClick={() => {
							setHelpAndFeedback(false);

							sendFeedbackFunc();
						}}>
						Send Feedback
					</button>
					<button onClick={() => setHelpAndFeedback(false)}>Cancel</button>
				</div>
			</div>
		</HelpAndFeedbackWrapper>
	);
};

export default HelpAndFeedback;
