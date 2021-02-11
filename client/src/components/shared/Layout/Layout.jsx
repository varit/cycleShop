import Nav from "../Nav/Nav.jsx";
import "./Layout.css";
import Footer from "../Footer/Footer";

function Layout(props) {
  return (
    <div className="layout-container">
      <Nav user={props.user} />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
