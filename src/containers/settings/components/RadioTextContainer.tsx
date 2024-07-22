import { SettingTextContainer } from "..";
import { Icon } from "../../../components";
interface Props {
	text: string;
	btnName?: string;
	image: string;
	alt: string;
	id?: string;
}

const RadioTextContainer = (items: Props) => {
	return (
		<div className="d-flex align-items-center">
			<div className="mt-4">
				<Icon>
					<input type="radio" name="radio" id={items.alt} style={{ height: "16px", width: "16px" }} />
				</Icon>
			</div>

			<SettingTextContainer text={items.text} image={items.image} id={items.id} btnName={items.btnName} alt={items.alt} />
		</div>
	);
};

export default RadioTextContainer;
