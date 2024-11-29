import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BMS ADMIN",
  description: "BANK MANAGEMENT SYSTEM",
};

const configs = {
  logo: "AKA",
  links: [
    { id: "1", route: "/", title: "Home" },
    { id: "2", route: "/about", title: "About" },
    { id: "3", route: "/contact", title: "Contact" },
    // { id: "4", route: "/admin", title: "admin" },
    // { id: "5", route: "/login", title: "login" },
    // { id: "6", route: "/register", title: "register" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar logo={configs.logo} links={configs.links} />
          <div className="application">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
