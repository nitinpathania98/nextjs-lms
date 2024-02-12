import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import DashboardPage from "./(employees)/dashboard/page";

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/login")
  }
  return (
    <>
      <DashboardPage />
     
    </>
  )
}
