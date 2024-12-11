import { useState } from "react";
import { LDButton, LDModal } from "..";
import { clsx } from "clsx";
import { Radio } from "antd";
import { LDInput } from "../LDInput";
import styles from "./LDDeclineModal.module.css";
export const LDDeclineModal = ({ title, cardName }) => {
  // confirm modal js start
  const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);
  const showDeclineModal = () => {
    setIsDeclineModalOpen(true);
  };

  const handleCancel = () => {
    setIsDeclineModalOpen(false);
  };
  // confirm modal js end
  // management radio list js start
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  // management radio list js end

  return (
    <>
      <LDButton
        type="fill"
        shape={"round"}
        iconPosition={"end"}
        isRedBg
        isSmallBtn
        customClass={clsx("w-50")}
        handleClick={showDeclineModal}
      >
        Decline
      </LDButton>
      <LDModal
        title={title}
        open={isDeclineModalOpen}
        onCancel={handleCancel}
        modalContent={
          <>
            <div className="">
              <h4 className="lh-base mb-0 fw-medium">
                {cardName} name<b className="px-2">:-</b>
                <span className="text-bleu-de-france-one">MR.Roof</span>
              </h4>
              <Radio.Group
                onChange={onChange}
                value={value}
                className={clsx("declineList d-flex flex-column")}
              >
                <Radio className="w-100 h5 fw-normal" value={1}>
                  Already taken by the name
                </Radio>
                <Radio className="w-100 h5 fw-normal" value={2}>
                  Insufficient Data
                </Radio>
                <Radio className="w-100 h5 fw-normal" value={3}>
                  Others
                </Radio>
              </Radio.Group>
              <LDInput isTextarea />
              <div className="d-flex align-items-centr gap-5 justify-content-center mt-5 mt-xxl-3">
                <LDButton
                  type="fill"
                  shape={"round"}
                  iconPosition={"end"}
                  isGreenBg
                  isSmallBtn
                  customClass={clsx("w-50")}
                  handleClick={handleCancel}
                >
                  Proceed
                </LDButton>
                <LDButton
                  type="fill"
                  shape={"round"}
                  iconPosition={"end"}
                  isRedBg
                  isSmallBtn
                  customClass={clsx("w-50")}
                  handleClick={handleCancel}
                >
                  Cancel
                </LDButton>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};
