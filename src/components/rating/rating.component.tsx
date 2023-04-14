import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

import { RatingContainer } from './rating.styles';

type RatingProps = {
    rating: number;
};

const Rating = ({ rating }: RatingProps) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <RatingContainer>
            {stars.map((star) => (
                <span key={star}>
                    {rating >= star ? (
                        <BsStarFill style={{color: 'gold'}} />
                    ) : rating >= star - 0.5 ? (
                        <BsStarHalf style={{color: 'gold'}} />
                    ) : (
                        <BsStar style={{color: 'gold'}} />
                    )}
                </span>
            ))}
        </RatingContainer>
    );
};

export default Rating;