import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
	return (
		<div className="">
			<div className="w-full h-[40vh] bg-blue-400/70 relative flex items-center flex-col text-white gap-4">
				<div className="absolute w-full h-full -z-10">
					<Image src={"/back.jpg"} layout="fill" objectFit="cover" />
				</div>
				<Link href={"/"}>
					<a>
						<h2 className="text-3xl font-bold text-white py-5 w-full text-left px-5">
							Uguide
						</h2>
					</a>
				</Link>
				<h3 className="text-4xl">応用情報技術者試験</h3>
			</div>

			<div className="bg-gray-200 min-h-[70vh] w-full flex flex-col items-center py-10"></div>
		</div>
	);
}
