"use client";
import React from "react";
import { signOut } from "next-auth/react";

export default function SignoutButton({  }: { type?: string }) {
    return (
        <div>
            <button
                className="signout p-2 text-white rounded-md"
                onClick={() =>
                    signOut({
                        callbackUrl: "/login",
                        redirect: true,
                    })
                }
            >
                Sign Out
            </button>
        </div>
    );
}