import { connectToMongodb } from "@/connection";

const { useEffect } = require("react");

const HiPage = ({ data }) => {


    useEffect(() => {
        (async () => {
            const res = await fetch('/api/hello');
            const data = await res.json();
            console.log("yo there data: ", data);
        })();
    });

    return (
        <>
            <h1>Hi</h1>
        </>
    );
}

export const getStaticProps = async (arg) => {
    await connectToMongodb();

    console.log("Connection to database has been made.");
    return {
        props: {
            data: "hello"
        }
    }
}

export default HiPage;

