export const imageUrls = [
	// リビング・ダイニング
	"photo-1600585154340-be6161a56a0c",
	"photo-1616486338812-3dadae4b4ace",
	"photo-1618221195710-dd6b41faaea6",
	"photo-1631679706909-1844bbd07221",
	"photo-1555041469-a586c61ea9bc",
	"photo-1627308595229-7830a5c91f9f",
	"photo-1597589827317-4c6d6e0a90bd",
	"photo-1493663284031-b7e3aefcae8e",
	"photo-1583847268964-b28dc8f51f92",
	"photo-1586023492125-27b2c045efd7",

	// キッチン
	"photo-1556912167-f556f1f39fdf",
	"photo-1556911220-bff31c812dba",
	"photo-1556909212-d5b604d0c90d",
	"photo-1565183997392-2f6f122e5912",
	"photo-1556909114-f6016b24ca1e",

	// ベッドルーム
	"photo-1522771739844-6a9f6d5f14af",
	"photo-1616594039964-ae9021a400a0",
	"photo-1617325247661-675ab4b64ae2",
	"photo-1618377385526-83108e0a3f84",
	"photo-1616486029423-aaa4789e8c9a",

	// バスルーム
	"photo-1584622650111-993a426fbf0a",
	"photo-1620626011761-996317b8d101",
	"photo-1507652313519-d4e9174996dd",
	"photo-1584622781867-1c5fe028804e",
	"photo-1629079447777-1e605162dc8d",

	// ワークスペース
	"photo-1524758631624-e2822e304c36",
	"photo-1511203466129-824e631920d7",
	"photo-1518481612222-68bbe828ecd1",
];

export interface CardItem {
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

export const cardData: CardItem[] = Array.from({ length: 50 }, (_, index) => ({
	id: index + 1,
	title: `カード${index + 1}`,
	description: `これは${
		index + 1
	}つ目のカードの説明文です。より長い説明文をここに入れることで、テキストの表示領域を増やしています。`,
	imageUrl: `https://images.unsplash.com/${imageUrls[index % imageUrls.length]}?w=500&h=500&fit=crop`,
	author: {
		name: `作者${index + 1}`,
		avatar: `https://i.pravatar.cc/150?img=${index % 70}`,
	},
	stats: {
		likes: Math.floor(Math.random() * 1000),
		comments: Math.floor(Math.random() * 100),
		shares: Math.floor(Math.random() * 50),
	},
	tags: ["タグ1", "タグ2", "タグ3"].map((tag) => `${tag}_${index + 1}`),
	progress: Math.floor(Math.random() * 100),
	price: Math.floor(Math.random() * 10000),
	priceChange: Math.random() * 20 - 10,
}));
