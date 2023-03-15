import { hash, compare } from "bcryptjs";

export async function hashPassword(password) {
  const hasedPassword = hash(password, 12);

  return hasedPassword;
}

export async function checkPassword(password, hasedPassword) {
  const res = compare(password, hasedPassword);
  return res;
}
