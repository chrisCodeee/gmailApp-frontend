import styled from "styled-components";

const MobileNavBarWrapper = styled.nav`
	width: 100vw;
	background-color: rgb(241, 241, 241);
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);

	& .compose {
		background-color: rgb(199, 59, 59);
		border-radius: 5px;
		padding: 2px 5px;
		cursor: pointer;

		&:active {
			background-color: rgb(133, 52, 52);
		}
	}
`;

export { MobileNavBarWrapper };
