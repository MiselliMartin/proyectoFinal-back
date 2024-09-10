import Joi from "joi";

export const userLoginSchema = Joi.object({
  body: Joi.object({
    email: Joi.string().email().required().messages({
      "string.email": "email debe ser un correo válido",
      "any.required": "email es requerido",
    }),
    password: Joi.string().min(6).required().messages({
      "any.required": "password es requerido",
      "string.min": "password debe tener mínimo 6 caracteres",
    }),
  }),
});

export const userRegisterSchema = Joi.object({
  body: Joi.object({
    username: Joi.string().min(3).required().messages({
      "string.min": "username debe tener mínimo 3 caracteres",
      "any.required": "username es requerido",
    }),
    email: Joi.string().email().required().messages({
      "string.email": "email debe ser un correo válido",
      "any.required": "email es requerido",
    }),
    password: Joi.string().min(6).required().messages({
      "any.required": "password es requerido",
      "string.min": "password debe tener mínimo 6 caracteres",
    }),
    age: Joi.number().integer().min(18).optional().messages({
      "number.base": "age debe ser un número",
      //Sorry saqué el mínimo de 18
    }),
  }),
});

export const userUpdateSchema = Joi.object({
  body: Joi.object({
    username: Joi.string().min(3).optional().messages({
      "string.min": "username debe tener mínimo 3 caracteres",
    }),
    email: Joi.string().email().optional().messages({
      "string.email": "email debe ser un correo válido",
    }),
    password: Joi.string().min(6).optional().messages({
      "string.min": "password debe tener mínimo 6 caracteres",
    }),
    age: Joi.number().integer().min(18).optional().messages({
      "number.base": "age debe ser un número",
    }),
  }),
});

// export const userRegisterSchema = Joi.object({
//   body: Joi.object({
//     username: Joi.string().max(30).required().messages({
//       'string.max': 'username debe tener un máximo de 30 caracteres',
//       'any.required': 'username es requerido',
//     }),
//     email: Joi.string().email().required().messages({
//       'string.email': 'email debe ser un correo válido',
//       'any.required': 'email es requerido',
//     }),
//     name: Joi.string().required().messages({
//       'any.required': 'name es requerido',
//     }),
//     lastname: Joi.string().required().messages({
//       'any.required': 'lastname es requerido',
//     }),
//     password: Joi.string().min(6).required().messages({
//       'any.required': 'password es requerido',
//       'string.min': 'password debe tener mínimo 6 caracteres'
//     })
//   })
// });

// export const updateUserSchema = Joi.object({
//   body: Joi.object({
//     username: Joi.string().max(30).messages({
//       'string.max': 'username debe tener un máximo de 30 caracteres',
//     }),
//     email: Joi.string().email().messages({
//       'string.email': 'email debe ser un correo válido',
//     }),
//     name: Joi.string().messages({
//     }),
//     lastname: Joi.string().messages({
//     }),
//     password: Joi.string().min(6).messages({
//       'string.min': 'password debe tener mínimo 6 caractéres'
//     })
//   })
// })
