import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/toolkit/ReduxProvider";
import Protected from "@/features/protectedRoute/Protected";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Dealpart",
  description: "Buy you favourite item",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ReduxProvider>
          <Protected>
            {" "}
            <Toaster position="top-center" reverseOrder={false} />
            <div className="">{children}</div>
          </Protected>
        </ReduxProvider>
      </body>
    </html>
  );
}
