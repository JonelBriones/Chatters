"use server";

const { revalidatePath } = require("next/cache");
const { redirect } = require("next/navigation");

export default async function redirectToSignIn() {
  console.log("revalidate");
  revalidatePath("/", "layout");
  redirect(`/api/auth/signin?callbackUrl=%2F`);
}
