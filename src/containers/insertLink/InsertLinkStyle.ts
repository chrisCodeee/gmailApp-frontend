import styled from "styled-components";

const InsertLinkStyle = `
	text-decoration: underline;
	color: rgb(17, 85, 204);
`;

const InsertLinkWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 2000000000;

	& input {
		height: 22px;
		border-radius: 3px;
		border: 1px solid #000;

		&:focus {
			border-width: 2px;
		}
	}
`;

const InsertLinkContainer = styled.div<{ $emailstate: string }>`
	position: absolute;
	top: ${(props) => (props.$emailstate === "true" ? "56.09%" : "50%")};
	left: 50%;
	transform: translate(-50%, -50%);
	width: 625px;
	background-color: #fff;
	border-radius: 5px;
	padding: 1.5rem 1.5rem 2.2rem 2.5rem;
	height: ${(props) => (props.$emailstate === "true" ? "344.11px" : "260px")};
`;

const InsertLinkFlexWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const InsertLinkHeading = styled(InsertLinkFlexWrapper)`
	justify-content: space-between;

	& span {
		font-size: 2.2rem;
	}
`;

const InsertTextToDisplay = styled(InsertLinkFlexWrapper)`
	padding: 0 1.5rem 0 0;
	margin: 1rem 0;

	& label {
		margin: 0 0.5rem 0 0;
	}

	& input {
		flex-grow: 1;
	}
`;

const InsertLinkAddressWrapper = styled.div`
	display: flex;
	align-items: stretch;
	padding: 0 1.5rem 0 1rem;
`;

const InsetLinkAddressContainer = styled.div`
	margin: 0 2rem 0 0;

	& label {
		cursor: pointer;
	}
`;

const InsertLinkWebAddressContainer = styled(InsertLinkFlexWrapper)<{ $insertemailstyle: string }>`
	margin: 0.6rem 0;
	font-weight: ${(props) => props.$insertemailstyle === "true" && "500"};
	${(props) => props.$insertemailstyle === "false" && InsertLinkStyle};

	& label {
		margin: 0 0 0 0.5rem;
	}
`;

const InsertLinkEmailAddressContainer = styled(InsertLinkFlexWrapper)<{ $insertemailstyle: string }>`
	${(props) => props.$insertemailstyle === "true" && InsertLinkStyle};
	font-weight: ${(props) => props.$insertemailstyle === "false" && "500"};

	& label {
		margin: 0 0 0 0.5rem;
	}
`;

const InsertLinkDestinationWrapper = styled.div`
	margin: -1.5rem 0 0 0;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: space-between;
`;

const InsertLinkDestinationContainer = styled.div`
	& label {
		display: block;
		font-weight: 500;
	}

	& input {
		width: 100%;
	}
`;

const InsertLinkTestLinkContainer = styled.div<{ $emailstate: string }>`
	margin: 1.3rem 0 0 0;
	display: ${(props) => (props.$emailstate === "true" ? "block" : "none")};

	& a {
		${InsertLinkStyle}
	}
`;

const InsertLinkText = styled.p`
	font-size: 1.12rem;
	margin: 1.5rem 0 0 0;
	line-height: 1.8;

	& span {
		font-weight: 500;
	}

	& a {
		${InsertLinkStyle}
	}
`;

const InsertLinkButtonWrapper = styled.div<{ $emailstate: string }>`
	display: flex;
	justify-content: end;
	margin: 3.5rem 0 0 0;
`;

const BtnOk = styled.button<{ $btnstate: string }>`
	background-color: ${(props) => (props.$btnstate ? "rgb(17, 85, 204)" : "rgba(180, 182, 187, 0.15)")};
	border-radius: 20px;
	padding: 0.7rem 3rem;
	margin: 0 0 0 1rem;
	color: ${(props) => (props.$btnstate ? "#fff" : "rgba(0, 0, 0, 0.2)")};
	font-weight: 500;
`;

export { InsertLinkWrapper, InsertLinkContainer, InsertLinkFlexWrapper, InsertLinkHeading, InsertTextToDisplay, InsertLinkAddressWrapper, InsetLinkAddressContainer, InsertLinkWebAddressContainer, InsertLinkEmailAddressContainer, InsertLinkDestinationWrapper, InsertLinkDestinationContainer, InsertLinkTestLinkContainer, InsertLinkText, InsertLinkButtonWrapper, BtnOk };
