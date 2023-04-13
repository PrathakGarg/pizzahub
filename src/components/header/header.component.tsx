import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
        <header>
            <h1>Pizza Hub</h1>
        </header>
        <Outlet />
        </>
    );
};

export default Header;