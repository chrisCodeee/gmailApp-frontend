import styled from "styled-components";

const flex = `
display: flex;
align-items: center;
`;

const ConfidentialModeWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100vh;
	z-index: 100000000;
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.6);

	${flex};
	justify-content: center;

	& input:checked {
		accent-color: rgb(32, 33, 36);
	}
`;

const ConfidentialModeContainer = styled.div`
	position: relative;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	border-radius: 5px;
	padding: 2rem 3rem 2.5rem 2.5rem;
	width: 504px;
	background-color: #fff;
	cursor: default;

	& p {
		& a {
			color: rgb(17, 85, 204);
			text-decoration: underline;
		}
	}
`;

const ConfidentialModeHeading = styled.div`
	font-size: 2.5rem;
	margin: 0 0 1.2rem 0;
`;

const ConfidentialModeSubHeading = styled.div`
	color: rgb(17, 85, 204);
	text-transform: uppercase;
	font-size: 1.3rem;
	font-weight: 500;
	margin: 2.5rem 0 0 0;
	padding: 0;
`;

const ConfidentialModeTimeWrapper = styled.div`
	display: flex;
	margin: 2rem 0;
`;

const ConfidentialModeTimeCategory = styled.div`
	${flex};
	justify-content: space-between;
	margin: 0 1.1rem 0 0;
	cursor: pointer;
	border-bottom: 1px solid rgba(0, 0, 0, 0.07);
	padding: 0 0.2rem 0.5rem 0;

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

const ConfidentialModePasscodeWrapper = styled.div`
	${flex};
	margin: -5px 0 0 0;
`;

const ConfidentialModeSMSPasscodeWrapper = styled.div`
	${flex};
	margin: 0 0 0 -1rem;
`;

const ConfidentialModeRadioWrapper = styled.div<{ smsChecked: string }>`
	${flex};

	& input {
		height: 16px;
		width: 16px;
	}

	& label {
		margin: 0 0 0 0.5rem;
	}

	& .inputContainer {
		background-color: ${(props) => props.smsChecked === "true" && "rgba(180, 182, 187, 0.4)"};
		border: ${(props) => (props.smsChecked === "true" ? "1px solid rgb(180, 182, 187)" : "1px solid transparent")};
		border-radius: 100%;
		width: 40px;
		height: 40px;
		${flex};
		justify-content: center;
		margin: 0 0.7rem 0 0;
		transition: all 0.3s;
	}

	&:hover {
		& .inputContainer {
			background-color: ${(props) => (props.smsChecked === "true" ? "rgba(180, 182, 187, 0.4)" : "rgba(180, 182, 187, 0.2)")};
			border: ${(props) => (props.smsChecked === "true" ? "1px solid rgb(180, 182, 187)" : "1px solid transparent")};
		}
	}
`;

const ConfidentialModeBtnWrapper = styled.div`
	${flex};
	justify-content: end;
	margin: 2rem 0 0 0;
`;

const ConfidentialModeBtnContainer = styled.div`
	${flex};
	align-self: stretch;
`;

export { ConfidentialModeContainer, ConfidentialModeWrapper, ConfidentialModeHeading, ConfidentialModeSubHeading, ConfidentialModeTimeWrapper, ConfidentialModeTimeCategory, ConfidentialModePasscodeWrapper, ConfidentialModeSMSPasscodeWrapper, ConfidentialModeRadioWrapper, ConfidentialModeBtnWrapper, ConfidentialModeBtnContainer };
