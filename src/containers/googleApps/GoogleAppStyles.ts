import styled from "styled-components";

const GoogleAppsWrapper = styled.div`
	width: 344px;
	background-color: rgb(233, 238, 246);
	border-radius: 28px;
	position: absolute;
	top: 10%;
	right: 1%;
	padding: 1rem 0.1rem 1rem 0.7rem;
	border: 1px solid rgba(0, 0, 0, 0.1);
	z-index: 200;

	& .appContainer {
		overflow-y: auto;
		height: 400px;

		&::-webkit-scrollbar {
			width: 7px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: rgba(136, 136, 136, 0.5);
			border-radius: 100px;
		}

		& .btnWrapper button:hover {
			background-color: rgba(194, 231, 255, 0.3);
		}
	}
`;

const AppsContainer = styled.div`
	background-color: rgb(248, 250, 253);
	padding: 0 2.5rem 3rem 2.5rem;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	// height: fit-content;

	& a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1.2rem 0 0.2rem 0;
		border-radius: 10px;

		& .shortName {
			display: block;
		}

		& .fullName {
			display: none;
		}
	}

	& a:hover {
		background-color: rgb(233, 238, 246);
	}
`;

const GoogleApp = styled.a``;

export { GoogleAppsWrapper, AppsContainer, GoogleApp };
