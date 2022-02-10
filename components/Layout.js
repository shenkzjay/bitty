import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function Layout({ children }) {
    return (
      <div>
     <Navbar />
        <div>{children}</div>
      <Footer />
      </div>
    );
  }
  
  export default Layout;