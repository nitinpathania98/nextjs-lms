import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import DashboardPage from "./dashboard/page";
import { Toaster } from "react-hot-toast";

export default async function Home() {
  const session = await getServerSession(authOptions)
  // if (!session) {
  //   redirect("/login")
  // }
  return (
    <>
      <DashboardPage />
    </>
  )
}
