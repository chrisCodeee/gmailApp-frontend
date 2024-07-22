import styled from "styled-components";

const flex = `
display: flex;
align-items: center;
`;

const ScheduleAppointmentWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	height: 100vh;
	width: 100vw;
	z-index: 900000;

	${flex};
	justify-content: center;
`;

const ScheduleAppointmentContainer = styled.div<{ $nextStep: string }>`
	position: relative;
	background-color: #fff;
	width: 510px;
	border-radius: 10px;
	overflow: hidden;
	backface-visibility: hidden;

	& .closeButton {
		position: absolute;
		top: 10px;
		right: 12px;
		cursor: pointer;
	}

	& video {
		width: 100%;
		height: 287px;
	}

	& .scheduleDetails {
		padding: 1.6rem 1.1rem 1.6rem 4.5rem;

		& .scheduleHeading {
			font-weight: 700;
			font-size: 2.2rem;
		}

		& .scheduleText {
			margin: 0.5rem 0 0 0;
			font-size: 1.7rem;
		}

		& .scheduleFooter {
			${flex};
			justify-content: space-between;
			margin: 2rem 0 0 0;

			& .scheduleSteptepIndicators {
				${flex};

				& .stepIndicator {
					width: 8px;
					height: 8px;
					border-radius: 100%;
				}

				& .step1 {
					background-color: ${(props) => (props.$nextStep === "true" ? "rgb(210, 227, 252)" : "rgb(11, 87, 208)")};
					margin: 0 0.8rem 0 0;
				}

				& .step2 {
					background-color: ${(props) => (props.$nextStep === "true" ? "rgb(11, 87, 208)" : "rgb(210, 227, 252)")};
				}
			}

			& .buttonWrapper {
				cursor: pointer;
				border-radius: 50px;
				padding: 0.7rem 1.6rem;

				& span {
					color: rgb(26, 115, 232);
					font-weight: 500;
					display: block;
				}

				&:hover {
					background-color: rgba(210, 227, 252, 0.2);
				}
			}
		}
	}
`;

export { ScheduleAppointmentWrapper, ScheduleAppointmentContainer };
