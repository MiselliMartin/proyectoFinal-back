import { compare, hash } from "bcrypt";

const encrypt = async (password) => {
  const passwordHash = await hash(password, 10);
  return passwordHash;
};

const verified = async (password, hash) => {
  return await compare(password, hash);
};

export { encrypt, verified };
