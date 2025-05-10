import { checkToken } from "./Auth";

export const checkAuth = () => {
  return !!checkToken();
};
