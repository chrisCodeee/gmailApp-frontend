import { MdArrowDropDown } from "react-icons/md";
import { BtnNext, Form, SignUpFormInput } from "../components";
import { FormEvent } from "react";
import { useAuthState } from "../../state-management";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "../SignUp";
import ErrorMessage from "./ErrorMessage";
import { validateCustomGender, validateDOB, validateGender, validateReferGender } from "./useValidateUser";

const Page2 = () => {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	const gender = ["Female", "Male", "Rather not say", "Custom"];

	const referGender = ["Female", "Male", "Other"];

	const { user, error, clearError, isMonth, isGender, inputState, genderState, referGenderState, isReferGender, indexNum, setIndex, setInput, setError, setGender, setReferGender, setIsMonth, setIsReferGender, setIsGender, setUser } = useAuthState();

	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const { error: DOBError } = validateDOB(user);
		const { error: genderError } = validateGender(user.gender);

		if (parseInt(user.year) > new Date().getFullYear()) {
			return navigate("/register/error");
		}

		if (user.gender === "Custom") {
			const { error: referGenderError } = validateReferGender(user.referGender);
			const { error: customGenderError } = validateCustomGender(user.customGender);

			if (referGenderError || customGenderError || DOBError) {
				setError("month", DOBError?.details[0].message);
				setError("referGender", referGenderError?.details[0].message);
				setError("customGender", customGenderError?.details[0].message);
				return;
			}
		}

		if (DOBError || genderError) {
			setError("month", DOBError?.details[0].message);
			setError("gender", genderError?.details[0].message);
			return;
		}

		navigate("/register/step_3");
	};

	return (
		<>
			<SignUp>
				<Form heading="Basic information" subHeading="Enter your birthday and gender" handleSubmit={handleSubmit}>
					<div className="d-flex">
						<div
							className="col signupinput"
							onClick={() => {
								setIsMonth(!isMonth);
								setInput(true);
								setIsGender(false);
								setGender(false);
								setIsReferGender(false);
								setReferGender(false);
							}}
							style={{ position: "relative", outline: error.month ? `1px solid rgb(179, 38, 30)` : inputState ? `2px solid rgb(11, 87, 208)` : "1px solid rgba(0, 0, 0, 0.5)" }}>
							<span className="dob">{user.month}</span>

							<label
								className={`label ${(inputState || user.month) && "labelState"}`}
								style={{ color: error.month && inputState ? `rgb(179, 38, 30)` : inputState ? "blue" : "inherit" }}
								onClick={() => {
									setIsMonth(true);
									setInput(true);
								}}>
								Month
							</label>

							<div style={{ position: "absolute", right: "10px", top: "14px" }}>
								<MdArrowDropDown size={25} />
							</div>

							{isMonth && (
								<ul className="m-0" style={{ position: "absolute", top: "103%", left: "0", right: "0", border: "1px solid rgba(0,0,0,0.6)", backgroundColor: "#fff", zIndex: "2", boxShadow: "0 2px 6px rgba(0,0,0,0.4)", fontSize: "1.6rem" }}>
									{months.map((month, index) => (
										<li
											key={month}
											style={{ padding: "0 0 0 1.5rem", backgroundColor: index === indexNum.monthIndex ? "rgb(11, 87, 208)" : "", color: index === indexNum.monthIndex ? "#fff" : "", marginTop: "-0.2rem" }}
											onMouseOver={() => setIndex("monthIndex", index)}
											onClick={() => {
												setUser("month", month);
												clearError("month");
											}}>
											{month}
										</li>
									))}
								</ul>
							)}
						</div>

						<div
							className="mx-4 col"
							onClick={() => {
								setIsMonth(false);
								setInput(false);
								setGender(false);
								setIsGender(false);
								setIsReferGender(false);
								setReferGender(false);
							}}>
							<SignUpFormInput name="day" labelName="Day" value={user.day} error={error.month} />
						</div>
						<div
							className="col"
							onClick={() => {
								setIsMonth(false);
								setInput(false);
								setGender(false);
								setIsGender(false);
								setIsReferGender(false);
								setReferGender(false);
							}}>
							<SignUpFormInput name="year" labelName="Year" value={user.year} error={error.month} />
						</div>
					</div>

					{error.month && <ErrorMessage errorMessage={error.month} />}

					<div
						className="signupinput"
						onClick={() => {
							setIsGender(!isGender);
							setGender(true);
							setIsMonth(false);
							setInput(false);
							setIsReferGender(false);
							setReferGender(false);
						}}
						style={{ position: "relative", outline: error.gender ? `1px solid rgb(179, 38, 30)` : genderState ? "2px solid rgb(11, 87, 208)" : "1px solid rgba(0, 0, 0, 0.5)", height: "55px", marginTop: "2rem" }}>
						<span className="dob">{user.gender}</span>

						<label
							className={`label ${(genderState || user.gender) && "labelState"}`}
							style={{ color: error.gender && genderState ? `rgb(179, 38, 30)` : genderState ? "blue" : "inherit" }}
							onClick={() => {
								setIsGender(true);
								setGender(true);
							}}>
							Gender
						</label>

						<div style={{ position: "absolute", right: "10px", top: "14px" }}>
							<MdArrowDropDown size={25} />
						</div>

						{isGender && (
							<ul className="m-0" style={{ position: "absolute", top: "103%", left: "0", right: "0", border: "1px solid rgba(0,0,0,0.6)", backgroundColor: "#fff", zIndex: "2", boxShadow: "0 2px 6px rgba(0,0,0,0.4)", fontSize: "1.6rem" }}>
								{gender.map((gender, index) => (
									<li
										key={gender}
										style={{ padding: "0 0 0 1.5rem", backgroundColor: index === indexNum.genderIndex ? "rgb(11, 87, 208)" : "", color: index === indexNum.genderIndex ? "#fff" : "", marginTop: "-0.2rem" }}
										onMouseOver={() => setIndex("genderIndex", index)}
										onClick={() => {
											setUser("gender", gender);
											clearError("gender");
										}}>
										{gender}
									</li>
								))}
							</ul>
						)}
					</div>

					{error.gender && <ErrorMessage errorMessage={error.gender} />}

					{user.gender === "Custom" && (
						<>
							<div
								className="col"
								onClick={() => {
									setIsMonth(false);
									setInput(false);
									setGender(false);
									setIsGender(false);
									setIsReferGender(false);
									setReferGender(false);
								}}
								style={{ marginTop: "2rem" }}>
								<SignUpFormInput name="customGender" labelName="What's your gender?" value={user.customGender} error={error.customGender} />
							</div>

							{error.customGender && <ErrorMessage errorMessage={error.customGender} />}

							<div
								className="signupinput"
								onClick={() => {
									setIsReferGender(!isReferGender);
									setReferGender(true);
									setIsMonth(false);
									setIsGender(false);
									setInput(false);
									setGender(false);
								}}
								style={{ position: "relative", outline: error.referGender ? `1px solid rgb(179, 38, 30)` : referGenderState ? "2px solid rgb(11, 87, 208)" : "1px solid rgba(0, 0, 0, 0.5)", height: "55px", marginTop: "2rem" }}>
								<span className="dob">{user.referGender}</span>

								<label
									className={`label ${(referGenderState || user.referGender) && "labelState"}`}
									style={{ color: error.referGender && referGenderState ? `rgb(179, 38, 30)` : referGenderState ? "blue" : "inherit" }}
									onClick={() => {
										setIsReferGender(true);
										setReferGender(true);
									}}>
									Please refer to me as
								</label>

								<div style={{ position: "absolute", right: "10px", top: "14px" }}>
									<MdArrowDropDown size={25} />
								</div>

								{isReferGender && (
									<ul className="m-0" style={{ position: "absolute", top: "103%", left: "0", right: "0", border: "1px solid rgba(0,0,0,0.6)", backgroundColor: "#fff", zIndex: "2", boxShadow: "0 2px 6px rgba(0,0,0,0.4)", fontSize: "1.6rem" }}>
										{referGender.map((gender, index) => (
											<li
												key={gender}
												style={{ padding: "0 0 0 1.5rem", backgroundColor: index === indexNum.referGender ? "rgb(11, 87, 208)" : "", color: index === indexNum.referGender ? "#fff" : "", marginTop: "-0.2rem" }}
												onMouseOver={() => setIndex("referGender", index)}
												onClick={() => {
													setUser("referGender", gender);
													clearError("referGender");
												}}>
												{gender}
											</li>
										))}
									</ul>
								)}
							</div>

							{error.referGender && <ErrorMessage errorMessage={error.referGender} />}
						</>
					)}

					<div style={{ marginTop: user.gender === "Custom" ? "2rem" : "1rem" }} onClick={() => setIsMonth(false)}>
						<Link className="whyGenderLink" to="https://support.google.com/accounts/answer/1733224" target="_blank" style={{ color: "rgb(11, 87, 208)", fontWeight: "500" }}>
							Why we ask for birthday and gender
						</Link>
					</div>

					{/* <div
						className="bg-info"
						onClick={() => {
							setIsMonth(false);
							navigate("/register/step_3");
						}}> */}
					<BtnNext />
					{/* </div> */}
				</Form>
			</SignUp>
		</>
	);
};

export default Page2;
