import { query } from "express";

export const schemaValidator = (schema) => async (request, response, next) => {
  const { error } = schema.validate(
    {
      body: request.body,
      params: request.params,
      query: request.query,
    },
    {
      abortEarly: false,
      allowUnknown: true,
    }
  );

  error ? next(error) : next();
};
