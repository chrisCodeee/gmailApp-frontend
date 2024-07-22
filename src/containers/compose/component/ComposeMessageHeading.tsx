import { IoClose } from "react-icons/io5";
import { MdMinimize } from "react-icons/md";
import { LuMinimize2 } from "react-icons/lu";
import { ResizeIconWrapper, ResizeIcon } from "../ComposeStyles";
import { useAsideState } from "../../../state-management";
import { RxSize } from "react-icons/rx";
import { useCompose } from "../../../hooks";

export const resizeIconSize = 17;

const ComposeMessageHeading = () => {
	const { setComposeMessageStateOff } = useAsideState();

	const { useComposeMessage } = useCompose();

	return (
		<>
			<div
				onClick={() => {
					useComposeMessage.setComposeMessageMinimizeStateOn();
					setComposeMessageStateOff();
				}}
				className="flex-grow-1">
				{useComposeMessage.composeHeading ? useComposeMessage.composeHeading : "New Message"}
			</div>
			<ResizeIconWrapper>
				<ResizeIcon
					title="Minimize"
					onClick={() => {
						useComposeMessage.setComposeMessageMinimizeStateOn();
						setComposeMessageStateOff();
					}}>
					<MdMinimize size={resizeIconSize} />
				</ResizeIcon>

				<ResizeIcon className="mx-1" onClick={useComposeMessage.setMaximizeStateOn}>
					{useComposeMessage.maximizeState ? <LuMinimize2 size={resizeIconSize} title="Exit full screen (Shift for pop-out)" /> : <RxSize size={resizeIconSize} title="Full screen (Shift for pop-out)" />}
				</ResizeIcon>

				<ResizeIcon
					title="Save & close"
					onClick={() => {
						setComposeMessageStateOff();
						useComposeMessage.setFormattingOptioneStateOff();
						useComposeMessage.setAlignSelectState(null, "left");
						useComposeMessage.setConfidentialModeTimeShowOff();
					}}>
					<IoClose size={resizeIconSize} />
				</ResizeIcon>
			</ResizeIconWrapper>
		</>
	);
};

export default ComposeMessageHeading;
