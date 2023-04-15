import { Outlet } from "react-router-dom";

import { OutletContainer } from "./page-wrapper.styles";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

const PageWrapper = () => {
    return (
        <>
            <Header />
            <OutletContainer>
                <Outlet />
            </OutletContainer>
            <Footer />
        </>
    );
};

export default PageWrapper;