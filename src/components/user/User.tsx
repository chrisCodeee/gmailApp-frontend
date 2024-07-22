interface Props {
	height?: string;
	img: string;
	borderRadius?: string;
}
const User = ({ height = "3rem", img, borderRadius = "100%" }: Props) => {
	return (
		<>
			<img src={img} alt="Profile picture" style={{ height: height, borderRadius: borderRadius }} title="Google Account" />
		</>
	);
};

export default User;
