import { connectToMongodb } from "@/connection";
import mongoose from "mongoose";

const { useEffect } = require("react");

const HiPage = ({ data }) => {
    useEffect(() => {
        (async () => {
            const res = await fetch("/api/hello");
            const data = await res.json();
        })();
    });

    return (
        <>
            <h1>Hi</h1>
        </>
    );
};

export const getStaticProps = async (arg) => {

    const { MONGODB_PASSWORD, MONGODB_USER, MONGODB_DB_NAME, MONGODB_DB_PROD } =
        process.env ?? {};

    console.log("process.env: ", process.env);
    console.log("MONGODB_DB_NAME, yo there bacon: ", MONGODB_DB_NAME);
    console.log("yo there secrets.MONGODB_DB_NAME, sup there: ", secrets);

    let dbName = MONGODB_DB_NAME;

    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
        dbName = MONGODB_DB_PROD;
    }

    const connectionUri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.tynope2.mongodb.net/${dbName}`;
    const connectionState = await mongoose.connect(connectionUri, {
        retryWrites: true,
    });

    console.log("yo there secrets: ", secrets.MONGODB_DB_NAME);
    console.log("connectionState result: ", connectionState);

    return {
        props: {
            data: "hello",
        },
    };
};

export default HiPage;
