import styled from "styled-components";

const EditAppointmentWrapper = styled.div<{ $maximizeState: string }>`
	position: absolute;
	top: ${(props) => (props.$maximizeState === "true" ? "180px" : "140px")};
	left: ${(props) => (props.$maximizeState === "true" ? "150px" : "0")};
	right: 0;
	padding: 0.5rem;
`;

const EditAppointmentContainer = styled.div`
	width: 470px;
	margin: 0 0 0 1.5rem;
	border: 1px solid transparent;
	padding: 0.8rem;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		border: 1px solid rgba(0, 0, 0, 0.2);

		& .iconClose {
			display: flex;
		}
	}
`;

const EditAppointmentMainContainer = styled.div`
	position: relative;
	background-color: rgb(248, 249, 250);
	border: 0.8px dashed rgb(218, 220, 224);
	border-radius: 4px;

	& .iconClose {
		display: none;
		position: absolute;
		right: -4px;
		top: -6px;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 100%;
		align-items: center;
		justify-content: center;
		padding: 0.1rem;
	}

	& .editText {
		padding: 1.2rem 0 0 0;
		margin: 0 0 0 2rem;

		& .selectTime {
			font-weight: 500;
		}
	}

	& .howItWorks {
		margin: 0.2rem 0 1.5rem 1.5rem;
		color: rgb(25, 103, 210);
		font-weight: 500;
		display: inline-block;
		padding: 0.6rem 0.7rem;
		border-radius: 4px;

		&:hover {
			background-color: rgba(210, 227, 252, 0.18);
		}
	}
`;

export { EditAppointmentWrapper, EditAppointmentContainer, EditAppointmentMainContainer };
