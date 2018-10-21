import Head from "next/head";
import Link from "next/link";

export default () => 
<div>
    <Head>
        <title>Index | nomad store</title>
    </Head>
    <h1>Hello From the index</h1>
    <Link href={"/about"}>
        <a>about page</a>
    </Link>
</div>;