import { IoMdCalendar } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Icon } from "../../../components";
import { useCompose } from "../../../hooks";
import * as ScheduleSendStyle from "../ScheduleSendStyle";
import { useState } from "react";
import { nextOneDayTime, nextOneDayAfternoonTime, nextThreeDaysTime, nextThreeDaysDay } from "../../confidentialModeExpire/confidentialModeParams";

const ScheduleSendNoErrorPopUp = () => {
	const { useComposeMessage } = useCompose();

	const scheduleTimeList = [
		{ when: "Tomorrow morning", time: nextOneDayTime },
		{ when: "Tomorrow afternoon", time: nextOneDayAfternoonTime },
		{ when: nextThreeDaysDay, time: nextThreeDaysTime },
	];

	const [activeIndex, setActiveIndex] = useState<number>(0);
	const activeScheduleStyle = "rgba(180, 182, 187, 0.3)";

	const checkSubjectAndMessage = () => {
		if (useComposeMessage.emailSubject === "") {
			useComposeMessage.setScheduleSendCheckPopUpOn();
		} else {
			alert("Added successfully!"); //Add to Schedule section
		}
	};

	return (
		<>
			<ScheduleSendStyle.ScheduleSendTimeWrapper>
				<ScheduleSendStyle.ScheduleSendTimeContainer>
					<div>Schedule send</div>
					<div onClick={useComposeMessage.setScheduleSendPopUpOff}>
						<Icon>
							<IoClose size={25} />
						</Icon>
					</div>
				</ScheduleSendStyle.ScheduleSendTimeContainer>
				<ScheduleSendStyle.ScheduleSendTimeZone>Eastern Daylight Time</ScheduleSendStyle.ScheduleSendTimeZone>
			</ScheduleSendStyle.ScheduleSendTimeWrapper>

			<ScheduleSendStyle.ScheduleSendTimeList>
				{scheduleTimeList.map(({ when, time }, index) => (
					<li
						key={time}
						style={{ backgroundColor: activeIndex === index ? activeScheduleStyle : "" }}
						onClick={() => {
							setActiveIndex(index);
							checkSubjectAndMessage();
						}}>
						<span>{when}</span>
						<span>{time}</span>
					</li>
				))}
			</ScheduleSendStyle.ScheduleSendTimeList>

			<ScheduleSendStyle.ScheduleSendDateAndTimeContainer>
				<IoMdCalendar size={22} />
				<div className="date" onClick={useComposeMessage.setNotActiveOn}>
					Pick date & time
				</div>
			</ScheduleSendStyle.ScheduleSendDateAndTimeContainer>
		</>
	);
};

export default ScheduleSendNoErrorPopUp;
