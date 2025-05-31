export async function GET() {
	const data = [
		{ title: "hello1", content: "world1" },
		{ title: "hello2", content: "world2" },
		{ title: "hello3", content: "world3" },
	];
	return Response.json({ data });
}
