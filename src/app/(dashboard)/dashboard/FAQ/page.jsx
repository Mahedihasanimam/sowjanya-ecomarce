'use client'
import { useState } from "react";

const Page = () => {
    const [faqs, setFaqs] = useState([
        { id: 1, question: "Lorem ipsum dolor sit amet consectetur?", answer: "Lorem ipsum dolor sit amet consectetur. Vivamus adipiscing scelerisque lacus accumsan nunc feugiat pharetra pellentesque. Lobortis quis ultrices amet viverra sem et. Nisl vitae pharetra nulla praesent rhoncus. Amet hac dui semper nulla nec mi tincidunt. Habitant et faucibus quisque adipiscing eu. Ipsum donec porta a rhoncus adipiscing nunc faucibus. Mauris semper non vulputate nunc arcu ut. Lorem tristique varius tellus egestas risus risus. Ultricies elementum morbi amet egestas ridiculus." },
        { id: 2, question: "Lorem ipsum dolor sit amet consectetur?", answer: "Lorem ipsum dolor sit amet consectetur. Vivamus adipiscing scelerisque lacus accumsan nunc feugiat pharetra pellentesque. Lobortis quis ultrices amet viverra sem et. Nisl vitae pharetra nulla praesent rhoncus. Amet hac dui semper nulla nec mi tincidunt. Habitant et faucibus quisque adipiscing eu. Ipsum donec porta a rhoncus adipiscing nunc faucibus. Mauris semper non vulputate nunc arcu ut. Lorem tristique varius tellus egestas risus risus. Ultricies elementum morbi amet egestas ridiculus." },
    ]);

    const addFaq = () => {
        setFaqs([
            ...faqs,
            { id: faqs.length + 1, question: "", answer: "" }
        ]);
    };

    const handleInputChange = (id, field, value) => {
        setFaqs(faqs.map(faq => (faq.id === id ? { ...faq, [field]: value } : faq)));
    };

    const handleSave = () => {
        console.log(faqs); // Replace this with your save logic
    };

    return (
        <div className="p-4">
            <h1 className="text-[16px] font-medium text-white pb-4">FAQ questions & answers</h1>

            {faqs.map((faq) => (
                <div key={faq.id} className="flex items-start space-x-4 py-4 w-full">
                    <div>
                        <strong>{faq.id}.</strong>
                    </div>

                    <div className="w-full">
                        <div className="w-full">
                            <p className="text-[16px] font-medium pb-2">Question:</p>
                            <textarea
                                className="w-full p-4 bg-[#201F1F] text-[#B1A8A8] text-[16px] resize-none"
                                value={faq.question}
                                onChange={(e) => handleInputChange(faq.id, "question", e.target.value)}
                            />
                        </div>
                        <div className="w-full pt-4">
                            <p className="text-[16px] font-medium pb-2">Answer:</p>
                            <textarea
                                className="w-full p-4 bg-[#201F1F] text-[#B1A8A8] text-[16px] resize-none h-44"
                                value={faq.answer}
                                onChange={(e) => handleInputChange(faq.id, "answer", e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            ))}

            <button
                className="mt-4 py-2 px-4  text-[#000000] font-medium rounded bg-[#DBBC7E] "
                onClick={addFaq}
            >
                Add another question
            </button>

            <button
                className="mt-4 ml-4 py-2 px-6 bg-transparent border border-[#DBBC7E] text-white rounded"
                onClick={handleSave}
            >
                Save
            </button>
        </div>
    );
};

export default Page;



//        {/* faqj-2 -------------------------- */}
//        <div className="flex items-start space-x-4 py-4">
//        <div>
//            <strong>1.</strong>
//        </div>

//        <div>

//            <div className="w-full">
//                <p className="text-[16px] font-medium pb-2">Question : </p>
//                <div className="p-4 bg-[#201F1F] text-[#B1A8A8] text-[16px]">
//                    Lorem ipsum dolor sit amet consectetur?

//                </div>
//            </div>
//            <div className="w-full pt-4">
//                <p className="text-[16px] font-medium pb-2">Answer : </p>
//                <div className="p-4 bg-[#201F1F] text-[#B1A8A8] text-[16px]">
//                    Lorem ipsum dolor sit amet consectetur. Vivamus adipiscing scelerisque lacus accumsan nunc feugiat pharetra pellentesque. Lobortis quis ultrices amet viverra sem et. Nisl vitae pharetra nulla praesent rhoncus. Amet hac dui semper nulla nec mi tincidunt. Habitant et faucibus quisque adipiscing eu. Ipsum donec porta a rhoncus adipiscing nunc faucibus. Mauris semper non vulputate nunc arcu ut. Lorem tristique varius tellus egestas risus risus. Ultricies elementum morbi amet egestas ridiculus.

//                </div>
//            </div>
//        </div>


//    </div>
//    {/* faqj-3 -------------------------- */}
//    <div className="flex items-start space-x-4 py-4">
//        <div>
//            <strong>3.</strong>
//        </div>

//        <div>

//            <div className="w-full">
//                <p className="text-[16px] font-medium pb-2">Question : </p>
//                <div className="p-4 bg-[#201F1F] text-[#B1A8A8] text-[16px]">
//                    Lorem ipsum dolor sit amet consectetur?

//                </div>
//            </div>
//            <div className="w-full pt-4">
//                <p className="text-[16px] font-medium pb-2">Answer : </p>
//                <div className="p-4 bg-[#201F1F] text-[#B1A8A8] text-[16px]">
//                    Lorem ipsum dolor sit amet consectetur. Vivamus adipiscing scelerisque lacus accumsan nunc feugiat pharetra pellentesque. Lobortis quis ultrices amet viverra sem et. Nisl vitae pharetra nulla praesent rhoncus. Amet hac dui semper nulla nec mi tincidunt. Habitant et faucibus quisque adipiscing eu. Ipsum donec porta a rhoncus adipiscing nunc faucibus. Mauris semper non vulputate nunc arcu ut. Lorem tristique varius tellus egestas risus risus. Ultricies elementum morbi amet egestas ridiculus.

//                </div>
//            </div>
//        </div>


//    </div>