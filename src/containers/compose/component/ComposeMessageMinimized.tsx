import { IoClose } from "react-icons/io5";
import { MdMaximize } from "react-icons/md";
import { RxSize } from "react-icons/rx";
import { ComposeMessageHeadingWrapper, ResizeIcon, ResizeIconWrapper } from "../ComposeStyles";
import { useAsideState, useComposeMessageState } from "../../../state-management";
import { resizeIconSize } from "./ComposeMessageHeading";
import { LuMinimize2 } from "react-icons/lu";
import { useCompose } from "../../../hooks";

const ComposeMessageMinimized = () => {
	const { setComposeMessageStateOn } = useAsideState();
	const { useComposeMessage } = useCompose();

	const { setComposeMessageMinimizeStateOn, setComposeMessageMinimizeStateOff, maximizeState } = useComposeMessageState();
	return (
		<ComposeMessageHeadingWrapper $confidentialModeState={useComposeMessage.confidentialModeTimeShow.toString()}>
			<div
				onClick={() => {
					setComposeMessageStateOn();
					setComposeMessageMinimizeStateOff();
				}}
				className="flex-grow-1">
				New Message
			</div>

			<ResizeIconWrapper>
				<ResizeIcon
					title="Maximize"
					onClick={() => {
						setComposeMessageMinimizeStateOn();
						setComposeMessageStateOn();
					}}>
					<MdMaximize size={resizeIconSize} />
				</ResizeIcon>

				<ResizeIcon
					className="mx-1"
					onClick={() => {
						setComposeMessageStateOn();
						setComposeMessageMinimizeStateOff();
					}}>
					{maximizeState ? <LuMinimize2 size={resizeIconSize} title="Full screen (Shift for pop-out)" /> : <RxSize size={resizeIconSize} title="Full screen (Shift for pop-out)" />}
				</ResizeIcon>

				<ResizeIcon title="Save & close" onClick={setComposeMessageMinimizeStateOff}>
					<IoClose size={resizeIconSize} />
				</ResizeIcon>
			</ResizeIconWrapper>
		</ComposeMessageHeadingWrapper>
	);
};

export default ComposeMessageMinimized;
