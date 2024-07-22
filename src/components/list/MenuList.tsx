import { HiPlus } from "react-icons/hi2";
import { Icon } from "..";
import { useAsideState } from "../../state-management";
import MenuListItems from "./MenuListItems";
import { ListItemsWrapper, AsideIcon, AsideCategoryDropdown } from "./ListStyles";
import useListParams from "./useListParams";

const menuList = () => {
	const { moreState, categoryState, setCategoryStateOn, setMoreStateOn } = useAsideState();
	const { list_1, list_2, list_4, more, category, iconSize } = useListParams();
	return (
		<>
			<ListItemsWrapper>
				{list_1.map((items) => (
					<MenuListItems icon={items.icon} link={items.link} key={items.name} />
				))}

				<div onClick={setMoreStateOn} className="d-flex justify-content-center" style={{ cursor: "pointer" }}>
					<AsideIcon>{more.icon}</AsideIcon>
				</div>

				{moreState && (
					<>
						{list_2.map((items) => (
							<MenuListItems icon={items.icon} link={items.link} key={items.name} />
						))}

						<div className="d-flex justify-content-center mt-3" style={{ cursor: "pointer" }} onClick={setCategoryStateOn}>
							<AsideIcon>{category.icon}</AsideIcon>
						</div>

						{categoryState && (
							<>
								{list_4.map((items) => (
									<AsideCategoryDropdown onMouseEnter={items.onMouseHover} onMouseLeave={items.onMouseLeave}>
										<MenuListItems icon={items.icon} link={items.link} key={items.name} />
									</AsideCategoryDropdown>
								))}
							</>
						)}
					</>
				)}
			</ListItemsWrapper>

			<div className="mt-5">
				<Icon>
					<HiPlus size={iconSize} />
				</Icon>
			</div>
		</>
	);
};

export default menuList;
