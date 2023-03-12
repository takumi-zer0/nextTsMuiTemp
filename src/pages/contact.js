import axios from "axios";
import Header from "../components/Header";
import { useState, useEffect, useCallback } from "react";
import Footer from "../components/Footer";

const YourReCaptchaComponent = () => {
    const [contactSelect, setContactSelect] = useState("");
    const [contactName, setContactName] = useState("");
    const [contactOccupation, setContactOccupation] = useState("");
    const [contactFurigana, setContactFurigana] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactMsg, setContactMsg] = useState("");
    const [contactPhone, setContactPhone] = useState("");

    function handleSubmit() {
        if (
            contactName == "" ||
            contactFurigana == "" ||
            contactEmail == "" ||
            contactMsg == ""
        ) {
            alert("必須項目が記入されていません。");
            return;
        }

        if (!contactEmail.includes("@")) {
            alert("メールアドレスをもう一度確認してください。");
            return;
        }

        axios
            .post("/api/contact", {
                name: contactName,
                furigana: contactFurigana,
                email: contactEmail,
                message: contactMsg,
            })
            .then((res) => {
                console.log("OK");
                setContactName("");
                setContactFurigana("");
                setContactEmail("");
                setContactMsg("");
                setContactSelect("");
                setContactPhone("");
                setContactOccupation("");
                alert(
                    "正常に送信されました。内容確認メールが正しく届いているかご確認ください。"
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="w-full">
            <Header />
            <form className="flex justify-center w-full mt-2">
                <div className="w-5/6 px-8 py-12 mb-20 bg-white bg-blue-500 rounded shadow lg:px-28 h-4/6 xl:w-4/6">
                    <p className="text-xl font-bold text-center text-white md:text-3xl leading-7">
                        お問い合わせ
                    </p>
                    <div className="items-center mt-8 md:flex space-x-2">
                        <div className="flex flex-col md:w-full">
                            <label className="text-base font-semibold leading-none text-white">
                                お名前*
                            </label>
                            <input
                                value={contactName}
                                onChange={(e) => {
                                    setContactName(e.target.value);
                                }}
                                tabIndex={0}
                                type="name"
                                name="name"
                                className="p-3 mt-4 text-base leading-none text-black placeholder-gray-400 bg-gray-100 border border-gray-200 rounded focus:oultine-none focus:border-indigo-700"
                                placeholder="山田　太郎"
                            />
                        </div>
                        <div className="flex flex-col md:w-full">
                            <label className="text-base font-semibold leading-none text-white">
                                ふりがな*
                            </label>
                            <input
                                value={contactFurigana}
                                onChange={(e) => {
                                    setContactFurigana(e.target.value);
                                }}
                                tabIndex={0}
                                type="name"
                                name="name"
                                className="p-3 mt-4 text-base leading-none text-black placeholder-gray-400 bg-gray-100 border border-gray-200 rounded focus:oultine-none focus:border-indigo-700"
                                placeholder="やまだ　たろう"
                            />
                        </div>
                    </div>
                    <div className="items-center mt-8 md:flex">
                        <div className="flex flex-col md:w-full">
                            <label className="text-base font-semibold leading-none text-white">
                                メールアドレス*
                            </label>
                            <input
                                value={contactEmail}
                                onChange={(e) => {
                                    setContactEmail(e.target.value);
                                }}
                                required
                                type="email"
                                id="email"
                                name="email"
                                tabIndex={0}
                                role="input"
                                className="p-3 mt-4 text-base leading-none text-black placeholder-gray-400 bg-gray-100 border border-gray-200 rounded focus:oultine-none focus:border-indigo-700 "
                                placeholder="メールアドレスを入力してください。"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col w-full mt-8">
                            <label className="text-base font-semibold leading-none text-white">
                                お問い合わせ内容*
                            </label>
                            <textarea
                                value={contactMsg}
                                onChange={(e) => {
                                    setContactMsg(e.target.value);
                                }}
                                required
                                name="message"
                                tabIndex={0}
                                aria-label="leave a message"
                                role="textbox"
                                type="name"
                                className="p-3 mt-4 text-base leading-none text-black placeholder-gray-400 bg-gray-100 border border-gray-200 rounded resize-none h-36 focus:oultine-none focus:border-indigo-700"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col w-full mt-8">
                            <label className="text-sm leading-none text-white font-">
                                *マークのついた項目は必須項目となります。
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full">
                        <button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                            className="px-10 py-4 text-base font-semibold leading-none text-white border-2 border-white rounded mt-9 yellow hover:bg-blue-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
                        >
                            送信
                        </button>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    );
};

function Contact() {
    const [show, setShow] = useState(false);

    return <YourReCaptchaComponent />;
}

export default Contact;
