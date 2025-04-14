import React from 'react';
import styles from './wordCard.module.css';
import Icon from '../../atoms/Icon/Icon';
import MoreInfo from '../../molecules/MoreInfo/MoreInfo';
const WordCard = ({ img, word, meaning }) => {
    return (
        <div className={styles.wordCard}>
            <div className={styles.hint}>
                <MoreInfo text={meaning}>
                    <Icon
                        size={'1.5rem'}
                        color="var(--primary)"
                        type={'info'}
                    />
                </MoreInfo>
            </div>
            <img src={img} alt="imagen de la carta" />
        </div>
    );
};

export default WordCard;
