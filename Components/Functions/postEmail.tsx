import { createClient } from "@vercel/kv";

export default async function postEmail(email: string) {
  const emails = createClient({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  });

  await emails.setnx("email:" + email, 0);
}
