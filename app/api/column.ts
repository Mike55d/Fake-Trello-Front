import axios from "axios";
import { basePath } from "./constants";
import { ColumnForm } from "../models";

export const getData = async () => {
  const { data } = await axios.get(`${basePath}/columns`);
  return data;
};

export const createColumn = async (form: ColumnForm) => {
  const { data } = await axios.post(`${basePath}/columns`, {
    ...form,
  });
  return data;
};

export const deleteColumn = async (id: number) => {
  const { data } = await axios.delete(`${basePath}/columns/${id}`);
  return data;
};
