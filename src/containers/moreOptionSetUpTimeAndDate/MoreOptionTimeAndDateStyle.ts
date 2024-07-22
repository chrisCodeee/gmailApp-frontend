import styled from "styled-components";

const MoreOptionTimeAndDateWrapper = styled.div<{ $maximizeState: string }>`
	position: absolute;
	bottom: ${(props) => (props.$maximizeState === "true" ? "25px" : "-17px")};
	left: ${(props) => (props.$maximizeState === "true" ? "753px" : "820px")};
	background-color: #fff;
	box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
	border-radius: 3px;
	overflow: hidden;
	padding: 0.5rem 0;
	cursor: pointer;

	z-index: 800000;

	& .freeTime:hover,
	& .createEvent:hover {
		background-color: rgba(0, 0, 0, 0.07);
	}

	& .freeTime {
		padding: 0.5rem 2.5rem 0.5rem 4rem;
		display: flex;
		align-items: center;

		& .new {
			color: #fff;
			font-weight: 500;
			background-color: rgb(26, 115, 232);
			border-radius: 50px;
			font-size: 1.2rem;
			padding: 0 0.5rem;
			margin: 0 0 0 1.5rem;

			& span {
				display: block;
				transform: translateY(-0.1rem);
			}
		}
	}

	& .createEvent {
		padding: 0.7rem 2.5rem 0.7rem 4rem;
	}
`;

const FreeTimeWrapper = styled.div``;

export { MoreOptionTimeAndDateWrapper, FreeTimeWrapper };
