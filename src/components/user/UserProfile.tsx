import { useUser } from "../../hooks";

interface Props {
	height?: string;
	borderRadius?: string;
	fontSize?: string;
	padding?: string;
}
const UserProfile = ({ height = "28px", borderRadius = "100%", fontSize = "1.5rem", padding = "1.5rem" }: Props) => {
	const { firstName, lastName, bgColor } = useUser();

	return (
		<>
			<div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: bgColor, color: "#fff", borderRadius: borderRadius, width: height, height: height, fontSize: fontSize, padding: padding, fontWeight: "500" }}>
				{firstName ? firstName[0].toUpperCase() : "N"}
				{lastName ? lastName[0].toUpperCase() : "/A"}
			</div>
		</>
	);
};

export default UserProfile;
