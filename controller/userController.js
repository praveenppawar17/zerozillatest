import { signupUserService, userLoginService } from "../service/userService.js";

export const signupUserController = async (request, response) => {
  try {
    const userResponse = await signupUserService(request.body);
    if (userResponse.isUserExists) {
      return response
        .status(409)
        .json({ message: `${userResponse.email} already exists` });
    }
    return response
      .status(201)
      .json({ message: "signup successfull", userResponse });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Error while signup the user" });
  }
};

export const loginUserController = async (request, response) => {
  try {
    let user = await userLoginService(request.body);
    if (!user) {
      return response
        .status(400)
        .json({ message: `Email ${request.body.email} not registered` });
    }else if(user.match === false){
      return response.status(401).json({message: "Password does not match"})
    }
    return response.status(200).json(user);
  } catch (error) {
    return response.status(500).json({ message: "Error while login in user" });
  }
};
