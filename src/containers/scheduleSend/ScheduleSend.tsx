import { useCompose } from "../../hooks";
import { ScheduleSendWrapper } from "./ScheduleSendStyle";
import { MdOutlineScheduleSend } from "react-icons/md";

const ScheduleSend = () => {
	const { useComposeMessage } = useCompose();

	const text = useComposeMessage.recipientEmailAddress.split("@");
	const text2 = text[text.length - 1].split(".");

	const checkEmailSubject = () => {
		if (useComposeMessage.recipientEmailAddress) {
			if (!useComposeMessage.recipientEmailAddress.includes("@") || !text2[0] || text2[1].length < 2) {
				useComposeMessage.setScheduleCheckEmailPopUpOn();
			} else {
				useComposeMessage.setScheduleSendPopUpOn();
			}
		} else {
			useComposeMessage.setScheduleSendPopUpOn();
		}
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
