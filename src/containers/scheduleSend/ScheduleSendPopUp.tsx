import { useCompose } from "../../hooks";
import * as ScheduleSendStyle from "./ScheduleSendStyle";
import { ScheduleCheckPopUp, ScheduleSendErrorPopUp, ScheduleSendNoErrorPopUp } from "./component";

const ScheduleSendPopUp = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<ScheduleSendStyle.ScheduleSendPopUpWrapper>
				<ScheduleSendStyle.ScheduleSendPopUpContainer>
					{useComposeMessage.recipientEmailAddress === "" ? (
						<ScheduleSendErrorPopUp />
					) : (
						<>
							<ScheduleSendNoErrorPopUp />
						</>
					)}
				</ScheduleSendStyle.ScheduleSendPopUpContainer>
			</ScheduleSendStyle.ScheduleSendPopUpWrapper>

			{useComposeMessage.scheduleSendCheckPopUpState && <ScheduleCheckPopUp />}
		</>
	);
};

export default ScheduleSendPopUp;
