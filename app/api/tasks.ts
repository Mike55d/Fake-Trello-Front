import axios from "axios";
import { basePath } from "./constants";
import { ChangeColumn, SortTask } from "../models";

export const sortTask = async (form: SortTask) => {
  const { data } = await axios.post(`${basePath}/tasks/sort`, {
    ...form,
  });
  return data;
};

export const changeColumn = async (form: ChangeColumn) => {
  const { data } = await axios.post(`${basePath}/tasks/changeColumn`, {
    ...form,
  });
  return data;
};
