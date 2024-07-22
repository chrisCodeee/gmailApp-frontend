import styled from "styled-components";

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0.7rem 1.2rem 0 2rem;
`;

const ContainerLeft = styled.div`
	display: flex;
	align-items: center;

	width: 65%;
`;

const ContainerRight = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const IconWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const Search = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 0.7rem;
	border-radius: 5rem;
	transition: all 0.3s;

	margin: 0 0 0 7.8rem;
`;

const FormContainer = styled.div`
	flex-grow: 1;
`;

export { Nav, ContainerLeft, ContainerRight, IconWrapper, Search, FormContainer };
