"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

function AuthLinks({ status, userName }) {
  if (status === "authenticated") {
    return (
      <>
        <Link href={"/profile"} className='whitespace-nowrap ml-8'>
          Hello, {userName}
        </Link>
        <button
          onClick={() => signOut()}
          className='bg-gray-400 rounded-full text-white px-8 py-2 ml-4'
        >
          Logout
        </button>
      </>
    );
  }
  if (status === "unauthenticated") {
    return (
      <>
        <Link href={"/login"}>Login</Link>
        <Link
          href={"/register"}
          className='bg-gray-400 rounded-full text-white px-8 py-2 ml-4'
        >
          Register
        </Link>
      </>
    );
  }
  return null;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();

  return (
    <div>
      DashboardPage
      <AuthLinks status={status} userName={session?.user?.name || "User"} />
    </div>
  );
}
