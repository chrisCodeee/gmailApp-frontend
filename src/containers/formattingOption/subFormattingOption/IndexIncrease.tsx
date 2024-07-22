import { MdFormatIndentIncrease } from "react-icons/md";
import Formatting from "./Formatting";
import { useCompose } from "../../../hooks";

const IndexIncrease = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<div onClick={useComposeMessage.setIndexTextIncrease}>
				<Formatting title="Indent more (Ctrl-])" icon={<MdFormatIndentIncrease size={20} />} />
			</div>
		</>
	);
};

export default IndexIncrease;
