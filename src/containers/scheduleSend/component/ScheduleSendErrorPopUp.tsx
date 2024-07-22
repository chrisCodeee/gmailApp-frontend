import { BtnPrimary } from "../../../components";
import { useCompose } from "../../../hooks";
import * as ScheduleSendStyle from "../ScheduleSendStyle";

const ScheduleSendErrorPopUp = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<ScheduleSendStyle.ScheduleSendErrorConatiner>
				<ScheduleSendStyle.ScheduleSendErrorHeading>Error</ScheduleSendStyle.ScheduleSendErrorHeading>
				<ScheduleSendStyle.ScheduleSendErrorMessage>Please specify at least one recipient.</ScheduleSendStyle.ScheduleSendErrorMessage>
				<ScheduleSendStyle.ScheduleSendErrorBtnContainer onClick={useComposeMessage.setScheduleSendPopUpOff}>
					<BtnPrimary name="OK" borderRadius="20px" padding=".7rem 25px" />
				</ScheduleSendStyle.ScheduleSendErrorBtnContainer>
			</ScheduleSendStyle.ScheduleSendErrorConatiner>
		</>
	);
};

export default ScheduleSendErrorPopUp;
