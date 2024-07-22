import { BtnBlueWrapper } from "./BtnStyle";

interface Props {
	btnName?: string;
}
const BtnBlue = (items: Props) => {
	return (
		<>
			<BtnBlueWrapper>{items.btnName}</BtnBlueWrapper>
		</>
	);
};

export default BtnBlue;
