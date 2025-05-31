"use client";

import { useEffect, useState } from "react";

const fakeFetch = () => {
	return fetch("/api/blog").then((res) => res.json());
};
export default function Blog() {
	const [data, setData] = useState<{ title: string; content: string }[]>([]);

	useEffect(() => {
		// CSR
		// 客户端渲染
		// 客户端请求数据，并且渲染页面
		fakeFetch().then((data) => {
			console.log(data);
			setData(data.data);
		});
	}, []);

	if (data.length === 0) return <div></div>;

	return (
		<div>
			{data.map((item) => (
				<div key={item.title}>{item.title}</div>
			))}
		</div>
	);
}
