import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header
        name="Aris Markogiannakis"
        image="/aris.png"
        twitter=''
        linkedin=''
      />
      <body>
        {children}
      </body>
      <Footer
        twitter=''
        linkedIn=''
      />
    </html>
  );
}
