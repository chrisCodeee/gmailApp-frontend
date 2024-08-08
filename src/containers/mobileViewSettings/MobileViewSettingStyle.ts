import styled from "styled-components";

const SettingWrapper = styled.div`
	width: 100vw;
	position: relative;

	background-color: rgb(241, 241, 241);

	& .settingContainer {
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #000;

		& .text {
			font-size: 1.85rem;
			font-weight: 600;
		}
	}
`;

const SettingHeader = styled.div<{ $bg: string; $toggleSignature: string; $toggleVacation: string }>`
	background-color: rgb(241, 241, 241);
	padding: 0.7rem 1.2rem;
	font-weight: 500;
	font-size: 1.4rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);

	display: flex;
	justify-content: space-between;
	align-items: center;

	& .menu {
		padding: 0.4rem 0.7rem 0.4rem 1.2rem;
		border-radius: 3px;
		border-right: 1px solid rgba(0, 0, 0, 0.2);
		background-image: ${(props) => `url(${props.$bg})`};
		background-size: cover;
		font-weight: inherit;
	}

	& .apply {
		padding: 0.3rem 1rem;
		border-radius: 3px;
		background-color: ${(props) => (props.$toggleSignature === "true" || props.$toggleVacation === "true" ? "rgb(33, 150, 243)" : " rgba(33, 150, 243,.6)")};
		color: #fff;
		font-weight: inherit;
	}
`;

const HelpAndFeedbackWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.6);

	& .container {
		position: absolute;
		bottom: -1px;
		left: 0;
		right: 0;
		background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(113, 119, 124)), to(rgb(60, 66, 73)));

		& .btn_wrapper {
			padding: 2rem 0.7rem;
			color: #fff;
			font-weight: 500;
			font-size: 2rem;

			display: flex;
			flex-direction: column;

			& a,
			& button {
				background-color: rgba(0, 0, 0, 0.4);
				padding: 0.5rem 0;
				border-radius: 5px;
				box-shadow: 0 1px 1px #fff;
				border: 1px solid #000;
				text-align: center;
			}
		}
	}
`;

export { SettingWrapper, SettingHeader, HelpAndFeedbackWrapper };
