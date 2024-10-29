import { cardData } from '@/app/_constants/cards';
import { FaBookmark, FaComment, FaHeart, FaShare } from 'react-icons/fa';
import styles from './styles.module.css';

export default function PlainCardsPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>カード一覧</h1>
            <div className={styles.cardGrid}>
                {cardData.map((card) => (
                    <div key={card.id} className={styles.card}>
                        {/* Card Header */}
                        <div className={styles.cardHeader}>
                            <div className={styles.authorInfo}>
                                <div className={styles.avatarContainer}>
                                    <img src={card.author.avatar} alt={card.author.name} className={styles.avatar} />
                                </div>
                                <div>
                                    <h2 className={styles.authorName}>{card.author.name}</h2>
                                    <p className={styles.authorRole}>投稿者</p>
                                </div>
                            </div>
                            <button className={styles.bookmarkButton} type='button'>
                                <FaBookmark />
                            </button>
                        </div>

                        {/* Card Image */}
                        <div className={styles.imageContainer}>
                            <img src={card.imageUrl} alt={card.title} className={styles.cardImage} />
                        </div>

                        {/* Card Body */}
                        <div className={styles.cardBody}>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDescription}>{card.description}</p>

                            {/* Progress Bar */}
                            <div className={styles.progressContainer}>
                                <div className={styles.progressBar} style={{ width: `${card.progress}%` }} />
                            </div>

                            {/* Stats */}
                            <div className={styles.stats}>
                                <div className={styles.statsLabel}>価格</div>
                                <div className={styles.price}>¥{card.price.toLocaleString()}</div>
                                <div
                                    className={`${styles.priceChange} ${
                                        card.priceChange > 0 ? styles.positive : styles.negative
                                    }`}>
                                    <span>{card.priceChange > 0 ? '↑' : '↓'}</span>
                                    {Math.abs(card.priceChange).toFixed(1)}%
                                </div>
                            </div>

                            {/* Tags */}
                            <div className={styles.tags}>
                                {card.tags.map((tag) => (
                                    <span key={tag} className={styles.tag}>
                                        <FaBookmark className={styles.tagIcon} />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Card Footer */}
                        <div className={styles.cardFooter}>
                            <button className={styles.actionButton} type='button'>
                                <FaHeart />
                                <span>{card.stats.likes}</span>
                            </button>
                            <button className={styles.actionButton} type='button'>
                                <FaComment />
                                <span>{card.stats.comments}</span>
                            </button>
                            <button className={styles.actionButton} type='button'>
                                <FaShare />
                                <span>{card.stats.shares}</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
