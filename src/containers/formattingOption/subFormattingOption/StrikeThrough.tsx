import { PiTextStrikethroughBold } from "react-icons/pi";
import Formatting from "./Formatting";
import { useCompose } from "../../../hooks";

const StrikeThrough = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<div onClick={useComposeMessage.setStrikethroughStateOn}>
				<Formatting title="Strikethrough (Alt-Shift-5)" icon={<PiTextStrikethroughBold size={20} />} />
			</div>
		</>
	);
};

export default StrikeThrough;
