import { useState, useRef } from "react";
import { Plus } from 'lucide-react';


function ContentEditor() {
    const [contentText, setContentText] = useState("")
    const [showOptions, setShowOptions] = useState(false);

    const availableStyles = ["Heading 2", "Heading 3", "Heading 4", "Text"]

    function setStyles(sty) {
        let weight = sty === "Text" ? "normal" : "bold";

        const getFontSize = () => {
            switch (sty) {
                case "Heading 2":
                    return "2rem"; // H2 size
                case "Heading 3":
                    return "1.5rem"; // H3 size
                case "Heading 4":
                    return "1.25rem"; // H4 size
                default:
                    return "1rem"; // Default size
            }
        };

        let fontSize = getFontSize();




    }

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            setContentText("")
        }
    }


    


    return (
        <div
            className="bg-[#1F1F1F] f-full h-full p-10"
            aria-placeholder="heheheh"
        >
            <input className="w-full text-3xl p-2 font-bold mb-1.5" style={{ resize: "none" }} rows="1" placeholder="Enter Heading Here..">

            </input>
            <div id="ContenteContaier">
                <span className="flex flex-row-reverse gap-1.5 relative">
                    <button className="hover:bg-[#373737] h-fit w-fit rounded-md p-1 cursor-pointer" onClick={() => setShowOptions(!showOptions)}>
                        <Plus />
                    </button>
                    <textarea
                        value={contentText}
                        onChange={(e) => { setContentText(e.target.value) }}
                        onKeyDown={handleKeyDown}
                        className="resize-none w-full border"
                    >
                       
                    </textarea>
                    

                   
                    {showOptions && (
                        <div className="absolute top-full right-0 mt-2 w-48 bg-[#373737] border rounded-md shadow-lg">
                            <ul className="p-2 space-y-1">
                                {
                                    availableStyles.map((sty, index) => (
                                        <li key={`${sty}->${index}`} onClick={() => { setStyles(sty) }} className="p-2 hover:bg-gray-100 hover:text-[#373737] cursor-pointer">{sty}</li>
                                    ))
                                }

                            </ul>
                        </div>
                    )}



                </span>
        
            </div>

            

        </div>
    );
}

export default ContentEditor;