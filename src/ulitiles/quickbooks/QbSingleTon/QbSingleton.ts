import { Quickbooks } from "../Quickbooks";

export let QbPayment  = new Quickbooks({
    scopes: ["Payment"],
    clientId: process.env.QUICKBOOKS_CLIENT_ID as string,
    environment: process.env.ENV as string,
    clientSecret: process.env.QUICKBOOKS_CLIENT_SECRET as string,
    redirectUri: process.env.QUICKBOOKS_REDIRECT as string,
  });

  
; 
