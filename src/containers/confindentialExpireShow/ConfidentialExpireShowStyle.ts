import styled from "styled-components";

const ConfidentialExpireShowWrapper = styled.div<{ formattingOptionState: string; maximizeState: string; recheckState: string }>`
	position: absolute;
	bottom: ${(props) => (props.formattingOptionState === "true" || props.maximizeState === "true" || props.recheckState === "true" ? "110px" : "60px")};
	bottom: ${(props) => props.maximizeState === "true" && (props.formattingOptionState === "true" || props.recheckState === "true") && "150px"};

	border: 1px solid rgba(0, 0, 0, 0.15);
	margin: 0 1.5rem;
	width: ${(props) => props.maximizeState === "true" && "78.2%"};
	border-radius: 4px;
	z-index: 1;

	overflow: hidden;
`;

const ConfidentialExpireShowContainer = styled.div`
	background-color: #fff;
	padding: 1.5rem 1.5rem 1rem 1.7rem;

	display: flex;
	justify-content: space-between;
`;

const ConfidentialIconLockWrapper = styled.div<{ maximizeState: string }>`
	background-color: rgb(1, 87, 155);
	border-radius: 100%;
	height: 40px;
	width: 40px;
	padding: 8px;
	margin: ${(props) => (props.maximizeState === "true" ? "0" : "0.5em 0 0 0")};

	& img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
`;

const ConfidentialModeExpireTimeWrapper = styled.div`
	margin: 0 3rem 0 2rem;

	& div {
		color: rgb(1, 87, 155);
	}

	& p {
		font-size: 1.3rem;
		line-height: 1.2;
	}
`;

const ConfidentialModeExpireButtonWrapper = styled.div`
	margin: 0.8rem 0 0 0;
`;

const ConfidentialModeExpireButtonContainer = styled.div`
	display: flex;
	align-items: center;

	& button {
		color: rgb(1, 87, 155);
		font-weight: 500;
		padding: 0.8rem 1.7rem;
		position: relative;
		z-index: 0;

		&::before {
			content: "";
			color: #fff;
			background-color: #01579b;
			opacity: 0.06;
			display: block;
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			z-index: -1;
			border-radius: 4px;
			bottom: 0;
			width: 100%;
			height: 100%;
			transform: scale(0);
			transition: all 0.2s;
		}

		&:hover {
			&::before {
				transform: scale(1);
			}
		}
	}
`;

export { ConfidentialExpireShowWrapper, ConfidentialExpireShowContainer, ConfidentialIconLockWrapper, ConfidentialModeExpireTimeWrapper, ConfidentialModeExpireButtonWrapper, ConfidentialModeExpireButtonContainer };
