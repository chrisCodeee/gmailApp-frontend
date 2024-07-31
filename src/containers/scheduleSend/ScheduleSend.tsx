import { useCompose } from "../../hooks";
import { ScheduleSendWrapper } from "./ScheduleSendStyle";
import { MdOutlineScheduleSend } from "react-icons/md";
import { validateSendEmail } from "./component/useScheduleSend";

const ScheduleSend = () => {
	const { useComposeMessage } = useCompose();

	const checkEmailSubject = () => {
		const { error } = validateSendEmail(useComposeMessage.recipientEmailAddress);

		if (useComposeMessage.recipientEmailAddress === "") {
			return useComposeMessage.setScheduleSendPopUpOn();
		}
		if (error) {
			return useComposeMessage.setScheduleCheckEmailPopUpOn();
		}

		useComposeMessage.setScheduleSendPopUpOn();
	};
	return (
		<>
			<ScheduleSendWrapper
				maximizeState={useComposeMessage.maximizeState.toString()}
				onClick={() => {
					checkEmailSubject();
					useComposeMessage.setScheduleSendOff();
				}}>
				<div>
					<MdOutlineScheduleSend size={25} color="rgba(11, 87, 208, .7)" />
					<span>Schedule send</span>
				</div>
			</ScheduleSendWrapper>
		</>
	);
};

export default ScheduleSend;
