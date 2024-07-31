import styled from "styled-components";

const MobileNavBarWrapper = styled.nav`
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
