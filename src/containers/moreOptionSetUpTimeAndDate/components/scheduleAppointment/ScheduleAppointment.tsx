import { IoClose } from "react-icons/io5";
import { ScheduleStep1, ScheduleStep2 } from "../../../../assets/videos";
import * as ScheduleAppointmentStyle from "./ScheduleAppointmentStyle";
import { useCompose } from "../../../../hooks";

const ScheduleAppointment = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<ScheduleAppointmentStyle.ScheduleAppointmentWrapper>
				<ScheduleAppointmentStyle.ScheduleAppointmentContainer $nextStep={useComposeMessage.scheduleNextStepState.toString()}>
					<video autoPlay loop muted src={!useComposeMessage.scheduleNextStepState ? ScheduleStep1 : ScheduleStep2}></video>

					<div className="scheduleDetails">
						<div>
							<div className="scheduleHeading">{!useComposeMessage.scheduleNextStepState ? "Scheduling made easier" : "Send your suggestions"}</div>
							<div className="scheduleText">{!useComposeMessage.scheduleNextStepState ? "Reduce the back-and-forth. Select available times from your calendar without leaving Gmail." : "Times you selected are added to the message. The other person just clicks a time to accept."}</div>
						</div>

						<div className="scheduleFooter">
							<div className="scheduleSteptepIndicators">
								<div className="stepIndicator step1">&nbsp;</div>
								<div className="stepIndicator step2">&nbsp;</div>
							</div>

							<div className="buttonWrapper">
								{!useComposeMessage.scheduleNextStepState && (
									<span className="next" onClick={useComposeMessage.setScheduleNextStepOn}>
										Next
									</span>
								)}
								{useComposeMessage.scheduleNextStepState && (
									<span
										className="done"
										onClick={() => {
											useComposeMessage.setScheduleAppointmentOff();
											useComposeMessage.setScheduleNextStepOn();
											useComposeMessage.setSelectTimeOn();
										}}>
										Done
									</span>
								)}
							</div>
						</div>
					</div>

					<div className="closeButton" onClick={useComposeMessage.setScheduleAppointmentOff}>
						<IoClose size={24} color="rgba(0,0,0,.8)" />
					</div>
				</ScheduleAppointmentStyle.ScheduleAppointmentContainer>
			</ScheduleAppointmentStyle.ScheduleAppointmentWrapper>
		</>
	);
};

export default ScheduleAppointment;
