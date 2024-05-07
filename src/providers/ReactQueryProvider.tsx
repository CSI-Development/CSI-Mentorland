"use client";

// import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const [client] = useState(new QueryClient());

  return (
    // <GoogleOAuthProvider clientId="14019422909-s2unlugqt39gufss9qkqdvph4h69m0pt.apps.googleusercontent.com">
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
    // </GoogleOAuthProvider>
  );
}

export default ReactQueryProvider;
