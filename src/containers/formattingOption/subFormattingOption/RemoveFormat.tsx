import { LiaRemoveFormatSolid } from "react-icons/lia";
import Formatting from "./Formatting";
import { useCompose } from "../../../hooks";

const RemoveFormat = () => {
	const { removeFormat } = useCompose();

	return (
		<>
			<div onClick={removeFormat}>
				<Formatting title="Remove formatting (Ctrl-\)" icon={<LiaRemoveFormatSolid size={20} />} />
			</div>
		</>
	);
};

export default RemoveFormat;
