import React from 'react';
import styles from './rating.module.css';
type Props = {
  stars?: number;
};

export default function Rating({ stars = 0 }: Props) {
  const [rating, setRating] = React.useState(stars);
  const handleMouseOver = (index: number) => {
    setRating(index);
     if(rating === index) {
      setRating(0); // Reset rating if the same star is clicked
    }
  }
  const getRatingText = (rating: number): string => {
    if (rating >= 1 && rating <= 2) return 'Kém';
    if (rating >= 3 && rating <= 4) return 'Bình thường';
    if (rating === 5) return 'Tốt';
    return 'Chưa đánh giá';
  };
  const getRatingClass = (rating: number): string => {
  if (rating >= 1 && rating <= 2) return 'rating--bad';
  if (rating >= 3 && rating <= 4) return 'rating--avg';
  if (rating === 5) return 'rating--good';
  return 'rating--none';
};
  return (
    <div className={styles.container}>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <span className='styles.star'
            key={index}
            style={{ cursor: 'pointer', color: rating >= item ? 'orange' : 'gray' }}
            onClick={() => {
                handleMouseOver(item);
            }}
          >
            ★
          </span>
        );
      })}
      <span className={`${styles.rating} ${styles[getRatingClass(rating)]}`}> {getRatingText(rating)}</span>
    </div>
  );
}