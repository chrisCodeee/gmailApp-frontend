import styled from "styled-components";

const ConfidentialModeExpireWrapper = styled.div`
	position: absolute;
	border-radius: 5px;
	top: 140px;
	left: 25px;
	z-index: 1000;
	background-color: #fff;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
`;

const ConfidentialModeExpireList = styled.ul`
	padding: 0.5rem 0 0 0;
`;

const ConfidentialModeExpireItems = styled.li`
	padding: 0.5rem 3.5rem 0.5rem 5rem;
	cursor: pointer;

	&:hover {
		background-color: rgba(180, 182, 187, 0.3);
	}
`;

export { ConfidentialModeExpireItems, ConfidentialModeExpireList, ConfidentialModeExpireWrapper };
