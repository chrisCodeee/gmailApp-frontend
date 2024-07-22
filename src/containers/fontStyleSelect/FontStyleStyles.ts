import styled from "styled-components";
const FormatWrapper = styled.div`
	position: absolute;
	padding: 0.5rem 0;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
	z-index: 2;
`;

const FontStyleWrapper = styled(FormatWrapper)<{ maximizeState: boolean }>`
	bottom: ${(props) => (props.maximizeState ? "140px" : "100px")};
	left: ${(props) => (props.maximizeState ? "240px" : "90px")};
	width: 200px;
`;

const FontStyleSelectWrapper = styled.button`
	padding: 0.5rem 5rem 0.5rem 1.8rem;
	text-align: start;
	width: 100%;
	cursor: pointer;
	display: flex;
	align-items: center;

	&:hover {
		background-color: rgba(180, 182, 187, 0.3);
	}
`;

const FontSizeWrapper = styled(FormatWrapper)<{ maximizeState: boolean }>`
	bottom: ${(props) => (props.maximizeState ? "140px" : "100px")};
	left: ${(props) => (props.maximizeState ? "350px" : "200px")};
	width: 170px;
`;

export { FontStyleWrapper, FontStyleSelectWrapper, FontSizeWrapper };
