interface PromotionBadge {
	count: string; // Change to number
	bgColor: string;
}
const Badge = ({ count, bgColor }: PromotionBadge) => {
	return (
		<>
			<div className="d-flex flex-nowrap align-items-center" style={{ backgroundColor: bgColor, color: "#fff", borderRadius: "10px", padding: "0 .45rem", fontSize: "1.2rem", fontWeight: "500" }}>
				{count} new
			</div>
		</>
	);
};

export default Badge;
