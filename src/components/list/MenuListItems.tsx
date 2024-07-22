import { NavLink } from "react-router-dom";
import { MenuListWrapper } from "./ListStyles";
import { ReactNode } from "react";
interface MenuListProps {
	icon: ReactNode;
	link: string;
}
const MenuListItems = ({ icon, link }: MenuListProps) => {
	return (
		<>
			<MenuListWrapper>
				<NavLink to={link}>{icon}</NavLink>
			</MenuListWrapper>
		</>
	);
};

export default MenuListItems;
