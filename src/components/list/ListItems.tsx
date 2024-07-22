import List from "./List";
import useListParams from "./useListParams";
import { useAsideState } from "../../state-management";
import { HiPlus } from "react-icons/hi";
import { AsideCategoryArrowIcon, AsideCategoryDropdown, AsideIcon, AsideIconWrapper, AsideLabelText, AsideLabelWrapper, AsideIconContainer, AsideListText, ListItemsWrapper } from "./ListStyles";
import { Icon } from "..";
import { AiOutlineSetting } from "react-icons/ai";

const ListItems = () => {
	const { moreState, categoryState, setCategoryStateOn, setMoreStateOn, setCreateLabelStateOn } = useAsideState();
	const { list_1, list_2, list_4, more, category, iconSize, categoryArrowIcon } = useListParams();
	return (
		<>
			<ListItemsWrapper>
				{list_1.map((items) => (
					<div key={items.name} title={items.name}>
						<List icon={items.icon} name={items.name} count={items.count} link={items.link} />
					</div>
				))}

				<AsideIconContainer onClick={setMoreStateOn}>
					<AsideIconWrapper>
						<AsideIcon>{more.icon}</AsideIcon>
						<AsideListText>{more.name}</AsideListText>
					</AsideIconWrapper>
				</AsideIconContainer>

				{moreState && (
					<>
						{list_2.map((items) => (
							<div key={items.name} title={items.name}>
								<List icon={items.icon} name={items.name} count={items.count} link={items.link} />
							</div>
						))}

						<AsideIconContainer style={{ position: "relative" }} onClick={setCategoryStateOn}>
							<AsideCategoryArrowIcon>{categoryArrowIcon}</AsideCategoryArrowIcon>
							<AsideIconWrapper>
								<AsideIcon>{category.icon}</AsideIcon>
								<AsideListText>{category.name}</AsideListText>
							</AsideIconWrapper>
						</AsideIconContainer>

						{categoryState && (
							<>
								{list_4.map((items) => (
									<AsideCategoryDropdown onMouseEnter={items.onMouseHover} onMouseLeave={items.onMouseLeave} key={items.name} title={items.name}>
										<List icon={items.icon} name={items.name} count={items.count} link={items.link} text_bold="500" paddingRight="0" paddingLeft="1rem" />
									</AsideCategoryDropdown>
								))}
							</>
						)}

						<div title="Manage labels">
							<List icon={<AiOutlineSetting size={iconSize} />} name="Manage labels" link="/settings/labels" />
						</div>

						<div onClick={setCreateLabelStateOn} title="Create new label">
							<List icon={<HiPlus size={iconSize} />} name="Create new label" bgColor="transparent" />
						</div>
					</>
				)}
			</ListItemsWrapper>

			<AsideLabelWrapper>
				<AsideLabelText>Labels</AsideLabelText>
				<div onClick={setCreateLabelStateOn} title="Create new label">
					<Icon>
						<HiPlus size={iconSize} />
					</Icon>
				</div>
			</AsideLabelWrapper>
		</>
	);
};

export default ListItems;
