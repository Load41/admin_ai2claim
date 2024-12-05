import clsx from "clsx";
import { svgIcons } from "../../constants/icons";
import styles from "./LDFileUpload.module.css";

export function LDFileUpload({ handleFileChange, profile, className }) {
  return (
    <>
      <div className={clsx(styles.uploadBtnWrapper, className)}>
        <button className={clsx(styles.btn)}>
          <img src={profile} className="img-fluid object-fit-cover w-100 h-100 radius-inherit" alt="" />
          <div className={clsx(styles.pencilIcon, "d-flex align-items-center justify-content-center rounded-circle position-absolute text-white cursor-pointer")}>
            {svgIcons.pencilIcon}
          </div>
        </button>
        <input type="file" name="myfile" accept="image/*" className={clsx(styles.input, "cursor-pointer")} onChange={handleFileChange} />
      </div>
    </>
  );
}
