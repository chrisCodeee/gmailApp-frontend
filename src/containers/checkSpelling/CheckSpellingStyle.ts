import styled from "styled-components";

const flex = `	
    display: flex;
	align-items: center;
    `;

const CheckSpellingWrapper = styled.div<{ $maximizeState: string }>`
	position: absolute;
	bottom: ${(props) => (props.$maximizeState === "true" ? "110px" : "70px")};
	right: ${(props) => (props.$maximizeState === "true" ? "175px" : "25px")};
	background-color: #fff;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	border-radius: 3px;
	overflow: hidden;
	cursor: pointer;

	${flex};

	& .iconClose {
		padding: 0 0.8rem;

		${flex};
		align-self: stretch;

		&:hover {
			background-color: rgba(0, 0, 0, 0.05);
		}
	}
`;

const RecheckWrapper = styled.div`
	border-right: 1px solid rgba(0, 0, 0, 0.1);

	${flex};

	& .recheck {
		padding: 0.7rem 1rem 0.7rem 1.2rem;

		&:hover {
			background-color: rgba(0, 0, 0, 0.05);
		}
	}

	& .iconArrow {
		${flex};
		align-self: stretch;

		&:hover {
			background-color: rgba(0, 0, 0, 0.05);
		}
	}
`;

export { CheckSpellingWrapper, RecheckWrapper };
