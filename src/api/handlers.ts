import { API_BASE_URL } from "@/constants";
import { GameApi } from "@/types/apiResponses";

export const fetchGamesList = async (): Promise<GameApi[]> => {
  const res = await fetch(`${API_BASE_URL}/games`, {
    next: { revalidate: 60 },
  });
  if (!res.ok)
    throw new Error(`Failed to fetch games ${res.status} ${res.statusText}`);
  return res.json().then((data) => data.games);
};
