import styled from "styled-components";

const LanguageInputToolWrapper = styled.div`
	position: absolute;
	top: 103px;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 0 8px rgb(180, 182, 187);
	z-index: 200;
`;

const LanguageInputContainer = styled.div`
	border-bottom: 1px solid rgba(180, 182, 187, 0.3);
	padding: 0.5rem 0;
`;

const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 0.6rem 3rem 0.6rem 4rem;
	cursor: default;

	& span {
		transform: translateY(0.11rem);
	}

	&:hover {
		background-color: rgba(180, 182, 187, 0.3);
	}
`;

const InputToolSettingsWrapper = styled.div`
	cursor: default;
	padding: 0.5rem 4rem;
	margin: 0.5rem 0;
	&:hover {
		background-color: rgba(180, 182, 187, 0.3);
	}
`;

export { LanguageInputToolWrapper, LanguageInputContainer, InputToolSettingsWrapper, InputWrapper };
