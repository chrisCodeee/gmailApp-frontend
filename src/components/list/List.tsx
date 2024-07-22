import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { AsideCount, AsideIcon, AsideIconWrapper, AsideList, AsideListText, flex } from "./ListStyles";

interface List {
	icon?: ReactNode;
	name?: string;
	count?: string | ReactNode; //Change Later to number
	link?: any; //Change to string
	text_bold?: string;
	paddingRight?: string;
	paddingLeft?: string;
	bgColor?: string;
}

const List = ({ icon, name, count, link, text_bold, paddingRight, paddingLeft, bgColor }: List) => {
	return (
		<>
			<AsideList style={{ paddingRight: paddingRight }}>
				<NavLink to={link} className={flex} style={{ backgroundColor: bgColor }}>
					<AsideIconWrapper style={{ paddingLeft: paddingLeft }}>
						<AsideIcon>{icon}</AsideIcon>
						<AsideListText style={{ fontWeight: text_bold }}>{name}</AsideListText>
					</AsideIconWrapper>
					<AsideCount>{count}</AsideCount>
				</NavLink>
			</AsideList>
		</>
	);
};

export default List;
