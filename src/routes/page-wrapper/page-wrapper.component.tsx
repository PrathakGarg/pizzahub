import { Outlet } from "react-router-dom";

import Header from "../../components/header/header.component";

const PageWrapper = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default PageWrapper;