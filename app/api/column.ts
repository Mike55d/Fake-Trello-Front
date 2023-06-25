import axios from "axios";
import { basePath } from "./constants";
import { ColumnForm } from "../models";

export const getData = async () => {
  const { data } = await axios.get(`${basePath}/columns`);
  return data;
};
