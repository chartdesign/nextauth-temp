"use client";
import React from "react";
import Link from "next/link";
import Sidebar from "../ui/SideBar";
import { useSession, signOut } from "next-auth/react";

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

export default function Header() {
  const { data: session, status } = useSession();
  return (
    <header>
      {/* Desktop Navigation Links (hidden on small screens) */}
      <div className='hidden md:flex space-x-4 items-center justify-between'>
        <Link className='text-gray-500 font-semibold text-2xl' href={"/"}>
          Your Logo
        </Link>

        <div className='flex gap-8 items-center'>
          <AuthLinks status={status} userName={session?.user?.name || "User"} />
        </div>
      </div>

      {/* Hamburger Menu Icon (visible on small screens) */}
      <div className='md:hidden'>
        <Sidebar />
      </div>
    </header>
  );
}
