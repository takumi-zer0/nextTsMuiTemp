/*
 * Array
 * title, pageID
 */

import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useEffect } from "react";

function BreadCrumbs({ ancestors }) {
    const [data, setData] = useState(ancestors.nodes);

    useEffect(() => {
        if (ancestors) {
            // console.log(ancestors, "ancestors");
            if (ancestors.nodes[0].pageId !== 825) {
                //reverse Array
                const reversed = data.reverse();
                setData(reversed);
            }
        }
    }, [ancestors]);

    return (
        <div className="flex items-center overflow-x-scroll text-gray-600 gap-1 noscroll">
            <Link href="/" passHref>
                <a
                    href=""
                    target={"_blank"}
                    className="w-5 h-5 hover:text-gray-800"
                >
                    <FontAwesomeIcon icon={faHouse} />
                </a>
            </Link>
            {data &&
                data.map((item, index) => {
                    if (item.pageId === 825) {
                        return null;
                    }
                    return (
                        <div key={index} className="flex items-center">
                            <div className="p-0">＞</div>
                            <Link
                                href={`${item.pageId}/`}
                                key={item.pageId}
                                passHref
                            >
                                <a
                                    className="truncate hover:text-gray-800"
                                    target={"_blank"}
                                >
                                    {item.title}
                                </a>
                            </Link>
                        </div>
                    );
                })}
        </div>
    );
}
export default BreadCrumbs;
