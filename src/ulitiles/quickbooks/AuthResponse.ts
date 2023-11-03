import { QuickbookToken } from "@prisma/client";

interface AuthResponseInterface {
  token: QuickbookToken;
  response: Response;
  body: string;
  json: JSON;
  intuit_tid: string;
};

export class AuthResponse {
  private token: QuickbookToken;
  private response: Response;
  private body: string;
  private json: JSON;
  private intuit_tid: string;

  constructor(params: AuthResponseInterface) {
    this.token = params.token;
    this.response = params.response;
    this.body = '';
    this.json = params.json;
    this.intuit_tid = params.intuit_tid 
  };
};
