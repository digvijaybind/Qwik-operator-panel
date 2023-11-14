import "./globals.css";
import {Inter} from "next/font/google";
import {Providers} from "../store/provider";


const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Qwiklif Operator",
  description: "Qwiklif Operator",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  mt-[100px]`}>
        <Providers>
          {children}
          {/* <Login /> */}
          {/* <Signup/> */}
          {/* <Login /> */}
        </Providers>
      </body>
    </html>
  );
}
