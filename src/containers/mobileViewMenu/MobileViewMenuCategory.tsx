import { ReactNode } from "react";
import { useInboxState } from "../../state-management";

type CategoryProps = {
	name: string;
	icon?: ReactNode;
	badge?: string;
	badgeColor?: string;
};

interface Props {
	items: CategoryProps;
	fontweight?: boolean;
}
const MobileViewMenuCategory = ({ items, fontweight }: Props) => {
	const { setMobileMenu } = useInboxState();

	return (
		<>
			<li className="d-flex justify-content-between align-items-center" onClick={() => setMobileMenu(false)} style={{ padding: ".7rem 3rem 1rem 3rem", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
				<div>
					{items.icon && <span>{items.icon}</span>}
					<span style={{ margin: items.icon ? "0 0 0 .7rem" : "", fontWeight: fontweight ? "500" : "", fontSize: "1.69rem" }}>{items.name}</span>
				</div>
				{items.badge && (
					<div className="d-flex align-items-center" style={{ fontWeight: "500", backgroundColor: items.badgeColor, borderRadius: "3px", padding: "0 .4rem .2rem .4rem", color: "#fff", fontSize: "1.33rem" }}>
						<span>{items.badge}</span>
					</div>
				)}
			</li>
		</>
	);
};

export default MobileViewMenuCategory;
