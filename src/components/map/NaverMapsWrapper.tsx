"use client";

import { NavermapsProvider } from "react-naver-maps";

export default function NaverMapsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavermapsProvider
      ncpClientId={process.env.NEXT_PUBLIC_NAVERMAPS_CLIENT_ID || ""}
    >
      {children}
    </NavermapsProvider>
  );
}
