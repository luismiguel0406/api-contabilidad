import bcrypt from "bcrypt";

export const Encrypt = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const validPassword = async (passwordIn: string, passwordDB: string) => {
  return await bcrypt.compare(passwordIn, passwordDB);
};
