import { Formatting } from "../formattingOption/subFormattingOption";
import { MdOutlineFormatAlignCenter, MdOutlineFormatAlignLeft, MdOutlineFormatAlignRight } from "react-icons/md";
import { formatIconSize } from "../compose/component/ComposeFormatIcon";
import { MoreAlignFormattingWrapper } from "../formattingOption/FormattingOptionStyle";
import { useComposeMessageState } from "../../state-management";

const AlignSelect = () => {
	const { maximizeState, setAlignFormattingOptioneStateOff, setAlignSelectState } = useComposeMessageState();

	const icons = [
		{ title: "Align left (Ctrl-Shift-L)", icon: <MdOutlineFormatAlignLeft size={formatIconSize} />, alignValue: "left" },
		{ title: "Align center(Ctrl-Shift-E)", icon: <MdOutlineFormatAlignCenter size={formatIconSize} />, alignValue: "center" },
		{ title: "Align right (Ctrl-Shift-R)", icon: <MdOutlineFormatAlignRight size={formatIconSize} />, alignValue: "right" },
	];

	return (
		<MoreAlignFormattingWrapper $maximizestate={maximizeState.toString()} onClick={setAlignFormattingOptioneStateOff}>
			{icons.map((items) => (
				<div key={items.title} onClick={() => setAlignSelectState(items.icon, items.alignValue)}>
					<Formatting title={items.title} icon={items.icon} margin="0 0 0 0" />
				</div>
			))}
		</MoreAlignFormattingWrapper>
	);
};

export default AlignSelect;
