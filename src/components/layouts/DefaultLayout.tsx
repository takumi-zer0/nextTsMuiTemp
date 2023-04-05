import Head from "next/head";

interface LayoutProps {
    children: React.ReactNode;
    pageTitle: string;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="bg-slate-700 text-white h-14 flex items-center  px-4">
                <h2>Test</h2>
            </header>
            <main className="p-2">{children}</main>
            <footer>{/* footer component */}</footer>
        </div>
    );
};

export default DefaultLayout;
