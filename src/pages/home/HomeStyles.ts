import styled from "styled-components";

const MainContainer = styled.main`
	display: flex;
	margin: 1rem 0 0 0;

	position: relative;
`;

const LeftAsideContainer = styled.aside`
	min-width: 25rem;
`;

const RightAsideContainer = styled.aside`
	padding: 0.6rem 1rem 0 0.7rem;
`;

const MessageContainer = styled.div`
	flex-grow: 1;
	background-color: #fff;
	border-radius: 20px;
`;

const SettingWrapper = styled.div`
	height: 73vh;
	overflow-y: auto;

	@media screen and (max-width: 992px) {
		height: 90vh;
	}

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #888;
	}

	&::-webkit-scrollbar-track-piece {
		background-color: #cccccc54;
	}
`;

export { MainContainer, MessageContainer, LeftAsideContainer, RightAsideContainer, SettingWrapper };
