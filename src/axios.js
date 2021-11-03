/** @format */

import axios from "axios";
import backedURL from "./backendURL";

const instance = axios.create({
  baseURL: backedURL,
});

export default instance;
