import { MdFormatIndentDecrease } from "react-icons/md";
import Formatting from "./Formatting";
import { useCompose } from "../../../hooks";

const IndexDecrease = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<div onClick={useComposeMessage.setIndexTextDecrease}>
				<Formatting title="Indent less (Ctrl-[)" icon={<MdFormatIndentDecrease size={20} />} />
			</div>
		</>
	);
};

export default IndexDecrease;
