import React from "react";

interface IProps {
    test: string;
}

const Page: React.FC<IProps> = ({ test }) => {
    const [state, setState] = React.useState(test);

    React.useEffect(() => {
        setTimeout(() => {
            setState("State from client");
        }, 1000);
    }, []);

    return <div>{state}</div>;
};

export default Page;

export const getStaticProps = async () => {
    await new Promise((res) => setTimeout(res, 500));
    return { props: { test: "State from server props" } };
};
