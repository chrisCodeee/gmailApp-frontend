import styled from "styled-components";

const flex = `
display: flex;
align-items: center;
`;

const ScheduleSendWrapper = styled.div<{ maximizeState: string }>`
	position: absolute;
	bottom: ${(props) => (props.maximizeState === "true" ? "90px" : "46px")};
	left: ${(props) => (props.maximizeState === "true" ? "170px" : "16px")};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	background-color: #fff;
	border-radius: 3px;
	padding: 0.6rem 0;

	${flex};

	& div {
		cursor: pointer;
		padding: 0.4rem 1.6rem 0.4rem 1.5rem;
		width: 100%;

		& span {
			margin: 0 0 0 0.7rem;
		}

		&:hover {
			background-color: rgba(180, 182, 187, 0.3);
		}
	}
`;

const ScheduleSendPopUpWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100vh;
	z-index: 100000000;
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.4);

	${flex};
	justify-content: center;
`;

const ScheduleSendPopUpContainer = styled.div`
	background-color: #fff;
	border-radius: 5px;
	width: 310px;
`;

const ScheduleSendErrorConatiner = styled.div`
	padding: 1.5rem 2.5rem 2.5rem 2.5rem;
`;

const ScheduleSendErrorHeading = styled.div`
	font-size: 2.2rem;
`;

const ScheduleSendErrorMessage = styled.div`
	margin: 1.5rem 0 2.5rem 0;
`;

const ScheduleSendErrorBtnContainer = styled.div`
	display: flex;
	justify-content: end;
`;

const ScheduleSendTimeWrapper = styled.div`
	padding: 1.5rem 1.5rem 0 2.5rem;
`;

const ScheduleSendTimeContainer = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 2.2rem;
`;

const ScheduleSendTimeZone = styled.div`
	margin: -0.5rem 0 0 0;
`;

const ScheduleSendTimeList = styled.div`
	border-bottom: 1px solid rgba(180, 182, 187, 0.3);
	padding: 0 0 1rem 0;
	margin: 2rem 0 0 0;

	& li {
		display: flex;
		justify-content: space-between;
		padding: 0.7rem 2.5rem 0.7rem 2.5rem;

		&:hover {
			background-color: rgba(180, 182, 187, 0.1);
		}
	}
`;

const ScheduleSendDateAndTimeContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 1.5rem 2.5rem;

	& .date {
		margin: 0 0 0 1.2rem;
	}

	&:hover {
		background-color: rgba(180, 182, 187, 0.1);
	}
`;

const ScheduleCheckPopUpBtnCancel = styled.div`
	& button {
		background-color: rgba(180, 182, 187, 0.15);
		padding: 0.7rem 2rem;
		border-radius: 30px;
		font-weight: 500;

		&:hover {
			background-color: rgba(180, 182, 187, 0.3);
		}
	}
`;

const ScheduleCheckEmailContainer = styled.div`
	padding: 1.5rem 2.5rem 2.5rem 2.5rem;
	background-color: #fff;
	border-radius: 5px;
	width: 550px;
`;

export { ScheduleSendWrapper, ScheduleSendPopUpWrapper, ScheduleSendPopUpContainer, ScheduleSendTimeWrapper, ScheduleSendErrorHeading, ScheduleSendErrorMessage, ScheduleSendErrorBtnContainer, ScheduleSendTimeZone, ScheduleSendTimeList, ScheduleSendTimeContainer, ScheduleSendErrorConatiner, ScheduleSendDateAndTimeContainer, ScheduleCheckPopUpBtnCancel, ScheduleCheckEmailContainer };
