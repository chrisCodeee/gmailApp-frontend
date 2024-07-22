import { BtnSecondaryContainer } from "./BtnStyle";
interface BtnProps {
	name: string;
	borderRadius?: string;
}
const BtnSecondary = ({ name, borderRadius = "3px" }: BtnProps) => {
	return (
		<>
			<BtnSecondaryContainer $borderradius={borderRadius}>{name}</BtnSecondaryContainer>
		</>
	);
};

export default BtnSecondary;
