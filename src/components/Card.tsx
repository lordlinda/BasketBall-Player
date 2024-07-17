import React from 'react';
import styles from "@/styles/BasketballPlayerCard.module.css";
import Image from 'next/image';

interface PlayerStats {
    pointsPerGame: number;
    assistsPerGame: number;
    reboundsPerGame: number;
}

interface BasketballPlayerCardProps {
    name: string;
    image: string;
    position: string;
    stats: PlayerStats;
}

const BasketballPlayerCard: React.FC<BasketballPlayerCardProps> = ({ name, image, position, stats }) => {
    return (
        <div className={styles.playerCard}>
            <div >
                <Image src={image} alt={`${name}`} width={300} height={300} style={{
                    position: 'unset'
                }} />
            </div>
            <div className={styles.playerInfo}>
                <h2>{name}</h2>
                <h4>{position}</h4>
                <div className={styles.PlayerStats}>
                    <p>Points per Game: {stats.pointsPerGame}</p>
                    <p>Assists per Game: {stats.assistsPerGame}</p>
                    <p>Rebounds per Game: {stats.reboundsPerGame}</p>
                </div>
            </div>
        </div>
    );
};

export default BasketballPlayerCard;
