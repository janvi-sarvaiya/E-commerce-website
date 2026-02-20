import { useClerk } from "@clerk/clerk-react";

import { TbLogout2 } from "react-icons/tb";

export default function Logout() {
  const { signOut } = useClerk();

  const handleLogout = async () => {
    await signOut({ redirectUrl: "/login" });
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 cursor-pointer"
      >
        <TbLogout2 className="w-6 h-6" /> Logout
      </button>
    </div>
  );
}
