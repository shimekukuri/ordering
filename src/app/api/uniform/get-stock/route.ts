import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = '1';
export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "test" });
}

export async function POST() {
  console.log("server fired");

  try {
    const resp = await fetch(
      "https://www.api.theuniformsolution.com/getstocklevel",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "X-User-Token": `${
            process.env.THE_UNIFORM_SOLUTION_TOKEN
              ? process.env.THE_UNIFORM_SOLUTION_TOKEN
              : ""
          }`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: "accessnet",
          userToken: "37c0a8b2-d539-4ca0-bd87-4c5892ed40e4",
          storeNumber: ["1"],
          items: [
            {
              upc: "999999609552",
              skuCode: "609555",
            },
          ],
        }),
      },
    );

    const data = await resp.json();
    console.log('data test', data);
    console.log("data from server", data);

    return NextResponse.json(data);
  } catch (e) {

    console.error(e);
    return NextResponse.json({ message: e });
  }
}

