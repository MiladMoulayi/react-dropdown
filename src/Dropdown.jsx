import React from "react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import list from "./list.json";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSelection, setCurrentSelection] = useState({
    text: "Pick your poison",
    emoticon: "😈",
  });
  return (
    <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg">
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="bg-blue-400 p-4 w-full flex items-center font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
      >
        <div className="flex w-full justify-between">
          <div>{currentSelection.text}</div>
          <div>{currentSelection.emoticon}</div>
        </div>
        {!isOpen ? (
          <FaChevronDown className="ml-2" />
        ) : (
          <FaChevronUp className="ml-2" />
        )}
      </button>
      {isOpen && (
        <div className="bg-blue-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
          {list.map((item, i) => (
            <div
              className="flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"
              key={i}
              onClick={() => {
                setCurrentSelection({
                  text: item.city,
                  emoticon: item.emoticon,
                });
                setIsOpen(false);
              }}
            >
              <h3>{item.city}</h3>
              <h3>{item.emoticon}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
