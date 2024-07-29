interface Props {
	height?: string;
	borderRadius?: string;
	fontSize?: string;
	padding?: string;
	img: string;
}
const User = ({ height = "28px", borderRadius = "100%", img }: Props) => {
	return (
		<>
			<img src={img} alt="Profile picture" style={{ height: height, borderRadius: borderRadius }} title="Google Account" />
			{/* <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: bgColor, color: "#fff", borderRadius: borderRadius, width: height, height: height, fontSize: fontSize, padding: padding, fontWeight: "500" }}>
				{firstName[0].toUpperCase()}
				{lastName[0].toUpperCase()}
			</div> */}
		</>
	);
};

export default User;
