"use client";

//Import Theme Provider
import { useTheme } from "@/components/theme-provider";

import { clientSideFunction } from "@/utils/client-utils";

//server only enforcement
//import "server-only";


export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction();

  return <h1 style={{ color: theme.colors.primary }}>Client Router Page</h1>;
  <p>{ result }</p>
}
