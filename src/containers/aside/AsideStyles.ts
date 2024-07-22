import styled from "styled-components";

const BtnComposeWrapper = styled.div`
	padding: 0 0 0 1.5rem;
	margin: 0 0 1.4rem 0;
`;

const ListWrapper = styled.div`
	overflow-y: auto;
	height: 78vh;
	padding: 0 1.5rem 0 0;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #888;
		border-radius: 10px;
	}
`;

export { BtnComposeWrapper, ListWrapper };
