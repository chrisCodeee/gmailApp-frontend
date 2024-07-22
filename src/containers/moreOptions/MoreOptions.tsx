import { MdArrowRight } from "react-icons/md";
import * as MoreOptionStyle from "./MoreOptionStyle";
import { iconSize } from "../../components/list/useListParams";
import { IoMdCalendar } from "react-icons/io";
import { useCompose } from "../../hooks";
import { IoCheckmarkSharp } from "react-icons/io5";

const MoreOptions = () => {
	const { useComposeMessage } = useCompose();

	return (
		<>
			<MoreOptionStyle.MoreOptionWrapper $maximizeState={useComposeMessage.maximizeState.toString()}>
				<MoreOptionStyle.DefaultFullScreen onClick={useComposeMessage.setMoreOptionOff} onMouseEnter={useComposeMessage.setMoreOptionTimeAndDateOff}>
					<MoreOptionStyle.DefaultFullScreenWrapper $active={useComposeMessage.defaultScreenIconTickState.toString()} onClick={useComposeMessage.setDefaultScreenIconTickOn}>
						<span className="icon">{useComposeMessage.defaultScreenIconTickState && <IoCheckmarkSharp size={19} />}</span>
						<span className="text">Default to full screen</span>
					</MoreOptionStyle.DefaultFullScreenWrapper>
				</MoreOptionStyle.DefaultFullScreen>
				<MoreOptionStyle.FormatOption onMouseEnter={useComposeMessage.setMoreOptionTimeAndDateOff}>
					<div className="labelOption" onMouseEnter={useComposeMessage.setMoreLabelOptionOn} onMouseLeave={useComposeMessage.setMoreLabelOptionOff}>
						<div>Label</div>
						<div>
							<MdArrowRight size={iconSize} />
						</div>
					</div>

					<MoreOptionStyle.PlainTextMode
						$active={useComposeMessage.iconTickState.toString()}
						onClick={() => {
							useComposeMessage.setIconTickOn();
							useComposeMessage.setMoreOptionOff();
						}}>
						<span className="icon">{useComposeMessage.iconTickState && <IoCheckmarkSharp size={19} />}</span>
						<span className="text">Plain text mode</span>
					</MoreOptionStyle.PlainTextMode>
				</MoreOptionStyle.FormatOption>

				<MoreOptionStyle.FormatOption onClick={useComposeMessage.setMoreOptionOff} onMouseEnter={useComposeMessage.setMoreOptionTimeAndDateOff}>
					<div className="labelOption" onClick={useComposeMessage.setNotActiveOn}>
						<div>Print</div>
						<div>
							<MdArrowRight size={iconSize} />
						</div>
					</div>

					<div
						className="checkSpelling"
						onClick={() => {
							useComposeMessage.setRecheckOn();
							useComposeMessage.setFormattingOptioneStateOff();
						}}>
						Check spelling
					</div>
				</MoreOptionStyle.FormatOption>

				<MoreOptionStyle.SetUpTimeAndDate onClick={useComposeMessage.setMoreOptionOff} onMouseEnter={useComposeMessage.setMoreOptionTimeAndDateOn} onMouseLeave={useComposeMessage.setMoreOptionTimeAndDateOff}>
					<div className="setUpTime">
						<div>
							<IoMdCalendar size={22} />
						</div>
						<div className="timeToMeet">Set up a time to meet</div>
						<div>
							<MdArrowRight size={iconSize} />
						</div>
					</div>
				</MoreOptionStyle.SetUpTimeAndDate>
			</MoreOptionStyle.MoreOptionWrapper>
		</>
	);
};

export default MoreOptions;
