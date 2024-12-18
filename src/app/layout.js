import Nav from "../app/Organismos/Nav";
import Footer from "./Organismos/Footer";
import "../../css/globals.css"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Nav />
        </header>

        <main>{children}</main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
