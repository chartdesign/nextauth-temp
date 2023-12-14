import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./context/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Provider>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
