import axios from "axios";
import { basePath } from "./constants";
import { SortTask } from "../models";

export const sortTask = async (form: SortTask) => {
  const { data } = await axios.post(`${basePath}/tasks/sort`, {
    ...form,
  });
  return data;
};
