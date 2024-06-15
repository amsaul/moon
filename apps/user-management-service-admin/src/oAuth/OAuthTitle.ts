import { OAuth as TOAuth } from "../api/oAuth/OAuth";

export const OAUTH_TITLE_FIELD = "provider";

export const OAuthTitle = (record: TOAuth): string => {
  return record.provider?.toString() || String(record.id);
};
