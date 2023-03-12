import "../styles/globals.css";
import Head from "next/head";
import { useContext, useEffect, useState, createContext } from "react";
import Script from "next/script";
import "nprogress/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress";

import { GoogleAnalytics } from "nextjs-google-analytics";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export const ThemeContext = createContext();
export const SugPostContext = createContext();

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState({
        sidebar: false,
    });
    const [sugPostList, setSugPostList] = useState([]);

    useEffect(() => {
        //add element to Head
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.language = "javascript";
        script.innerHTML = `var vc_pid = "887516188";`;
        document.head.appendChild(script);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <SugPostContext.Provider value={{ sugPostList, setSugPostList }}>
                <GoogleAnalytics trackPageViews />
                <Script
                    async
                    custom-element="amp-ad"
                    src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
                />
                <Script
                    id="ga"
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8735562939411083"
                    crossorigin="anonymous"
                />
                <Head>
                    <script
                        type="text/javascript"
                        src="//aml.valuecommerce.com/vcdal.js"
                        async
                    ></script>
                </Head>

                <Component {...pageProps} />
            </SugPostContext.Provider>
        </ThemeContext.Provider>
    );
}

export default MyApp;
