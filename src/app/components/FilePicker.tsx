import React from "react";
import CustomButton from "./CustomButton";

// interface fileProps {
// file: ;
// setFile: (setFile: string) => void;
// readFile: (readFile: string) => void;
// }

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className=" filepicker-container">
      <div className=" flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <label htmlFor="file-upload" className=" filepicker-label">
        Upload File
      </label>
      <p className=" mt-2 text-gray-500 text-xs  truncate">
        {file === "" ? "No file selected" : file.name}
      </p>
      <div className=" mt-4 flex flex-wrap gap-36 ">
        <CustomButton
          type="outline"
          title="Full"
          handleClick={() => readFile("logo")}
          customStyles="text-xs "
        />
      </div>
    </div>
  );
};

export default FilePicker;
