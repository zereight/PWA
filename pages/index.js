import Head from "next/head";
import Header from "../components/Header"
import Link from "next/link";

export default () => 
<div>
    <Head>
        <title>Index | nomad store</title>
    </Head>
    <Header/>
    <h1>Hello From the index</h1>
    <Link href={"/about"}>
        <a>about page</a>
    </Link>
</div>;
