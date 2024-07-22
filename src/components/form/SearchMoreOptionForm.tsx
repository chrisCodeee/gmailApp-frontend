import { BtnPrimary, BtnSecondary } from "..";
import { FlexContainer, FormWrapper, SearchBtnContainer, SearchMoreFormContainer } from "./FormStyles";
import InputCheckbox from "./InputCheckbox";
import { dataSize, dateWithin, formDetails, inputCheckbox, search, size } from "./useForm";

const SearchMoreOptionForm = () => {
	return (
		<>
			<SearchMoreFormContainer>
				{formDetails.map((items, index) => (
					<FormWrapper>
						<label className="col-2" htmlFor={items.name}>
							{items.label}
						</label>
						<input className="col-10" type={items.type} name={items.name} id={items.name} autoFocus={index === 0} />
					</FormWrapper>
				))}

				<FormWrapper>
					<label className="col-2">Size</label>
					<div className="col d-flex">
						<select className="col">
							{size.map((value) => (
								<option value={value}>{value}</option>
							))}
						</select>

						<input type="text" className="col-3 mx-4" />

						<select className="col-2">
							{dataSize.map((value) => (
								<option value={value}>{value}</option>
							))}
						</select>
					</div>
				</FormWrapper>

				<FormWrapper>
					<label className="col-2">Date within</label>
					<div className="col d-flex">
						<select className="col me-5">
							{dateWithin.map(({ name, value }) => (
								<option value={value}>{name}</option>
							))}
						</select>

						<div className="col-5 d-flex justify-content-between">
							<input type="date" className="flex-grow-1" />
						</div>
					</div>
				</FormWrapper>
				<FormWrapper>
					<label className="col-2">Search </label>

					<select className="col-10">
						{search.map((items) => (
							<option key={items.name} value={items.value}>
								{items.name}
							</option>
						))}
					</select>
				</FormWrapper>

				<FormWrapper className="mt-5">
					{inputCheckbox.map(({ name, id }, index) => (
						<FlexContainer className={index === 0 ? "me-5" : ""}>
							<InputCheckbox id={id} name={name} />
						</FlexContainer>
					))}
				</FormWrapper>

				<SearchBtnContainer>
					<BtnSecondary name="Create Filter" />
					<BtnPrimary name="Search" title="Search Mail" />
				</SearchBtnContainer>
			</SearchMoreFormContainer>
		</>
	);
};

export default SearchMoreOptionForm;
