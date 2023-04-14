import Menu from "../../components/menu/menu.component";

import { HomePageContainer, HomeBanner } from "./home-page.styles";

const HomePage = () => {
    return (
        <HomePageContainer>
            <HomeBanner />
            <Menu />
        </HomePageContainer>
    );
};

export default HomePage;