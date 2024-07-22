import { BtnPrimaryContainer } from "./BtnStyle";
interface BtnPrimaryProps {
	name: string;
	borderRadius?: string;
	title?: string;
	margin?: string;
	padding?: string;
}

const BtnPrimary = ({ name, borderRadius = "5px", margin = "ms-3", padding = "7.5px 20px", title }: BtnPrimaryProps) => {
	return (
		<>
			<BtnPrimaryContainer className={margin} style={{ borderRadius: borderRadius, padding: padding }} title={title}>
				{name}
			</BtnPrimaryContainer>
		</>
	);
};

export default BtnPrimary;
