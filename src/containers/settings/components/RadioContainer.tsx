import { Icon } from "../../../components";

interface Props {
	text: string;
	image: string;
	alt: string;
}
const RadioContainer = (items: Props) => {
	return (
		<>
			<div className="d-flex justify-content-between align-items-center mt-3">
				<div className="d-flex align-items-center">
					<Icon>
						<input type="radio" name="radio" id={items.alt} style={{ height: "16px", width: "16px" }} />
					</Icon>

					<label htmlFor={items.alt} className="ms-2">
						{items.text}
					</label>
				</div>

				<div>
					<img src={items.image} alt={items.alt} />
				</div>
			</div>
		</>
	);
};

export default RadioContainer;
