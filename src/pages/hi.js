const { useEffect } = require("react");

const HiPage = () => {

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

export default HiPage