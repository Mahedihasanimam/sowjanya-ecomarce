'use client'
import { useState } from "react";

const Page = () => {
  

    const handleInputChange = (id, field, value) => {
        setFaqs(faqs.map(faq => (faq.id === id ? { ...faq, [field]: value } : faq)));
    };

    const handleSave = () => {
        console.log(faqs); // Replace this with your save logic
    };

    return (
        <div className="p-4">


                <div className="flex items-start space-x-4 py-4 w-full">
 

                    <div className="w-full">
                        <div className="w-full">
                            <p className="text-[16px] font-medium pb-2">Add title:</p>
                            <textarea
                                className="w-full p-4 bg-[#201F1F] text-[#B1A8A8] text-[16px] resize-none"
                                defaultValue={'Lorem ipsum dolor sit amet consectetur?'}
                                onChange={(e) => handleInputChange(e.target.value)}
                            />
                        </div>
                        <div className="w-full pt-4">
                            <p className="text-[16px] font-medium pb-2">Answer:</p>
                            <textarea
                                className="w-full p-4 bg-[#201F1F] text-[#B1A8A8] text-[16px] resize-none h-44"
                                value={"faq.answer"}
                                onChange={(e) => handleInputChange(e.target.value)}
                            />
                        </div>
                    </div>
                </div>



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

