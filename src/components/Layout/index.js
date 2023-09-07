import { styled } from "styled-components";
import Navbar from "../Navbar";


const LayoutContainer = styled("div")``;
const Layout = (props) => {
  return (
    <div style={{}}>
      <Navbar isAuth={props.isAuth} />

      <LayoutContainer>{props.children}</LayoutContainer>

    </div>
  );
};

export default Layout;
