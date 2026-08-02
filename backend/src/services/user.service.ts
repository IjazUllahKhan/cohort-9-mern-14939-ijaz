import { findByEmail, createUser } from "../repositories/user.repository";
import { AppError } from "../utils/error";
import logger from "../utils/logger";
import { RegisterUserInput } from "../validators/user.validator";
import bcrypt from "bcrypt";

export const registerUser = async (input: RegisterUserInput) => {
  const existingUser = await findByEmail(input.email);

  if (existingUser) {
    throw new AppError(409, "User with this email already exists");
  }

  const hashedPassword = await bcrypt.hash(input.password, 10);
  const newUser = await createUser({
    email: input.email,
    passwordHash: hashedPassword,
    username: input.username,
  });

  logger.info(`New user registered: ${newUser.id} - ${newUser.email}`);

  const { passwordHash, ...userWithoutPassword } = newUser;

  return userWithoutPassword;
};
