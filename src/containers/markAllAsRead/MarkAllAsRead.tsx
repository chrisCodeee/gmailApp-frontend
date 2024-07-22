import { LuMailOpen } from "react-icons/lu";
import { AllReadContainer, MarkAllAsReadWrapper, Note } from "./MarkAllAsReadStyle";

const MarkAllAsRead = () => {
	return (
		<>
			<MarkAllAsReadWrapper>
				<AllReadContainer>
					<LuMailOpen size={17} />
					<span className="ms-3">Mark all as read</span>
				</AllReadContainer>

				<Note>
					<span>Select messages to see more actions</span>
				</Note>
			</MarkAllAsReadWrapper>
		</>
	);
};

export default MarkAllAsRead;
