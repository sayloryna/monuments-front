import { type Monument, type Monuments } from "./types";

const getMonument = async (): Promise<Monument[]> => {
  const response = await fetch("https://monuments-back.onrender.com/monuments");
  const { monuments } = (await response.json()) as Monuments;

  return monuments;
};

export default getMonument;
