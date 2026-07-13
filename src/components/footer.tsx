import Link from "next/link";

function Footer() {
	const date = new Date();
	return (
		<div className="flex flex-col justify-center text-center">
			<p>&copy; {date.getFullYear()} xvcf.dev</p>
			<p>contact: root (at) xvcf (dot) dev</p>
			<p>spam trap below, do not email!</p>
			<Link href={"mailto:st@xvcf.dev"}>st@xvcf.dev</Link>
		</div>
	);
}

export default Footer;
