import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";
import { IDecodedToken } from "../types/globalTypes";

const cookies = new Cookies();

export function decodeToken(): IDecodedToken | unknown {
  const userToken = cookies.get("token");
  try {
    if (!userToken) {
      console.log("User is Not login");
    }
    const decodedToken = jwtDecode(userToken);
    return decodedToken;
  } catch (error) {
    // Handle any errors that may occur during decoding (e.g., invalid token format)
    console.error("Error decoding token:", error);
    return null;
  }
}
