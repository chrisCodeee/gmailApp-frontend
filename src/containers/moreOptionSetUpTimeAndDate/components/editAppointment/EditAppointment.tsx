import { IoClose } from "react-icons/io5";
import { useCompose } from "../../../../hooks";
import * as EditAppointmentStyle from "./EditAppointmentStyle";

const EditAppointment = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<EditAppointmentStyle.EditAppointmentWrapper $maximizeState={useComposeMessage.maximizeState.toString()}>
				<EditAppointmentStyle.EditAppointmentContainer>
					<EditAppointmentStyle.EditAppointmentMainContainer>
						<div className="editText">
							<div className="selectTime">Select times in the calendar sidebar for a 1:1 event</div>
							<div>Your times will appear here</div>
						</div>

						<div className="howItWorks" onClick={useComposeMessage.setScheduleAppointmentOn}>
							See how it works
						</div>

						<div className="iconClose" onClick={useComposeMessage.setSelectTimeOff}>
							<IoClose color="#fff" size={15} />
						</div>
					</EditAppointmentStyle.EditAppointmentMainContainer>
				</EditAppointmentStyle.EditAppointmentContainer>
			</EditAppointmentStyle.EditAppointmentWrapper>
		</>
	);
};

export default EditAppointment;
