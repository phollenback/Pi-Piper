"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// LoginPage component: handles user authentication using Clerk.js.
export default function LoginPage() {
  const { isSignedIn } = useAuth(); // Clerk's authentication status.
  const router = useRouter();

  // Redirects to prep dashboard if the user is already signed in.
  useEffect(() => {
    if (isSignedIn) {
      router.push("/prep-dash");
    }
  }, [isSignedIn, router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-indigo-300">
      {/* Center Card */}
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg">
        {/* Title Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600">Pi Piper</h1>
          <p className="text-gray-600">Your gateway to effortless login and user management.</p>
        </div>

        {/* Authentication Buttons */}
        <div className="space-y-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <div className="flex justify-center">
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}