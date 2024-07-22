import styled from "styled-components";

const flex = `
display: flex;
align-items: center;
`;

const SelectContactWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(255, 255, 255, 0.5);
	z-index: 900000000;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const SelectContactContainer = styled.div`
	width: 650px;
	height: 600px;
	background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.4);
`;

const SelectContactHeader = styled.div`
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);

	& .header {
		padding: 1.2rem 2rem;
	}

	& .section1 {
		${flex};
		justify-content: space-between;
		margin: 0 0 2rem 0;
	}

	& .section2 {
		${flex};
		justify-content: space-between;
		padding: 0 1.5rem 0 0;

		& .manageLabel {
			color: rgba(68, 68, 68, 0.5);
			font-size: 1.5rem;
			font-weight: 500;
		}

		& .selectAll {
			${flex};

			& input {
				height: 18px;
				width: 18px;
			}

			& label {
				margin: 0 0 0 1.5rem;
				color: rgb(95, 99, 104);
			}
		}

		& .selectContact {
			position: relative;
			${flex};
			justify-content: space-between;
			background-color: #fff;
			box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px, rgba(0, 0, 0, 0.2) 0px 1px 5px 0px;
			padding: 0.5rem 0 0.5rem 1.5rem;
			border-radius: 4px;
			cursor: pointer;
			width: 160px;

			& span {
				font-weight: 500;
			}

			& .dropdownIcon {
				display: flex;
			}
		}
	}
`;

const ContactIconContainer = styled.div`
	${flex};
`;

const IconContainer = styled.div`
	width: 20px;
	height: 20px;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const IconText = styled.div`
	margin: 0 0 0 0.9rem;
	font-weight: 500;
	font-size: 1.6rem;
`;

const SearchButton = styled.button`
	${flex};
	flex-grow: 1;
	position: relative;
	margin: 0 0 0 2rem;

	& input {
		border-radius: 4px;
		background-color: rgba(0, 0, 0, 0.04);
		width: 100%;
		font-size: 1.6rem;
		height: 100%;
		padding: 1.3rem 1.5rem 1.3rem 5.2rem;

		&:focus {
			background-color: #fff;
			border-top-left-radius: 4px;
			border-top-right-radius: 4px;
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
		}
	}
`;

const SearchIcon = styled.div`
	${flex};
	position: absolute;
	left: 20px;
`;

const ContactDisplayContainer = styled.div`
	overflow-y: auto;
	height: 460px;

	&::-webkit-scrollbar {
		width: 12px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #888;
	}

	&::-webkit-scrollbar-track-piece {
		background-color: #cccccc54;
	}

	& .myContact {
		padding: 2rem 1.5rem 0 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		& span {
			text-transform: uppercase;
			font-size: 1.2rem;
		}

		& .deleteIcon {
			cursor: pointer;
		}
	}

	& .noData {
		${flex};
		justify-content: center;
		flex-direction: column;
		margin: 2rem 0 0 0;

		& img {
			height: 122px;
		}

		& .noDataText {
			margin: 2.5rem 0 0 0;
			text-align: center;

			& .nothing {
				font-weight: 500;
				margin: 0 0 1rem 0;
				font-size: 1.6rem;
			}

			& .noContact {
				color: rgb(95, 99, 104);
				font-size: 1.5rem;
			}
		}
	}
`;

const SelectContactDropDownContainer = styled.div<{ $contactType: string }>`
	position: absolute;
	top: ${(props) => props.$contactType === "false" && "0"};
	bottom: ${(props) => props.$contactType === "true" && "-25px"};
	left: 0;
	right: 0;
	background-color: #fff;
	box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.2);
	font-weight: 500;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;

	& .myContactSelect {
		padding: 0.5rem 0 0.5rem 1.5rem;
		transition: all 0.2s;

		&:hover {
			background-color: rgba(0, 0, 0, 0.09);
		}
	}
`;

const AllContactListWrapper = styled.div`
	margin: 2.4rem 0 0 0;
	padding: 0 1.5rem 0 0;

	& .container {
		display: flex;
		align-items: center;
		padding: 0 0 0 1.5rem;
		transition: all 0.2s;

		&:focus {
			// background-color: red;

			& .iconUser {
				display: none;
			}
		}

		& input:checked {
			display: block;
			margin: 0 0rem 0 1.5rem;
		}

		&:hover {
			background-color: rgba(0, 0, 0, 0.06);

			& input {
				display: block;
				margin: 0 0rem 0 1.5rem;
			}

			& .iconUser {
				display: none;
			}

			& .emailFirst {
				margin: 0 0rem 0 2.5rem;
			}
		}
	}

	& .user {
		flex-wrap: wrap;
		display: flex;
		align-items: center;

		& .emailFirst {
			padding: 2.5rem 0;
			margin: 0 0rem 0 1rem;
			color: rgba(0, 0, 0, 0.7);
			font-size: 1.8rem;
		}

		& input {
			display: none;
		}

		// & .iconUser {
		// 	display: block;
		// }
	}

	& .emailSecond {
		font-size: 1.6rem;
		color: rgba(0, 0, 0, 0.5);
		align-self: stretch;
		display: flex;
		align-items: center;
	}
`;

export { SelectContactWrapper, SelectContactContainer, SelectContactHeader, ContactIconContainer, IconContainer, IconText, SearchButton, SearchIcon, ContactDisplayContainer, SelectContactDropDownContainer, AllContactListWrapper };
