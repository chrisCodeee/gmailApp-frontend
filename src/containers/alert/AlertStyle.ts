import styled from "styled-components";

const AlertWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	min-height: 100vh;
	z-index: 2000000000;
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(1px);
`;

const AlertContainer = styled.div`
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	border-radius: 5px;
	padding: 2rem;
	margin: 30px auto 0 auto;
	width: 400px;
	background-color: #fff;
	cursor: default;
`;

const AlertFlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`;

const AlertBtnWrapper = styled.div`
	display: flex;
	justify-content: end;
	margin: 3rem 0 0 0;
`;

export { AlertWrapper, AlertContainer, AlertFlexContainer, AlertBtnWrapper };
