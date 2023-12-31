import axios from "axios";
import { basePath } from "./constants";
import { ChangeColumn, CreateTask, SortTask } from "../models";

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

export const createTask = async (form: CreateTask) => {
  const { data } = await axios.post(`${basePath}/tasks`, {
    ...form,
  });
  return data;
};

export const deleteTask = async (id: number) => {
  const { data } = await axios.delete(`${basePath}/tasks/${id}`);
  return data;
};
