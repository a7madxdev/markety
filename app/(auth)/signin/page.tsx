"use client";

import Button from "@/components/Button";
import { signInWithGoogle } from "@/lib/actions/auth.actions";

function SignIn() {
  return (
    <div className="border border-slate-300 w-85 max-w-[calc(100%-32px)] mt-12 rounded-2xl p-3">
      <h1 className="text-center text-xl font-bold">Sign In</h1>
      <p className="text-center text-slate-700 text-sm mb-4">
        Sign in to your Markety account
      </p>
      <Button theme="primary" className="w-full" onClick={signInWithGoogle}>
        Sign In
      </Button>
    </div>
  );
}

export default SignIn;
