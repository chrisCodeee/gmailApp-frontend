import { BtnBlue } from "../../../components";

interface Props {
	text: string;
	btnName?: string;
	image: string;
	alt: string;
	id?: string;
}
const SettingTextContainer = (items: Props) => {
	return (
		<>
			<div className="d-flex justify-content-between mt-4 flex-grow-1">
				<div>
					<label htmlFor={items.id} style={{ paddingLeft: "1.2rem", display: "block" }}>
						{items.text}
					</label>
					<BtnBlue btnName={items.btnName} />
				</div>
				<div>
					<img src={items.image} alt={items.alt} />
				</div>
			</div>
		</>
	);
};

export default SettingTextContainer;
