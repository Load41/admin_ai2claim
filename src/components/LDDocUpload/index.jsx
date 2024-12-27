import React, { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";
const { Dragger } = Upload;
import { clsx } from "clsx";
import { svgIcons } from "../../constants/icons";
import styles from "./LDDocUpload.module.css";

export function LDDocUpload({
  accept,
  className,
  supportLabel,
  label,
  value,
  onFileUpload,
}) {
  const [stateMain, setStateMain] = useState([]);

  const handleFileChange = (info) => {
    // Keep only the most recent file
    const latestFileList = info.fileList.slice(-1);
    setStateMain(latestFileList);
    // Pass the latest file to the parent component
    if (latestFileList.length > 0) {
      onFileUpload(latestFileList); // Pass the file object
    } else {
      onFileUpload(null); // Clear the file if removed
    }
  };

  const handleRemove = (file) => {
    setStateMain([]); // Clear the file list on remove
    onFileUpload(null);
  };

  useEffect(() => {
    setStateMain(value);
  }, [value]);

  return (
    <>
      <Dragger
        fileList={stateMain}
        listType="picture"
        multiple={false} // Allow only one file at a time
        accept={accept}
        beforeUpload={() => false} // Disable automatic upload
        onChange={handleFileChange}
        showUploadList={{
          showRemoveIcon: true,
          removeIcon: (
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}
            >
              🗑️
            </span>
          ),
        }}
        className={className}
      >
        <p className="ant-upload-drag-icon">{svgIcons.uploadIcon}</p>
        <p
          className={clsx(
            styles.antUploadText,
            "fw-semibold h4 text-black lh-lg-small mb-3"
          )}
        >
          {label}
          {/* Please upload the insurance document */}
        </p>
        <p
          className={clsx(
            styles.antUploadHint,
            "text-fortress-grey fw-semibold h6 lh-lg-small mb-0"
          )}
        >
          {supportLabel}
        </p>
      </Dragger>
    </>
  );
}
