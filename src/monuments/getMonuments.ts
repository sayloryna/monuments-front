import { type Monument, type Monuments } from "./types";

const getMonuments = async (): Promise<Monument[]> => {
  try {
    const response = await fetch(
      "https://monuments-back.onrender.com/monuments",
    );
    const { monuments } = (await response.json()) as Monuments;

    return monuments;
  } catch (error) {
    const monuments: Monument[] = [];
    return monuments;
  }
};

export default getMonuments;
