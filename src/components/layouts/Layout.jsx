import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import logo from "../../assets/logo_withoutBG.png";
import ScrollToTop from "../common/ScrollToTop";
import FloatingButtons from "../common/FloatingButtons";
export default function Layout({ children }) {

    return (
        <>
            <ScrollToTop />
            <Navbar logo={logo} />
            <main className="pt-16">{children}</main>
            <Footer />
            <FloatingButtons />
        </>
    );
}
