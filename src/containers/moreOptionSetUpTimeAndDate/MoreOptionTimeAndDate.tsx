import { useCompose } from "../../hooks";
import { MoreOptionTimeAndDateWrapper } from "./MoreOptionTimeAndDateStyle";

const MoreOptionTimeAndDate = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<MoreOptionTimeAndDateWrapper
				onMouseEnter={useComposeMessage.setMoreOptionTimeAndDateOn}
				$maximizeState={useComposeMessage.maximizeState.toString()}
				onClick={() => {
					useComposeMessage.setMoreOptionTimeAndDateOff();
					useComposeMessage.setMoreOptionOff();
				}}>
				<div
					className="freeTime"
					onClick={() => {
						useComposeMessage.setScheduleAppointmentOn();
						useComposeMessage.setSelectTimeOn();
					}}>
					<span>Offer times you're free</span>
					<div className="new">
						<span>New</span>
					</div>
				</div>

				<div className="createEvent" onClick={useComposeMessage.setNotActiveOn}>
					Create an event
				</div>
			</MoreOptionTimeAndDateWrapper>
		</>
	);
};

export default MoreOptionTimeAndDate;
