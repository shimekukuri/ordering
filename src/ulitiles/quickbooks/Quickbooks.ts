import { QuickbookToken } from "@prisma/client";
import { prisma } from "../prisma/db";
import Token from "./Token";
import { URLSearchParams } from "url";
import { randomBytes } from "crypto";

export interface QbInterface {
  environment: string;
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  token: Token;
  scopes: QbScopes[];
}

export type QbEnvirontment = "sandbox" | "production";
export type QbScopes =
  | "Accounting"
  | "Payment"
  | "Payroll"
  | "TimeTracking"
  | "Benefits"
  | "Profile"
  | "Email"
  | "Phone"
  | "Address"
  | "OpenId"
  | "Intuit_name";

export class Quickbooks {
  private readonly environment: string;
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly redirectUri: string;
  private readonly token: Token;
  private readonly scopes: QbScopes[];
  private readonly state: string;
  public static cacheId = "cacheId";
  public static authorizeEndpoint =
    "https://appcenter.intuit.com/connect/oauth2";
  public static tokenEndpoint =
    "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer";
  public static revokeEndpoint =
    "https://developer.api.intuit.com/v2/oauth2/tokens/revoke";
  public static migrate_sandbox =
    "https://developer-sandbox.api.intuit.com/v2/oauth2/tokens/migrate";
  public static migrate_production =
    "https://developer.api.intuit.com/v2/oauth2/tokens/migrate";
  public static jwks_uri = "https://oauth.platform.intuit.com/op/v1/jwks";
  public static userinfo_endpoint_production =
    "https://accounts.platform.intuit.com/v1/openid_connect/userinfo";
  public static userinfo_endpoint_sandbox =
    "https://sandbox-accounts.platform.intuit.com/v1/openid_connect/userinfo";
  public static environment = {
    sandbox: "https://sandbox-quickbooks.api.intuit.com/",
    production: "https://quickbooks.api.intuit.com/",
  };
  public static scopes = {
    Accounting: "com.intuit.quickbooks.accounting",
    Payment: "com.intuit.quickbooks.payment",
    Payroll: "com.intuit.quickbooks.payroll",
    TimeTracking: "com.intuit.quickbooks.payroll.timetracking",
    Benefits: "com.intuit.quickbooks.payroll.benefits",
    Profile: "profile",
    Email: "email",
    Phone: "phone",
    Address: "address",
    OpenId: "openid",
    Intuit_name: "intuit_name",
  };

  constructor(config: QbInterface) {
    this.environment = config.environment;
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
    this.redirectUri = config.redirectUri;
    this.token = config.token;
    this.scopes = config.scopes;
    this.state = randomBytes(100).toString();
  }

  authorizeUri = () => {
    if (
      !this.redirectUri.length ||
      !this.clientId.length ||
      this.scopes.length
    ) {
      return undefined;
    }

    let baseUrl = new URL(Quickbooks.authorizeEndpoint);
    let searchParams = new URLSearchParams();
    searchParams.append("response_type", "code");
    searchParams.append("redirect_uri", this.redirectUri);
    searchParams.append("client_id", this.clientId);
    searchParams.append("state", this.state);
    searchParams.append(
      "scope",
      this.scopes.length > 1 ? this.scopes.join(" ") : this.scopes[0],
    );
   baseUrl.search = searchParams.toString(); 
  };
}
