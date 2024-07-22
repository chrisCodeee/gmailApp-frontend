import { LiaPencilAltSolid } from "react-icons/lia";
import * as MdIcon from "react-icons/md";
import { FormatIcon } from ".";
import { CgTrash } from "react-icons/cg";
import { FormatIconWrapper } from "../ComposeStyles";
import { useCompose } from "../../../hooks";
import { useAsideState } from "../../../state-management";

export const formatIconSize = 18;
const ComposeFormatIcon = () => {
	const { setComposeMessageStateOff } = useAsideState();
	const { useComposeMessage, insertCloseFormatting, closeFormattingOption, closeFormattingStylesOption } = useCompose();

	return (
		<div className="d-flex justify-content-between flex-grow-1" onClick={useComposeMessage.setScheduleSendOff}>
			<FormatIconWrapper>
				<div onClick={closeFormattingOption} className="d-flex justify-content-between">
					<div
						onClick={() => {
							useComposeMessage.setFormattingOptioneStateOn();
							useComposeMessage.setRecheckOff();
						}}>
						<FormatIcon title="Formatting options">
							<MdIcon.MdFormatColorText size={formatIconSize} />
						</FormatIcon>
					</div>
					<div onClick={useComposeMessage.setNotActiveOn}>
						<FormatIcon title="Attach files">
							<MdIcon.MdAttachFile size={formatIconSize} />
						</FormatIcon>
					</div>
					<div onClick={useComposeMessage.setInsertLinkOn}>
						<FormatIcon title="Insert link (Ctrl-K)">
							<MdIcon.MdOutlineInsertLink size={formatIconSize} />
						</FormatIcon>
					</div>
					<div onClick={useComposeMessage.setNotActiveOn}>
						<FormatIcon title="Insert emoji (Ctrl-Shift-2)">
							<MdIcon.MdOutlineInsertEmoticon size={formatIconSize} />
						</FormatIcon>
					</div>
					<div onClick={useComposeMessage.setNotActiveOn}>
						<FormatIcon title="Insert files using Drive">
							<MdIcon.MdAddToDrive size={formatIconSize} />
						</FormatIcon>
					</div>
					<div onClick={useComposeMessage.setNotActiveOn}>
						<FormatIcon title="Insert photo">
							<MdIcon.MdOutlineInsertPhoto size={formatIconSize} />
						</FormatIcon>
					</div>
					<div
						onClick={() => {
							useComposeMessage.setConfidentialModeOn();
							useComposeMessage.setConfidentialModeTimeShowOff();
						}}>
						<FormatIcon title="Toggle conidential mode">
							<MdIcon.MdOutlineLockClock size={formatIconSize} />
						</FormatIcon>
					</div>
				</div>

				<div
					onClick={() => {
						useComposeMessage.setInsertSignatureOn();
						insertCloseFormatting();
					}}>
					<FormatIcon title="Insert signature">
						<LiaPencilAltSolid size={formatIconSize} />
					</FormatIcon>
				</div>

				<div
					onClick={() => {
						useComposeMessage.setMoreOptionOn();
						useComposeMessage.setAlignFormattingOptioneStateOff();
						useComposeMessage.setColorStateOff();
						closeFormattingStylesOption();
					}}>
					<FormatIcon title="More options">
						<MdIcon.MdMoreVert size={formatIconSize} />
					</FormatIcon>
				</div>
			</FormatIconWrapper>

			<div
				onClick={() => {
					setComposeMessageStateOff();
					useComposeMessage.setFormattingOptioneStateOff();
					useComposeMessage.setAlignSelectState(null, "left");
					useComposeMessage.setConfidentialModeTimeShowOff();
					closeFormattingOption();
					useComposeMessage.setRecheckOff();
				}}>
				<FormatIcon title="Discard draft (Ctrl-Shift-D)" margin="0 0 0 auto">
					<CgTrash size={formatIconSize} />
				</FormatIcon>
			</div>
		</div>
	);
};

export default ComposeFormatIcon;
