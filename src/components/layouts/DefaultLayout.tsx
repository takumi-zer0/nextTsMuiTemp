import React from "react";
import Link from "next/link";

type DefaultLayoutProps = {
    title: string;
    backUrl?: string;
    children: React.ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
    children,
    title,
    backUrl,
}) => {
    return <>{children}</>;
};

export default DefaultLayout;
