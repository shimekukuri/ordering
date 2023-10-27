export interface Token_params {
  realmId: string | undefined;
  token_type: Token_type;
  access_token: string;
  refresh_token: string;
  expires_in: string;
  x_refresh_token_expires_in: number;
  id_token: string;
  latency: number;
  createdAt: Date ;
}

export type Token_type = "access" | "refresh" | "";

export default class Token {
  private realmId: string | undefined;
  private token_type: Token_type;
  private access_token: string;
  private refresh_token: string;
  private expires_in: string;
  private x_refresh_token_expires_in: number;
  private id_token: string;
  private latency: number;
  private createdAt: Date | '';

  constructor(params: Token_params) {
    this.realmId = params.realmId || "";
    this.token_type = params.token_type || "";
    this.access_token = params.access_token || "";
    this.refresh_token = params.refresh_token || "";
    this.expires_in = params.expires_in || "";
    this.x_refresh_token_expires_in = params.x_refresh_token_expires_in || 0;
    this.id_token = params.id_token || "";
    this.latency = params.latency || 0;
    this.createdAt = params.createdAt || Date.now();
  }

  setToken = (param: Token_params) => {
    this.realmId = param.realmId || "";
    this.token_type = param.token_type || "";
    this.access_token = param.access_token || "";
    this.refresh_token = param.refresh_token || "";
    this.expires_in = param.expires_in || "";
    this.x_refresh_token_expires_in = param.x_refresh_token_expires_in || 0;
    this.id_token = param.id_token || "";
    this.latency = param.latency || 0;
    this.createdAt = param.createdAt || Date.now();
  };

  getAccessToken = () => {
    return this.access_token;
  };

  getRefreshToken = () => {
    return this.refresh_token;
  };

  clearInstance = () => {
    this.realmId = ''; 
    this.token_type = '';
    this.access_token = ''; 
    this.refresh_token = ''; 
    this.expires_in = '';
    this.x_refresh_token_expires_in = 0;
    this.id_token = '';
    this.latency = 0;
    this.createdAt = '';
  };
}
