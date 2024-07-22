import { BtnPrimary } from "../../../components";
import { useCompose } from "../../../hooks";
import * as AlertStyle from "../../alert/AlertStyle";
import { ScheduleCheckPopUpBtnCancel } from "../ScheduleSendStyle";

const ScheduleCheckPopUp = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<AlertStyle.AlertWrapper>
				<AlertStyle.AlertContainer>
					<AlertStyle.AlertFlexContainer>
						<div>Send this message without a subject or text in the body?</div>
						<AlertStyle.AlertBtnWrapper>
							<div style={{ margin: "0 1rem 0 0" }}>
								<BtnPrimary name="OK" borderRadius="30px" padding=".7rem 3rem" />
							</div>
							<ScheduleCheckPopUpBtnCancel
								onClick={() => {
									useComposeMessage.setScheduleSendCheckPopUpOff();
									useComposeMessage.setScheduleSendPopUpOff();
								}}>
								<button>Cancel</button>
							</ScheduleCheckPopUpBtnCancel>
						</AlertStyle.AlertBtnWrapper>
					</AlertStyle.AlertFlexContainer>
				</AlertStyle.AlertContainer>
			</AlertStyle.AlertWrapper>
		</>
	);
};

export default ScheduleCheckPopUp;
