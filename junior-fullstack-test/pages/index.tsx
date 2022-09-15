import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

type IFruit = {
	fruitId: number;
	fruitName: string;
	fruitType: "IMPORT" | "LOCAL";
	stock: number;
};

const Home: NextPage = () => {
	const fruits: IFruit[] = [
		{
			fruitId: 1,
			fruitName: "Apel",
			fruitType: "IMPORT",
			stock: 10,
		},
		{
			fruitId: 2,
			fruitName: "Kurma",
			fruitType: "IMPORT",
			stock: 20,
		},
		{
			fruitId: 3,
			fruitName: "apel",
			fruitType: "IMPORT",
			stock: 50,
		},
		{
			fruitId: 4,
			fruitName: "Manggis",
			fruitType: "LOCAL",
			stock: 100,
		},
		{
			fruitId: 5,
			fruitName: "Jeruk Bali",
			fruitType: "LOCAL",
			stock: 10,
		},
		{
			fruitId: 6,
			fruitName: "KURMA",
			fruitType: "IMPORT",
			stock: 20,
		},
		{
			fruitId: 7,
			fruitName: "Salak",
			fruitType: "LOCAL",
			stock: 150,
		},
	];

	return (
		<div className={styles.container}>
			<a href="/case2">Link Case 2</a>
			<div className="case1">
				<h1>Case 1</h1>
				<p>Buah Apa Saja yang dimiliki Andi?</p>
				<p>
					Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
					(fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa
					saja di masing-masing wadah?
				</p>
				<p>Berapa total stock buah yang ada di masing-masing wadah?</p>
				<p>Jawab:</p>
				<p>Jumlah Wadah yang dibutuhkan adalah {fruits.length}</p>
				<p>Buah yang dimiliki Andi dan Masing-Masing Wadah adalah</p>
				{fruits.map((fruit, i) => (
					<ul key={i}>
						<li>{fruit.fruitName}</li>
					</ul>
				))}
				<p>
					Total Stock Buah :{" "}
					{fruits[0].stock +
						fruits[1].stock +
						fruits[2].stock +
						fruits[3].stock +
						fruits[4].stock +
						fruits[5].stock +
						fruits[6].stock}
				</p>
				<p>
					Komentar: FruitId tidak sesuai urutan dan saya memperbaiki fruitId
				</p>
			</div>
		</div>
	);
};

export default Home;
