import Joi from "joi";

function validateSendEmail(user: string) {
	const schema = Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: false } })
		.required()
		.messages({
			"string.email": "Enter a valid email",
			"string.empty": "Enter email address",
		});

	return schema.validate(user);
}

export { validateSendEmail };
