import Joi from "joi";
import { VerificationData } from "../types";

export default (data: VerificationData) => {
  const schema = Joi.object({
    full_name: Joi.string()
      .required()
      .error(new Error("full name is required")),
    postal: Joi.string().allow("").optional(),
    holder_id: Joi.string().allow("").optional(),
    email: Joi.string()
      .email()
      .optional()
      .error(new Error("valid email is required")),
    sin_or_tin: Joi.string().allow("").optional(),
  });

  const result = schema.validate(data);
  if (result.error) {
    return result.error.message;
  } else {
    return null;
  }
};
