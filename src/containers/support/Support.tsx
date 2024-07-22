import { Link } from "react-router-dom";
import { FeedbackContainer, SupportContainer, SupportItems, SupportList } from "./SupportStyles";

const Support = () => {
	return (
		<>
			<SupportContainer>
				<SupportList>
					<SupportItems>Help</SupportItems>
					<SupportItems>
						<Link to="https://support.google.com/a/users/answer/9259748?visit_id=638481479559174374-204877838&p=gmail_training&rd=1" target="_blank" className="px-0">
							Training
						</Link>
					</SupportItems>
					<SupportItems>Updates</SupportItems>
				</SupportList>

				<FeedbackContainer>
					<button>Send feedback to Google</button>
				</FeedbackContainer>
			</SupportContainer>
		</>
	);
};

export default Support;
