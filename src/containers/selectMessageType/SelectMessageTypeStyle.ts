import styled from "styled-components";

const SelectMessageTypeWrapper = styled.div`
	position: absolute;
	top: 103px;
	left: 270px;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 0 4px rgb(180, 182, 187);
	z-index: 200;
`;

const SelectMessageList = styled.ul`
	padding: 0.5rem 0;
	margin: 0;
`;

const SelectMessageListItems = styled.li`
	padding: 0.5rem 6rem 0.5rem 4rem;
	cursor: pointer;

	&:hover {
		background-color: rgba(180, 182, 187, 0.3);
	}
`;

export { SelectMessageTypeWrapper, SelectMessageListItems, SelectMessageList };
