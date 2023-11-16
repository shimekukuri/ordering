export default async function Page() {
  let resp = await fetch(`${process.env.ENV_URL}/api/uniform/get-stock`, {
    cache: 'no-cache',
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    method: "POST",
    body: JSON.stringify({}),
  });
  let data = await resp.json();

  console.log("Client data", data);

  return <div>The Uniform Shop default shopping page</div>;
}
