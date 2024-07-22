import { Outlet } from "react-router-dom";
import { MessageWrapper } from "./MessageStyles";
import UpperMessage from "./UpperMessage";
import { useInboxState } from "../../state-management";

const Messages = () => {
	const { setSelectMessageTypeStateOff, setMarkAllMessageReadStateOff, setSelectInputToolStateOff } = useInboxState();
	return (
		<>
			<UpperMessage />
			<MessageWrapper
				onClick={() => {
					setSelectMessageTypeStateOff();
					setMarkAllMessageReadStateOff();
					setSelectInputToolStateOff();
				}}>
				<Outlet />
			</MessageWrapper>
		</>
	);
};

export default Messages;
