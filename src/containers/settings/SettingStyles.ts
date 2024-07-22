import styled from "styled-components";

const BtnAllSettingContainer = styled.div`
	border-radius: 100px;
	margin: 0.7rem 0;

	&:hover {
		background-color: rgba(26, 115, 232, 0.039);
	}
`;

const AllSettingWrapper = styled.div`
	padding: 0.5rem 1rem 0.5rem 1.5rem;
`;

const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Wrapper = styled.div`
	border-top: 1px solid rgba(128, 128, 128, 0.2);
	padding: 1.2rem 2rem 1.2rem 0.5rem;
	margin: 0.5rem 0 0 0;
`;

const PreviewImage = styled.img`
	display: block;
	height: 40px;
	width: 60px;
	object-fit: fill;
	border: 2px solid rgb(26, 115, 232);
	border-radius: 4px;
	cursor: pointer;
	margin: 1rem 0 0 1.1rem;
`;

export { BtnAllSettingContainer, AllSettingWrapper, FlexContainer, Wrapper, PreviewImage };
