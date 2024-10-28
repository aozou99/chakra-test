export default function Home() {
    const implementations = [
        {
            title: 'Chakra UI v2',
            description: 'Chakra UI を使用した実装',
            href: './cards/chakra-v2',
            bgColor: 'bg-purple-100',
            hoverColor: 'hover:bg-purple-200',
        },
        {
            title: 'Chakra UI v2 (render in view)',
            description: 'Chakra UI を使用した実装、IntersectionObserver を使用して不要なレンダリングを制御',
            href: './cards/chakra-v2/render-in-view',
            bgColor: 'bg-purple-100',
            hoverColor: 'hover:bg-purple-200',
        },
        {
            title: 'Plain CSS',
            description: 'プレーンな CSS を使用した実装',
            href: './cards/plain',
            bgColor: 'bg-blue-100',
            hoverColor: 'hover:bg-blue-200',
        },
        {
            title: 'Tailwind CSS',
            description: 'Tailwind CSS を使用した実装',
            href: './cards/tailwind',
            bgColor: 'bg-teal-100',
            hoverColor: 'hover:bg-teal-200',
        },
    ];

    return (
        <div className='min-h-screen bg-gray-50 py-12 px-4'>
            <div className='max-w-3xl mx-auto'>
                <h1 className='text-3xl font-bold text-center text-gray-900 mb-8'>カード一覧の比較</h1>

                <div className='space-y-4'>
                    {implementations.map((impl) => (
                        <a
                            key={impl.href}
                            href={impl.href}
                            target='_blank'
                            className={`block p-6 rounded-lg ${impl.bgColor} ${impl.hoverColor} transition-colors duration-200`}
                            rel='noreferrer'>
                            <h2 className='text-xl font-semibold text-gray-900'>{impl.title}</h2>
                            <p className='mt-2 text-gray-600'>{impl.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
