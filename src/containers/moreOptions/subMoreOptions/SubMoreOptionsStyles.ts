import styled from "styled-components";

const MoreLabelOptionWrapper = styled.div<{ $maximizeState: string }>`
	background-color: #fff;
	border-radius: 5px;
	position: absolute;
	bottom: ${(props) => (props.$maximizeState === "true" ? "230px" : "190px")};
	right: ${(props) => (props.$maximizeState === "true" ? "530px" : "464px")};
	width: 250px;
	z-index: 500000000;
	box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
`;

const MoreLabelContainer = styled.div`
	padding: 1rem;

	& label {
		margin: 0 0 1rem 0;
	}

	& .inputContainer {
		display: flex;
		position: relative;

		& input {
			flex-grow: 1;
			width: 100%;
			border-bottom: 1.5px solid rgba(0, 0, 0, 0.1);

			&:focus {
				border-bottom: 2.2px solid rgba(17, 85, 204, 0.7);
			}
		}

		& .iconContainer {
			position: absolute;
			right: 9px;
		}
	}
`;

const MoreOptionCategoryContainer = styled.div`
	padding: 1rem 0;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const CheckBoxWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 0 0 0 2.5rem;
	cursor: pointer;

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	& input {
		height: 15px;
		width: 15px;
		cursor: pointer;

		&:checked {
			accent-color: rgba(0, 0, 0, 0.01);
		}
	}

	& label {
		margin: 0 0 0 1rem;
		flex-grow: 1;
		cursor: pointer;
		padding: 0.5rem 0;
	}
`;

const AddStarWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem 0 0.5rem 2rem;
	cursor: pointer;

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	& div {
		margin: 0 0 0 1rem;
	}
`;

const AddStarContainer = styled.div`
	padding: 0.5rem 0;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const CreateAndManageLabelWrapper = styled.div`
	padding: 0.5rem 0 0.7rem 0;

	& div {
		padding: 0.5rem 0 0.5rem 4rem;
		cursor: pointer;

		&:hover {
			background-color: rgba(0, 0, 0, 0.1);
		}
	}
`;

export { MoreLabelOptionWrapper, MoreLabelContainer, MoreOptionCategoryContainer, CheckBoxWrapper, AddStarContainer, AddStarWrapper, CreateAndManageLabelWrapper };
