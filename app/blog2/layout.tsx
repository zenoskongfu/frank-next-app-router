export default function BlogLayout(props: { children: React.ReactNode }) {
	return (
		<div>
			blog layout before
			{props.children}
			blog layout after
		</div>
	);
}
