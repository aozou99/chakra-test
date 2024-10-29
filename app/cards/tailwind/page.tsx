import { cardData } from '@/app/_constants/Cards';
import { FaBookmark, FaComment, FaHeart, FaShare } from 'react-icons/fa';

export default function TailwindCardsPage() {
    return (
        <div className='p-8'>
            <h1 className='text-4xl font-bold mb-6'>カード一覧</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
                {cardData.map((card) => (
                    <div key={card.id} className='bg-white rounded-lg shadow-lg overflow-hidden'>
                        {/* Card Header */}
                        <div className='p-4'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center space-x-4'>
                                    <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                                        <img
                                            src={card.author.avatar}
                                            alt={card.author.name}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div>
                                        <h2 className='font-semibold'>{card.author.name}</h2>
                                        <p className='text-sm text-gray-500'>投稿者</p>
                                    </div>
                                </div>
                                <button className='p-2 hover:bg-gray-100 rounded-full' type='button'>
                                    <FaBookmark className='w-5 h-5 text-gray-500' />
                                </button>
                            </div>
                        </div>

                        {/* Card Image */}
                        <div className='relative h-48'>
                            <img src={card.imageUrl} alt={card.title} className='w-full h-full object-cover' />
                        </div>

                        {/* Card Body */}
                        <div className='p-4 space-y-4'>
                            <h3 className='text-xl font-semibold'>{card.title}</h3>
                            <p className='text-gray-600'>{card.description}</p>

                            {/* Progress Bar */}
                            <div className='w-full bg-gray-200 rounded-full h-2.5'>
                                <div
                                    className='bg-green-600 h-2.5 rounded-full'
                                    style={{ width: `${card.progress}%` }}
                                />
                            </div>

                            {/* Stats */}
                            <div className='bg-gray-50 p-3 rounded-lg'>
                                <div className='text-sm text-gray-500'>価格</div>
                                <div className='text-2xl font-bold'>¥{card.price.toLocaleString()}</div>
                                <div
                                    className={`text-sm ${
                                        card.priceChange > 0 ? 'text-green-500' : 'text-red-500'
                                    } flex items-center`}>
                                    <span className='mr-1'>{card.priceChange > 0 ? '↑' : '↓'}</span>
                                    {Math.abs(card.priceChange).toFixed(1)}%
                                </div>
                            </div>

                            {/* Tags */}
                            <div className='flex flex-wrap gap-2'>
                                {card.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className='px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm flex items-center'>
                                        <FaBookmark className='w-3 h-3 mr-1' />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Card Footer */}
                        <div className='border-t border-gray-200'>
                            <div className='flex justify-start p-4 space-x-4'>
                                <button
                                    className='flex items-center space-x-2 text-gray-600 hover:text-gray-800 group'
                                    type='button'>
                                    <FaHeart className='w-5 h-5 group-hover:text-red-500' />
                                    <span>{card.stats.likes}</span>
                                </button>
                                <button
                                    className='flex items-center space-x-2 text-gray-600 hover:text-gray-800'
                                    type='button'>
                                    <FaComment className='w-5 h-5' />
                                    <span>{card.stats.comments}</span>
                                </button>
                                <button
                                    className='flex items-center space-x-2 text-gray-600 hover:text-gray-800'
                                    type='button'>
                                    <FaShare className='w-5 h-5' />
                                    <span>{card.stats.shares}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
