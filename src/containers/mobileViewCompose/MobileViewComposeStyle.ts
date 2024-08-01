import styled from "styled-components";

const MobileViewComposeWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	z-index: 10000;
	background-color: #fff;

	& .header {
		background-color: rgb(241, 241, 241);
		padding: 1rem 0.7rem;
		display: flex;
		justify-content: space-between;

		& .closeBtn {
			background-color: #fff;
			outline: 1px solid rgba(0, 0, 0, 0.1);
			border-radius: 3px;
			font-weight: 500;
			font-size: 1.3rem;
			padding: 0.5rem 1.2rem;

			&:hover {
				background-color: rgba(229, 236, 247, 0.01);
			}
		}

		& .sendBtn {
			background-color: rgba(11, 87, 208, 0.9);
			color: #fff;
			border-radius: 3px;
			font-weight: 500;
			font-size: 1.3rem;
			padding: 0.5rem 1.2rem;

			&:hover {
				background-color: rgb(11, 87, 208);
			}
		}
	}

	& .inputwrapper {
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		padding: 1rem;
		font-size: 1.6rem;
		color: rgba(0, 0, 0, 0.7);

		& input {
			border-radius: 3px;
			border: 2px solid #fff;
			padding: 0 0.5rem;

			&:focus {
				border: 2px solid #000;
			}
		}

		& label {
			cursor: pointer;
			color: rgba(0, 0, 0, 0.5);
		}
	}

	& .textarea {
		padding: 0.5rem 1rem;
		min-height: 200px;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		font-weight: 500;
		font-size: 1.6rem;

		&:focus {
			border: 1px solid #000;
		}
	}
`;

export { MobileViewComposeWrapper };
