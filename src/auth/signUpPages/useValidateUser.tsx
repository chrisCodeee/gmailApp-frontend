import Joi from "joi";

// const useValidateUser = () => {
// 	const navigate = useNavigate();
// 	const { user, setError, clearError } = useAuthState();

// 	const validateFirstname = () => {
// 		if (!user.firstName) {
// 			setError("firstName", "Enter first name");
// 		} else if (user.firstName.length < 3) {
// 			setError("firstName", "Are you sure you entered your name correctly?");
// 		} else {
// 			navigate("/register/step_2");
// 		}
// 	};

// 	const validateDOB = () => {
// 		const day = parseInt(user.day);
// 		const year = parseInt(user.year);
// 		const validate = !user.month || !user.day || !user.year || Number.isNaN(Number(user.day)) || Number.isNaN(Number(user.year)) || day <= 0 || day > 31 || year < 1000 || year > new Date().getFullYear();
// 		if (validate && !user.gender) {
// 			setError("month", "Please enter a valid date");
// 			setError("gender", "Please select a gender");
// 		} else if (user.gender && validate) {
// 			setError("month", "Please enter a valid date");
// 			clearError("gender");
// 		} else if (!validate && !user.gender) {
// 			setError("gender", "Please select a gender");
// 			clearError("month");
// 		} else if (!validate && !user.gender) {
// 			setError("gender", "Please select a gender");
// 			clearError("month");
// 		} else {
// 			navigate("/register/step_3");
// 		}
// 	};

// 	// const validateGender = () => {
// 	// 	if (!user.gender) {
// 	// 		setError("gender", "Please select a gender");
// 	// 	} else {
// 	// 		navigate("/register/step_3");
// 	// 	}
// 	// };

// 	// return { validate };
// };

function validateName(user: string) {
	const schema = Joi.string().min(3).max(255).required().messages({
		"string.empty": "Enter first name",
		"string.min": "Are you sure you entered your name correctly?",
		"string.max": "Name is too long",
	});

	return schema.validate(user);
}

function validateDOB(user: any) {
	const schema = Joi.object({
		month: Joi.string().required().messages({
			"string.empty": "Please enter a valid date",
		}),
		day: Joi.number().integer().min(1).max(31).required().messages({
			"number.base": "Please enter a valid date",
			"number.min": "Please enter a valid date",
			"number.max": "Please enter a valid date",
		}),
		year: Joi.number().min(1895).max(new Date().getFullYear()).required().messages({
			"number.base": "Please enter a valid date",
			"number.min": "Please enter a valid date",
			"number.max": "Please enter a valid date",
		}),
	});

	// customGender: Joi.string().required(),
	// referGender: Joi.string().required(),
	// username: Joi.string().required(),
	// password: Joi.string().required(),
	// confirmPassword: Joi.string().required(),
	// phoneNumber: Joi.number().required(),
	// verificationCode: Joi.number().required(),
	// recoveryEmailAddress: Joi.string(),

	return schema.validate({ month: user.month, day: user.day, year: user.year });
}

function validateGender(user: string) {
	const schema = Joi.string().required().messages({
		"string.empty": "Please select a gender",
	});

	return schema.validate(user);
}

function validateReferGender(user: string) {
	const schema = Joi.string().required().messages({
		"string.empty": "Please select a pronoun",
	});

	return schema.validate(user);
}

function validateCustomGender(user: string) {
	const schema = Joi.string().required().messages({
		"string.empty": "Please indicate the gender you most identify with",
	});

	return schema.validate(user);
}

function validateUsername(user: string) {
	const schema = Joi.string().min(6).max(30).required().pattern(new RegExp("^[a-zA-Z0-9]{6,30}$")).messages({
		"string.empty": "Enter a Gmail Address",
		"string.min": "Sorry, your username must be between 6 and 30 characters long",
		"string.max": "Sorry, your username must be between 6 and 30 characters long",
		"string.pattern.base": "Sorry, only letters (a-z), numbers (0-9), and periods (.) are allowed.",
	});

	return schema.validate(user);
}

function validatePassword(user: string) {
	const schema = Joi.string()
		.min(8)
		.max(100)
		.required()
		.pattern(/[!@#$%^&*(),.?":{}|<>`\-=_+[\]\\/;']/)
		.messages({
			"string.empty": "Enter a password",
			"string.min": "Use 8 characters or more for your password",
			"string.max": "Use 100 characters or few for your password",
			"string.pattern.base": "Please choose a stronger password, Try a mix of letters, numbers, and symbols",
		});

	return schema.validate(user);
}

function validatePhoneNumber(user: string) {
	const schema = Joi.number().required().messages({
		"number.base": "This phone number format isn't recognized. Please check the country and number.",
	});

	return schema.validate(user);
}

function validateRecoveryEmail(user: string) {
	const schema = Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: false } })
		.required()
		.messages({
			"string.email": "Email address must be a valid email",
			"string.empty": "Enter recovery email address.",
		});

	return schema.validate(user);
}

function validateSigninEmail(user: string) {
	const schema = Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: false } })
		.required()
		.messages({
			"string.email": "Enter a valid email",
			"string.empty": "Enter email address",
		});

	return schema.validate(user);
}

export { validateName, validateDOB, validateGender, validateReferGender, validateCustomGender, validateUsername, validatePassword, validatePhoneNumber, validateRecoveryEmail, validateSigninEmail };
