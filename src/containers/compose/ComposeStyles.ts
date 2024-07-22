import styled from "styled-components";

const ComposeContainer = styled.div<{ maximizestate: boolean }>`
	height: ${(props) => props.maximizestate && "100vh"};
	width: ${(props) => props.maximizestate && "100vw"};
	background-color: ${(props) => props.maximizestate && "rgba(0,0,0,.5)"};
	position: ${(props) => props.maximizestate && "absolute"};
	top: ${(props) => props.maximizestate && "0"};
	left: ${(props) => props.maximizestate && "0"};
	right: ${(props) => props.maximizestate && "0"};
	z-index: ${(props) => props.maximizestate && "100000"};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ComposeMessageWrapper = styled.div<{ maximizestate: boolean }>`
	overflow-y: hidden;
	width: ${(props) => (props.maximizestate ? "80%" : "55rem")};
	height: ${(props) => (props.maximizestate ? "89vh" : "50rem")};
	box-shadow: ${(props) => !props.maximizestate && "0 0 4px rgb(180, 182, 187)"};
	position: ${(props) => !props.maximizestate && "fixed"};
	bottom: ${(props) => !props.maximizestate && "0"};
	right: ${(props) => !props.maximizestate && "80px"};
	border-radius: 8px;
	z-index: 100;
	background-color: #fff;
`;

const ResizeIcon = styled.div`
	cursor: pointer;
	display: flex;
	border-radius: 2px;

	&:hover {
		background-color: rgba(180, 182, 187, 0.2);
	}
`;

const NewMessageContainer = styled.div<{ confidenialModeState: string }>`
	font-weight: 500;
	cursor: pointer;
	background-color: ${(props) => (props.confidenialModeState === "true" ? "rgb(1, 87, 155) " : "rgba(26, 115, 232, 0.05)")};
	display: flex;
	justify-content: space-between;
	padding: 1rem 1rem 1rem 1.5rem;
	color: ${(props) => (props.confidenialModeState === "true" ? "#fff" : "inherit")};
`;

const ResizeIconWrapper = styled.div`
	display: flex;
	align-items: center;
	aign-self: stretch;
`;

const ComposeForm = styled.form`
	padding: 0 1rem 1rem 1.5rem;

	& a:hover {
		textstyle-decoration: underline;
	}
`;

const ComposeFormInputContainer = styled.div`
	border-bottom: 1px solid rgba(180, 182, 187, 0.3);
	padding: 0.7rem 0;

	& a:hover {
		text-decoration: underline;
	}
`;

type textAreaStyle = {
	fontFamilySelect: string;
	fontSizeSelect: string;
	boldSelect: boolean;
	italicSelect: boolean;
	underlineSelect: boolean;
	colorSelect: string;
	align: string;
	listStyleList: boolean;
	listStyleBullet: boolean;
	strikeThrough: boolean;
	indentTextValue: number;
	listType: string;
};

const ComposeMessageTextArea = styled.div<{ textstyle: textAreaStyle }>`
	border: 0;
	outline: 0;
	border-bottom: 1px solid rgba(180, 182, 187, 0.3);
	width: 100%;
	font-family: ${({ textstyle }) => (textstyle.fontFamilySelect ? textstyle.fontFamilySelect : "inherit")};
	font-size: ${({ textstyle }) => (textstyle.fontSizeSelect ? textstyle.fontSizeSelect : "inherit")};
	height: 100%;
	font-weight: ${({ textstyle }) => textstyle.boldSelect && "bold"};
	font-style: ${({ textstyle }) => textstyle.italicSelect && "italic"};
	text-decoration: ${({ textstyle }) => textstyle.underlineSelect && "underline"};
	color: ${({ textstyle }) => (textstyle.colorSelect ? textstyle.colorSelect : "inherit")};
	text-align: ${({ textstyle }) => (textstyle.align ? textstyle.align : "left")};
	list-style: ${({ textstyle }) => (textstyle.listStyleList || textstyle.listStyleBullet ? textstyle.listType : "none")};
	text-indent: ${({ textstyle }) => `${textstyle.indentTextValue}px`};

	padding-top: ${({ textstyle }) => (textstyle.listStyleList || textstyle.listStyleBullet ? "20px" : "0")};
	text-decoration: ${({ textstyle }) => (textstyle.strikeThrough ? "line-through" : "")};

	& a {
		text-decoration: underline;
		color: ${({ textstyle }) => (textstyle.colorSelect ? textstyle.colorSelect : " rgb(17, 85, 204)")};
		// display: inline-block;
		cursor: pointer;
	}
`;

const UrlTextContainer = styled.div`
	box-shadow: 0px 0 2px rgba(0, 0, 0, 0.7);
	position: absolute;
	top: 110%;
	left: 0;
	background-color: #fff;
	display: flex;
	align-items: center;
	padding: 0.5rem;

	& span,
	& a {
		padding: 0 0.6rem;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}
`;
const ComposeMessageFooter = styled.div`
	padding: 0 1rem 0 1.5rem;
	margin: 0.5rem 0 0 0;
	display: flex;
	align-items: center;
	position: relative;
	bottom: 3px;
`;

const BtnSend = styled.button`
	border-radius: 30px;
	background-color: rgb(11, 87, 208);
	color: #fff;
	font-weight: 500;
	display: flex;
	align-items: center;

	&:hover {
		opacity: 0.9;
		box-shadow: 0 1px 2px rgba(0, 0, 255, 0.678);
	}
`;

const Divider = styled.div`
	width: 0.7px;
	background-color: rgba(0, 0, 0, 0.5);
	align-self: stretch;
`;

const BtnName = styled.div<{ confidentialMode: string }>`
	padding: ${(props) => (props.confidentialMode === "true" ? "6px 15px" : "7px 17px 7px 13px")};
`;

const FormatIconWrapper = styled.div`
	display: flex;
	margin: 0 0 0 0.6rem;
`;

const FormatIconContainer = styled.button<{ margin: string; padding: string }>`
	padding: ${(props) => props.padding};
	margin: ${(props) => props.margin};
	border-radius: 3px;
	cursor: pointer;
	display: flex;
	transition: all 0.3s;
	color: rgba(32, 33, 36, 0.7);

	&:hover {
		background-color: rgba(180, 182, 187, 0.3);
	}
`;

const ComposeMessageHeadingWrapper = styled.div<{ $confidentialModeState: string }>`
	position: fixed;
	cursor: pointer;
	bottom: 0;
	right: 65px;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	z-index: 200;
	width: 260px;
	font-weight: 500;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	background-color: ${(props) => (props.$confidentialModeState === "true" ? "rgb(1, 87, 155) " : "rgb(242, 246, 252)")};
	color: ${(props) => (props.$confidentialModeState === "true" ? "#fff " : "inherit")};
	display: flex;
	justify-content: space-between;
	padding: 1rem 1rem 1rem 1.5rem;
`;

export { ComposeContainer, ComposeMessageWrapper, NewMessageContainer, ResizeIconWrapper, ComposeForm, ComposeFormInputContainer, ComposeMessageTextArea, ComposeMessageFooter, BtnSend, Divider, BtnName, FormatIconContainer, FormatIconWrapper, ResizeIcon, ComposeMessageHeadingWrapper, UrlTextContainer };
