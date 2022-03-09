import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/post";
import { GetStaticProps, GetStaticPaths } from "next";

export default function Post({
	postData,
}: {
	postData: {
		title: string;
		date: string;
		contentHtml: string;
	};
}) {
	console.log(postData);
	return (
		<>
			<Head>
				<title>Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="text-4xl my-6">
				<h1>{postData.title}</h1>
			</div>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params?.id as string);
	return {
		props: {
			postData,
		},
	};
};
