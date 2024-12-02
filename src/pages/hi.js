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
    const {
        NEXT_PUBLIC_MONGODB_PASSWORD,
        NEXT_PUBLIC_MONGODB_USER,
        NEXT_PUBLIC_MONGODB_DB_NAME,
        NEXT_PUBLIC_MONGODB_DB_PROD
    } = process.env ?? {};

    console.log("process.env: ", process.env);
    console.log("NEXT_PUBLIC_MONGODB_DB_NAME, yo there bacon: ", NEXT_PUBLIC_MONGODB_DB_NAME);
    console.log("yo there secrets.NEXT_PUBLIC_MONGODB_DB_NAME, sup there: ", secrets);

    let dbName = NEXT_PUBLIC_MONGODB_DB_NAME;

    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
        dbName = NEXT_PUBLIC_MONGODB_DB_PROD;
    }

    const connectionUri = `mongodb+srv://${NEXT_PUBLIC_MONGODB_USER}:${NEXT_PUBLIC_MONGODB_PASSWORD}@cluster0.tynope2.mongodb.net/${dbName}`;
    const connectionState = await mongoose.connect(connectionUri, {
        retryWrites: true,
    });

    console.log("connectionState result: ", connectionState);

    return {
        props: {
            data: "hello",
        },
    };
};

export default HiPage;
