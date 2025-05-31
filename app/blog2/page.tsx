const fakeFetch = () => {
	return new Promise<{ title: string; content: string }[]>((resolve) => {
		const data = [
			{ title: "hello1", content: "world1" },
			{ title: "hello2", content: "world2" },
			{ title: "hello3", content: "world3" },
		];
		setTimeout(() => {
			resolve(data);
		}, 1000);
	});
};
export default async function Blog2() {
	// ssr
	// 请求数据，和渲染页面的动作，发生在服务器，
	// 这个叫SSR
	const data = await fakeFetch();

	return (
		<div>
			{data.map((item) => (
				<div key={item.title}>{item.title}</div>
			))}
		</div>
	);
}
