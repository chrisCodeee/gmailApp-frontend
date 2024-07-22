import styled from "styled-components";

const InsertSignatureWrapper = styled.div<{ maximizeState: string }>`
	position: absolute;
	right: ${(props) => props.maximizeState === "false" && "58px"};
	left: ${(props) => props.maximizeState === "true" && "490px"};
	bottom: ${(props) => (props.maximizeState === "true" ? "60px" : "20px")};
	background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	width: 230px;
	border-radius: 3px;
	z-index: 200000;
`;

const InsertSignatureHeading = styled.div`
	text-align: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	padding: 0.6rem 0;
	margin: 0;

	& div {
		cursor: pointer;
		padding: 0.5rem 0;
		&:hover {
			background-color: rgba(180, 182, 187, 0.3);
		}
	}
`;

const InsertSignatureCheck = styled.div`
	padding: 0.6rem 0;

	display: flex;
	align-items: center;

	& div {
		cursor: pointer;
		padding: 0.5rem 0 0.5rem 2rem;
		width: 100%;

		& span {
			margin: 0 0 0 1.7rem;
		}

		&:hover {
			background-color: rgba(180, 182, 187, 0.3);
		}
	}
`;

export { InsertSignatureWrapper, InsertSignatureHeading, InsertSignatureCheck };
