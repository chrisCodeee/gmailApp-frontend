interface BtnTertiaryProps {
	name: string;
	padding?: string;
	width?: string;
	borderColor?: string;
}
const BtnTertiary = ({ name, padding = ".7rem 3rem", width = "fit-content", borderColor = "rgba(128, 128, 128, 0.2)" }: BtnTertiaryProps) => {
	return (
		<>
			<button className="" style={{ color: "rgb(26, 115, 232)", fontWeight: "500", border: `1px solid ${borderColor}`, padding: padding, borderRadius: "100px", width: width }}>
				{name}
			</button>
		</>
	);
};

export default BtnTertiary;
