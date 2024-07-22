interface Props {
	text: string;
}
const Heading = ({ text }: Props) => {
	return (
		<div className="" style={{ fontSize: "1.2rem", fontWeight: "500", paddingLeft: "1.2rem" }}>
			{text}
		</div>
	);
};

export default Heading;
