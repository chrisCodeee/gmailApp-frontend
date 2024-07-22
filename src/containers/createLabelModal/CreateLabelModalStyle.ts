import styled from "styled-components";

const CreateLabelModalWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 700000000;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ModalContainer = styled.div`
	background-color: #fff;
	border-radius: 5px;
	padding: 1rem 1.5rem 2rem 2.5rem;

	& input[type="text"]:focus,
	select:focus {
		outline: 1px solid #000;
		border-color: #000;
	}
`;

const LabelContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& span {
		font-size: 2.2rem;
	}
`;

const NewLabelWrapper = styled.div`
	margin: 1rem 0 0 0;

	& input {
		display: block;
		margin: 0.5rem 0 0 0;
		border: 1px solid rgba(0, 0, 0, 0.5);
		border-radius: 3px;
		width: 91%;
	}
`;

const NestWrapper = styled.div`
	margin: 0.5rem 0 0 0;

	& select {
		display: block;
		margin: 0.5rem 0 0 0;
		border: 1px solid rgba(0, 0, 0, 0.5);
		border-radius: 3px;
		width: 89%;
	}
`;

const NestLabelContainer = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;

	& label {
		margin: -0.1rem 0 0 0.5rem;
	}
`;

const ModalBtnWrapper = styled.div`
	margin: 2.4rem 0 0 0;
	display: flex;
	justify-content: end;
	padding: 0 1rem 0 0;
`;

const BtnCreateLabel = styled.button<{ nestChecked: boolean }>`
	padding: 7.5px 20px;
	font-weight: 500;
	border-radius: 30px;
	margin-left: 0.7rem;
	background-color: ${(props) => (props.nestChecked ? "rgba(180, 182, 187, 0.18)" : "rgb(26, 115, 232)")};
	color: ${(props) => (props.nestChecked ? "rgba(32, 33, 36, .4)" : "#fff")};
`;

export { CreateLabelModalWrapper, ModalContainer, LabelContainer, NewLabelWrapper, NestWrapper, NestLabelContainer, ModalBtnWrapper, BtnCreateLabel };
