import bcrypt from "bcrypt";
import { loginUserDao, signupUserDao } from "../dao/userDao.js";
import { accessToken } from "../utils/token.js";

export const signupUserService = async (userDetails) => {
  try {
    const hashedPassword = await bcrypt.hash(userDetails.password, 10);

    const user = {
      email: userDetails.email,
      name: userDetails.name,
      password: hashedPassword,
    };
    const userResponse = await signupUserDao(user);
    return userResponse;
  } catch (error) {
    return error;
  }
};

export const userLoginService = async (userDetails) => {
  try {
    const userLoginResponse = await loginUserDao(userDetails);
    if(!userLoginResponse){
      return false
    }
    if (userLoginResponse.match === false) {
      return {
        ...userLoginResponse
      }
    }
    let userTokenDetails = {
      email: userLoginResponse.email,
      userId: userLoginResponse._id,
    };
    return {
      name: userLoginResponse.name,
      userId: userLoginResponse._id,
      accessToken: await accessToken(userTokenDetails),
    };
  } catch (error) {
    return error;
  }
};
