import styled from "styled-components";

const AsideList = styled.li`
	cursor: pointer;

	& .active {
		background-color: rgb(194, 231, 255);
		font-weight: 600;
	}

	& a {
		border-top-right-radius: 50px;
		border-bottom-right-radius: 50px;
		padding: 0 1rem 0 3rem;

		&:hover:not(.active) {
			background-color: #e9eef6;
		}
	}
`;

const MenuListWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	& .active {
		background-color: rgb(194, 231, 255);
	}

	& a {
		display: flex;
		margin-top: 5px;
		border-radius: 100%;
		height: 30px;
		width: 30px;

		align-items: center;
		justify-content: center;

		&:hover:not(.active) {
			background-color: #e9eef6;
		}
	}

	& *:focus {
		font-weight: 600;
	}
`;

const AsideIconContainer = styled.div`
	border-top-right-radius: 50px;
	border-bottom-right-radius: 50px;
	cursor: pointer;
	padding: 0 1rem 0 3rem;
`;

const AsideIconWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem 0 0.5rem 0;
`;

const AsideIcon = styled.span`
	transform: translateY(-0.2rem);
	display: inline-block;
	color: rgba(32, 33, 36, 0.8);
`;

const AsideListText = styled.span`
	margin-left: 1rem;
`;

const AsideCount = styled.span`
	font-size: 1.2rem;

	display: flex;
	align-items: center;
`;

const AsideCategoryArrowIcon = styled.span`
	position: absolute;
	left: 15px;
	top: 2.9px;
`;

const AsideCategoryDropdown = styled.div``;

const AsideLabelWrapper = styled.div`
	margin: 2rem 0 0 0;
	padding: 0 0 0 3rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const AsideLabelText = styled.h3``;

const ListItemsWrapper = styled.ul``;

const CategoryIcon = styled.div`
	border-radius: 100%;
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const flex = "d-flex justify-content-between align-items-center";

export { AsideList, AsideIconWrapper, AsideIconContainer, AsideIcon, AsideListText, AsideCount, flex, ListItemsWrapper, AsideCategoryArrowIcon, AsideCategoryDropdown, AsideLabelWrapper, AsideLabelText, CategoryIcon, MenuListWrapper };
