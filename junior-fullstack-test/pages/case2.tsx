import { NextPage } from "next";
import styles from "../styles/Home.module.css";

type IComment = {
	commentId: number;
	commentContent: string;
	replies?: IComment[];
};

const Case: NextPage = () => {
	const comments: IComment[] = [
		{
			commentId: 1,
			commentContent: "Hai",
			replies: [
				{
					commentId: 11,
					commentContent: "Hai juga",
					replies: [
						{
							commentId: 111,
							commentContent: "Haai juga hai jugaa",
						},
						{
							commentId: 112,
							commentContent: "Haai juga hai jugaa",
						},
					],
				},
				{
					commentId: 12,
					commentContent: "Hai juga",
					replies: [
						{
							commentId: 121,
							commentContent: "Haai juga hai jugaa",
						},
					],
				},
			],
		},
		{
			commentId: 2,
			commentContent: "Halooo",
		},
	];
	return (
		<div className={styles.container}>
			<div className="case2">
				<h1>Case 2</h1>
				<p>
					Buatlah fungsi untuk menghitung total komentar yang ada, termasuk
					semua balasan komentar. Berdasarkan data di atas, total komentar
					adalah 7 komentar.
				</p>
				<p>Jawab:</p>
				<p>
					{comments.length +
						Number(comments[0].replies?.length) +
						Object(comments[0].replies[0].replies?.length) +
						Object(comments[0].replies[1].replies?.length)}
				</p>
			</div>
		</div>
	);
};

export default Case;
