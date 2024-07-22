import { BtnPrimary } from "../../../components";
import { useCompose } from "../../../hooks";
import * as ScheduleSendStyle from "../ScheduleSendStyle";

const ScheduleCheckEmailPopUp = () => {
	const { useComposeMessage } = useCompose();
	return (
		<ScheduleSendStyle.ScheduleSendPopUpWrapper>
			<ScheduleSendStyle.ScheduleCheckEmailContainer>
				<ScheduleSendStyle.ScheduleSendErrorHeading>Error</ScheduleSendStyle.ScheduleSendErrorHeading>
				<ScheduleSendStyle.ScheduleSendErrorMessage>{`The address "${useComposeMessage.recipientEmailAddress}" in the "To" field was not recognized. Please make sure that all addresses are properly formed.`}</ScheduleSendStyle.ScheduleSendErrorMessage>
				<ScheduleSendStyle.ScheduleSendErrorBtnContainer onClick={useComposeMessage.setScheduleCheckEmailPopUpOff}>
					<BtnPrimary name="OK" borderRadius="20px" padding=".7rem 25px" />
				</ScheduleSendStyle.ScheduleSendErrorBtnContainer>
			</ScheduleSendStyle.ScheduleCheckEmailContainer>
		</ScheduleSendStyle.ScheduleSendPopUpWrapper>
	);
};

export default ScheduleCheckEmailPopUp;
