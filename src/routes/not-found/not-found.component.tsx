import { BiError } from "react-icons/bi";

import { NotFoundContainer, NotFoundTitle } from "./not-found.styles";

const NotFound = () => {
    return (
        <NotFoundContainer>
            <BiError size="5em" />
            <NotFoundTitle>
                <p>404</p>
                <p>Page Not Found</p>
            </NotFoundTitle>
        </NotFoundContainer>
    );
};

export default NotFound;