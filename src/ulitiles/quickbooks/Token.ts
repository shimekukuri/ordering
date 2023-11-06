export interface Token_params {
  realmId: string | undefined;
  token_type: Token_type | undefined;
  access_token: string | undefined;
  refresh_token: string | undefined;
  expires_in: number | undefined;
  x_refresh_token_expires_in: number | undefined;
  id_token: string | undefined;
  latency: number | undefined;
  createdAt: number | undefined;
}

export type Token_type = "access_token" | "refresh_token" | "";

export default class Token {
  private realmId: string | undefined;
  private token_type: Token_type | undefined;
  private access_token: string | undefined;
  private refresh_token: string | undefined;
  private expires_in: number | undefined;
  private x_refresh_token_expires_in: number | undefined;
  private id_token: string | undefined;
  private latency: number | undefined;
  private createdAt: number | undefined;

  constructor(params: Token_params | undefined) {
    this.realmId = params?.realmId || undefined;
    this.token_type = params?.token_type || undefined;
    this.access_token = params?.access_token || undefined;
    this.refresh_token = params?.refresh_token || undefined;
    this.expires_in = params?.expires_in || undefined;
    this.x_refresh_token_expires_in = params?.x_refresh_token_expires_in || 0;
    this.id_token = params?.id_token || undefined;
    this.latency = params?.latency || 0;
    this.createdAt = params?.createdAt || undefined;
  }

  setToken = (param: Token_params) => {
    this.realmId = param.realmId || undefined;
    this.token_type = param.token_type || undefined;
    this.access_token = param.access_token || undefined;
    this.refresh_token = param.refresh_token || undefined;
    this.expires_in = param.expires_in || undefined;
    this.x_refresh_token_expires_in = param.x_refresh_token_expires_in || 0;
    this.id_token = param.id_token || undefined;
    this.latency = param.latency || 0;
    this.createdAt = param.createdAt || Date.now();
  };

  getAccessToken = () => {
    return this.access_token;
  };

  getRefreshToken = () => {
    return this.refresh_token;
  };

  expired = () => {
    if (!this.expires_in || !this.createdAt) {
      return true;
    }

    if (this.expires_in + this.createdAt > Date.now()) {
      return true;
    }

    return false;
  };

  clearInstance = () => {
    this.realmId = undefined;
    this.token_type = undefined;
    this.access_token = undefined;
    this.refresh_token = undefined;
    this.expires_in = undefined;
    this.x_refresh_token_expires_in = undefined;
    this.id_token = undefined;
    this.latency = 0;
    this.createdAt = undefined;
  };
}
