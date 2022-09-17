import { signFailure, signStart, signSuccess } from "./features/userSlice";
import axios from "axios";
export const signup = async (dispatch, user) => {
  dispatch(signStart());
  const file = user.file;
  if (file) {
    const data = new FormData();
    const filename = Date.now() + file.name;
    data.append("name", filename);
    data.append("file", file);
    user.photo = filename;
    try {
      await axios.post("http://localhost:5000/api/upload", data);
    } catch (err) {}
  }
  try {
    await axios.post("http://localhost:5000/api/signup", user);
    window.location.replace("/");
    dispatch(signSuccess(user));
  } catch (err) {
    dispatch(signFailure());
  }
};
