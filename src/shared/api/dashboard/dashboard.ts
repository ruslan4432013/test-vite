import { DashboardApi } from "./types";
import { apiInstance } from "../base";

const BASE_URL = "/v1/dashboard";

export const getDashboard = (): Promise<DashboardApi> => {
  return apiInstance.get(BASE_URL);
};
