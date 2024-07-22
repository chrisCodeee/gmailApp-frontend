import styled from "styled-components";

const ColorSelectWrapper = styled.div<{ maximizeState: boolean }>`
	display: flex;
	position: absolute;
	padding: 1.2rem;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px, rgba(0, 0, 0, 0.2) 0px 5px 5px -3px;

	width: 32.3rem;
	bottom: ${(props) => (props.maximizeState ? "140px" : "100px")};
	left: ${(props) => (props.maximizeState ? "210px" : "60px")};

	z-index: 2;
`;

const ColorWrapper = styled.button<{ bgColor: string; margin: string }>`
	height: 16px;
	width: 16px;
	background-color: ${(props) => props.bgColor};
	margin: ${(props) => props.margin};
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		outline: 1px solid #000;
	}
`;
const ColorSelectFlexWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export { ColorSelectWrapper, ColorWrapper, ColorSelectFlexWrapper };
