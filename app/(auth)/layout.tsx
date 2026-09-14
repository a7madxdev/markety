import React, { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return <div className="flex justify-center">{children}</div>;
}

export default AuthLayout;
