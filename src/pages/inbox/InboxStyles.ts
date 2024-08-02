import styled from "styled-components";

const InboxContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;

	& input {
		border-radius: 3px;
		border: 2px solid #fff;

		&:focus {
			border: 2px solid #000;
		}
	}

	& .btn-cancel {
		background-color: rgba(229, 236, 247, 0.349);
		outline: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 2px;
		font-weight: 500;
		font-size: 1.3rem;
		padding: 0.3rem 1.2rem 0.5rem 1.2rem;
		display: none;

		&:hover {
			background-color: rgba(229, 236, 247, 0.9);
		}
	}

	& input:focus + .btn-cancel {
		display: block;
	}

	& .nomessage {
		& .inboxsetting {
			&:hover {
				text-decoration: underline;
			}
		}
	}

	& .footer {
		& .link {
			cursor: pointer;

			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

const CategoryContainer = styled.div`
	border-bottom: 1px solid rgba(180, 182, 187, 0.3);
`;

const Container = styled.div`
	display: flex;
	align-items: center;

	width: 79rem;
`;

// const PrimaryWrapper = styled.div`
// 	align-self: stretch;
// 	align-items: center;
// 	display: flex;
// 	padding: 0 0 0 1rem;
// 	color: #0b57d0;
// 	position: relative;

// 	&::after {
// 		border-bottom: 3.5px solid #0b57d0;
// 		border-top-right-radius: 20px;
// 		border-top-left-radius: 20px;
// 		content: "";
// 		display: block;
// 		width: 90%;
// 		height: 3px;
// 		position: absolute;
// 		bottom: 0;
// 	}

// 	&:hover {
// 		cursor: pointer;
// 		background-color: rgba(180, 182, 187, 0.2);
// 	}
// `;

const PrimaryIconWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const PrimaryHeading = styled.h4`
	margin: 0 0 0 1.5rem;
`;

const UnsubscribeContainer = styled.div`
	display: none;
`;

const InboxMessageContainer = styled.button`
	border-bottom: 1px solid rgba(180, 182, 187, 0.3);
	border-left: 1px solid transparent;
	border-right: 1px solid transparent;
	border-top: 1px solid transparent;
	cursor: pointer;
	transition: all 0.1s;
	width: 100%;
	position: relative;

	@media screen and (max-width: 1140px) {
		&::before {
			content: "";
			display: block;
			width: 0;
			background-color: rgb(11, 87, 208);
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
		}
		&:focus {
			&::before {
				width: 4px;
			}
		}
	}

	& input,
	& .iconStar {
		opacity: 0.3;
		cursor: pointer;
	}

	&:hover * {
		opacity: 1;
	}

	&:hover {
		border: 0.3px solid rgba(180, 182, 187, 0.3);
		box-shadow: 0 1.5px 0 rgba(180, 182, 187, 0.7);

		.iconHover {
			display: flex;
		}
	}

	&:focus {
		background-color: rgba(229, 236, 247, 0.6);
		border: 0.3px solid rgba(180, 182, 187, 0.3);
		// box-shadow: 0 1.5px 0 transparent;
		border-top-color: transparent;

		&::before {
			width: 4px;
		}
	}
`;

const InboxMessageWrapper = styled.div`
	align-items: center;
	margin: 0;
	// display: flex;
	flex-wrap: no-wrap;
`;

const InboxSubjectWrapper = styled.div`
	display: flex;
	// padding: 0 0rem 0 0;
	align-items: center;
	// width: 280px;
	cursor: pointer;

	@media screen and (max-width: 1140px) {
		width: fit-content;
	}
`;

const InboxMessageBodyWrapper = styled.div`
	align-items: center;
	align-self: stretch;
	flex-grow: 1;
`;

const InboxMessageBodyWrapperSubject = styled.div`
	flex-grow: 1;
	align-items: center;
`;

const InboxMessageTime = styled.h4`
	font-size: 1.2rem;
`;

const UnsubscribeWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: -10px;
`;

const UnsubscribeText = styled.div`
	font-size: 1.2rem;
	font-weight: 500;
	border: 1px solid rgba(180, 182, 187, 0.6);
	border-radius: 4px;
	padding: 0 0.7rem 0.3rem 0.7rem;
	margin: 0 1rem 0 0;

	&:hover {
		background-color: rgba(180, 182, 187, 0.2);
	}
`;

const CategoryLabelWrapper = styled.button`
	position: relative;
	display: flex;
	align-self: stretch;
	align-items: center;
	border: 0;
	outline: 0;
	font-size: inherit;

	&.active {
		color: #0b57d0;

		&::after {
			border-bottom: 3.5px solid #0b57d0;
			border-top-right-radius: 20px;
			border-top-left-radius: 20px;
			content: "";
			display: block;
			width: 94%;
			height: 3px;
			position: absolute;
			bottom: 0;
		}
	}

	&:hover {
		cursor: pointer;
		background-color: rgba(180, 182, 187, 0.2);
	}

	&:focus {
		outline: 0;
		border: 0;
		color: #0b57d0;

		&::after {
			border-bottom: 3.5px solid #0b57d0;
			border-top-right-radius: 20px;
			border-top-left-radius: 20px;
			content: "";
			display: block;
			width: 90%;
			height: 3px;
			position: absolute;
			bottom: 0;
		}
	}
`;

export { InboxContainer, CategoryContainer, Container, PrimaryIconWrapper, PrimaryHeading, InboxMessageContainer, InboxMessageWrapper, InboxSubjectWrapper, InboxMessageBodyWrapper, InboxMessageBodyWrapperSubject, InboxMessageTime, UnsubscribeWrapper, UnsubscribeText, CategoryLabelWrapper, UnsubscribeContainer };
