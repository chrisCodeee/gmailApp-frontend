import styled from "styled-components";

const borderBottom = `
	border-bottom: 1px solid rgba(0, 0, 0, 0.07);
`;

const hover = `
    &:hover{
        background-color: rgba(0, 0, 0, 0.07);
        cursor: pointer;
    }
    `;

const MoreOptionWrapper = styled.div<{ $maximizeState: string }>`
	position: absolute;
	bottom: ${(props) => (props.$maximizeState === "true" ? "80px" : "37px")};
	left: ${(props) => (props.$maximizeState === "true" ? "530px" : "165px")};
	background-color: #fff;
	border-radius: 5px;
	z-index: 1000000000;
	box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
`;

const DefaultFullScreen = styled.div`
	${borderBottom};
	padding: 0.5rem 0;
`;

const DefaultFullScreenWrapper = styled.div<{ $active: string }>`
	display: flex;
	align-items: center;

	${hover};
	padding: ${(props) => (props.$active === "true" ? "0.7rem 2rem 0.7rem 1.5rem" : "0.7rem 2rem 0.7rem 4.5rem")};

	& .text {
		padding: ${(props) => props.$active === "true" && "0 0 0 1rem"};
	}
`;

const FormatOption = styled.div`
	padding: 0.5rem 0;
	${borderBottom};

	& .labelOption {
		${hover};
		padding: 0.7rem 2rem 0.7rem 4.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: center;
	}

	& .checkSpelling {
		${hover};
		padding: 0.7rem 2rem 0.7rem 4.5rem;
	}
`;

const PlainTextMode = styled.div<{ $active: string }>`
	display: flex;
	align-items: center;

	${hover};
	padding: ${(props) => (props.$active === "true" ? "0.7rem 2rem 0.7rem 1.5rem" : "0.7rem 2rem 0.7rem 4.5rem")};

	& .text {
		padding: ${(props) => props.$active === "true" && "0 0 0 1rem"};
	}
`;

const SetUpTimeAndDate = styled.div`
	padding: 0.5rem 0;

	& .setUpTime {
		${hover};
		display: flex;
		align-items: center;
		padding: 0.7rem 2rem 0.7rem 1.5rem;

		& .timeToMeet {
			margin: 0 0.5rem 0 1rem;
		}
	}
`;

export { MoreOptionWrapper, DefaultFullScreen, FormatOption, SetUpTimeAndDate, PlainTextMode, DefaultFullScreenWrapper };
