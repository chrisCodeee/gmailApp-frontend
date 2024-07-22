import styled from "styled-components";

const SearchMoreFormContainer = styled.div``;

const FormWrapper = styled.div`
	margin-bottom: 15px;
	display: flex;

	& input,
	input[type="date"],
	select {
		border-bottom: 1px solid rgba(128, 128, 128, 0.2);
	}

	& input:focus,
	option:focus {
		border-bottom: 1.5px solid rgba(26, 115, 232, 0.793);
		border-radius: 2px;
	}
`;

const FlexContainer = styled.div`
	display: flex;
	align-items: center;

	& input {
		position: relative;

		&::after {
			content: "";
			display: block;
			height: 40px;
			width: 40px;
			top: -75%;
			left: -75%;
			position: absolute;
			transform: translate(50%, 50%);
			transition: all 0.15s;
			transform: scale(0);
			opacity: 0;
			border-radius: 100%;
		}
	}

	&:hover input::after {
		background-color: rgba(180, 182, 187, 0.3);
		transform: scale(1);
		opacity: 1;
		transform-origin: center;
	}
`;

const SearchBtnContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
`;

const Input = styled.input``;

export { SearchMoreFormContainer, FormWrapper, Input, FlexContainer, SearchBtnContainer };
