import styled from "styled-components";

const IconContainer = styled.div`
	padding: 2rem;
	cursor: pointer;
	height: 30px;
	width: 30px;
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	& span {
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
	}

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
		border-radius: 100%;
	}

	&:hover::after {
		background-color: rgba(180, 182, 187, 0.1);
		transform: scale(1);
		opacity: 1;
		transform-origin: center;
	}
`;

export { IconContainer };
