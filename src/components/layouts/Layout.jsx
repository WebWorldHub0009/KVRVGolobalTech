import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import logo from "../../assets/logo_withoutBG.png";
export default function Layout({ children }) {
    return (
        <>
            <Navbar logo={logo} />
            <main className="pt-16">{children}</main>
            <Footer />
        </>
    );
}
