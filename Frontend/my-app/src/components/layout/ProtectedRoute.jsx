import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Login from "../../pages/Login";

export default function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Login />
      </SignedOut>
    </>
  );
}
