"use server";

import { comparePassword, hashPassword } from "@/helper/helper";
import userModel from "@/models/user.model";
import { dbConnect } from "@/services/mongo";
import { cookies } from "next/headers";

// user registration
export async function createUser(data) {
  await dbConnect();
  try {
    const { firstName, lastName, email, password } = data;

    if (!firstName) throw new Error("First name is required");
    if (!lastName) throw new Error("Last name is required");
    if (!email) throw new Error("Email is required");
    if (!password) throw new Error("Password is required");

    // check if user already exists
    const isExist = await userModel.findOne({ email }).lean();

    if (isExist) throw new Error("Email already exists");

    // hash password
    data.password = hashPassword(password);

    const result = await userModel.create(data);

    return {
      firstName: result.firstName,
      lastName: result.lastName,
      email: result.email,
      id: result._id.toString(),
    };
  } catch (error) {
    throw new Error(error.message);
  }
}
// user login
export async function userLogin(data) {
  await dbConnect();
  try {
    const { email, password } = data;

    if (!email) throw new Error("Email is required");
    if (!password) throw new Error("Password is required");

    const result = await userModel.findOne({ email }).lean();

    if (!result) {
      throw new Error("User not found.Please register.");
    }

    const { _id, __v, ...user } = result;
    user.id = _id.toString();

    // match password
    const isMatch = comparePassword(password, user.password);

    if (!isMatch) throw new Error("Wrong password");

    // Cookies set here
    const cookieStore = await cookies();

    cookieStore.set(
      "user",
      JSON.stringify({
        id: user.id,
        email: user.email,
      }),
      {
        maxAge: 30 * 24 * 60 * 60,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      }
    );

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

// user logout
export async function userLogout() {
  const cookieStore = await cookies();
  cookieStore.delete("user");
}
