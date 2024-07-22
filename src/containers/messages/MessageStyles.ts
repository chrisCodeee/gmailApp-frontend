import styled from "styled-components";

const MessageWrapper = styled.div`
	position: relative;
	height: 80vh;
	overflow-y: auto;
	padding: 0 0.7rem 0 0.2rem;

	@media screen and (max-width: 992px) {
		height: 90vh;
	}

	&::-webkit-scrollbar {
		width: 12px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #888;
	}

	&::-webkit-scrollbar-track-piece {
		background-color: #cccccc54;
	}
`;

const UpperMessageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.3rem 0 0.4rem 1.8rem;
`;

const FlexWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 0 1rem 0 0;
`;
const FlexWrapperArrow = styled.div`
	display: flex;
	align-items: center;
	align-self: stretch;
	position: relative;
	cursor: pointer;

	&::after {
		content: "";
		display: block;
		height: 100%;
		width: 100%;
		border-radius: 3px;
		position: absolute;
		top: 0;
		left: 0;
		transition: all 0.15s;
		transform: scale(0);
		opacity: 0;
		border-radius: 3px;
	}

	&:hover::after {
		background-color: rgba(180, 182, 187, 0.3);
		transform: scale(1);
		opacity: 1;
		transform-origin: center;
	}
`;

const FlexWrapperCheckbox = styled.div`
	display: flex;
	align-items: center;
	align-self: stretch;
	padding: 1rem 0.5rem;
	cursor: pointer;
	position: relative;

	&::after {
		content: "";
		display: block;
		height: 100%;
		width: 100%;
		border-radius: 3px;
		position: absolute;
		top: 0;
		left: 0;
		transition: all 0.15s;
		transform: scale(0);
		opacity: 0;
		border-radius: 3px;
	}

	&:hover::after {
		background-color: rgba(180, 182, 187, 0.3);
		transform: scale(1);
		opacity: 1;
		transform-origin: center;
	}

	& input {
		z-index: 2;
		cursor: pointer;
	}
`;

const MessageCount = styled.div`
	padding: 0.8rem 0.5rem;
	font-size: 1.3rem;
	cursor: pointer;
	position: relative;

	&::after {
		content: "";
		display: block;
		height: 100%;
		width: 100%;
		border-radius: 3px;
		position: absolute;
		top: 0;
		left: 0;
		transition: all 0.15s;
		transform: scale(0);
		opacity: 0;
	}

	&:hover::after {
		background-color: rgba(180, 182, 187, 0.3);
		transform: scale(1);
		opacity: 1;
		transform-origin: center;
	}
`;
export { MessageWrapper, UpperMessageWrapper, FlexWrapper, FlexWrapperCheckbox, FlexWrapperArrow, MessageCount };
