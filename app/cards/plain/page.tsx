import { FaBookmark, FaComment, FaHeart, FaShare } from 'react-icons/fa';
import styles from './styles.module.css';

interface CardItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    author: {
        name: string;
        avatar: string;
    };
    stats: {
        likes: number;
        comments: number;
        shares: number;
    };
    tags: string[];
    progress: number;
    price: number;
    priceChange: number;
}

const imageUrls = [
    'photo-1555041469-a586c61ea9bc',
    'photo-1627308595229-7830a5c91f9f',
    'photo-1597589827317-4c6d6e0a90bd',
];

const cardData: CardItem[] = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    title: `カード${index + 1}`,
    description: `これは${
        index + 1
    }つ目のカードの説明文です。より長い説明文をここに入れることで、テキストの表示領域を増やしています。`,
    imageUrl: `https://images.unsplash.com/${imageUrls[index % imageUrls.length]}`,
    author: {
        name: `作者${index + 1}`,
        avatar: `https://i.pravatar.cc/150?img=${index % 70}`,
    },
    stats: {
        likes: Math.floor(Math.random() * 1000),
        comments: Math.floor(Math.random() * 100),
        shares: Math.floor(Math.random() * 50),
    },
    tags: ['タグ1', 'タグ2', 'タグ3'].map((tag) => `${tag}_${index + 1}`),
    progress: Math.floor(Math.random() * 100),
    price: Math.floor(Math.random() * 10000),
    priceChange: Math.random() * 20 - 10,
}));
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
                            <button className={styles.bookmarkButton}>
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
                                <div className={styles.progressBar} style={{ width: `${card.progress}%` }}></div>
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
                                {card.tags.map((tag, i) => (
                                    <span key={i} className={styles.tag}>
                                        <FaBookmark className={styles.tagIcon} />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Card Footer */}
                        <div className={styles.cardFooter}>
                            <button className={styles.actionButton}>
                                <FaHeart />
                                <span>{card.stats.likes}</span>
                            </button>
                            <button className={styles.actionButton}>
                                <FaComment />
                                <span>{card.stats.comments}</span>
                            </button>
                            <button className={styles.actionButton}>
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
