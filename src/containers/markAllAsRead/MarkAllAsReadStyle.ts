import styled from "styled-components";

const MarkAllAsReadWrapper = styled.div`
	position: absolute;
	top: 103px;
	left: 370px;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 0 8px rgb(180, 182, 187);
	z-index: 200;

	padding: 0.5rem 0;
`;

const AllReadContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 0 0 0.7rem 0;
	padding: 0.5rem 0 0.5rem 1.7rem;
	cursor: pointer;

	&:hover {
		background-color: rgba(180, 182, 187, 0.3);
	}
`;

const Note = styled.div`
	border-top: 1px solid rgba(180, 182, 187, 0.3);
	padding: 1rem 2rem;
	font-style: italic;

	& span {
		display: block;
		width: 78%;
		margin: auto;
	}
`;

export { MarkAllAsReadWrapper, AllReadContainer, Note };
