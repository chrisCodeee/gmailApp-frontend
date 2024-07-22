import styled from "styled-components";

const SupportContainer = styled.div`
	position: absolute;
	top: 8%;
	right: 9%;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 0 4px rgb(180, 182, 187);
	z-index: 200;
`;

const FeedbackContainer = styled.div`
	border-top: 1px solid rgba(180, 182, 187, 0.3);
	padding: 0.6rem 0 0.6rem 0;

	& button {
		padding: 0.5rem 3rem;

		&:hover {
			background-color: rgba(180, 182, 187, 0.3);
		}
	}
`;

const SupportList = styled.ul`
	padding: 0.5rem 0 0 0;
`;

const SupportItems = styled.li`
	padding: 0.5rem 3rem 0.5rem 3rem;
	cursor: pointer;

	&:hover {
		background-color: rgba(180, 182, 187, 0.3);
	}
`;

export { SupportContainer, SupportList, SupportItems, FeedbackContainer };
