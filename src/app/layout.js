import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import "./font.css";
import Footer from "./Components/Footer";

export const metadata = {
  title: "Mindsoft India",
  description: "A Complete HR Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-normal">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
