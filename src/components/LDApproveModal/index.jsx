import { useState } from "react";
import { LDButton, LDModal } from "../../components";
import { clsx } from "clsx";

export const LDApproveModal = ({isApproveBtn, isRejectedBtn}) => {
    // confirm modal js start
        const [isApproveRejectedModalOpen, setIsApproveRejectedModalOpen] = useState(false);
        const showApproveRejectedModal = () => {
            setIsApproveRejectedModalOpen(true);
        };

        const handleCancel = () => {
            setIsApproveRejectedModalOpen(false);
        };
    // confirm modal js end
    return(
        <>
            {isApproveBtn && (
            <LDButton
                type="fill"
                shape={"round"}
                iconPosition={"end"}
                isGreenBg
                isSmallBtn
                customClass={clsx("w-35 w-100-md mt-auto")}
                handleClick={showApproveRejectedModal}
            >
                Approve
            </LDButton>
            )}
            {isRejectedBtn &&
                <LDButton
                    type="fill"
                    shape={"round"}
                    iconPosition={"end"}
                    isRedBg
                    isSmallBtn
                    customClass={clsx("w-35 w-100-md mt-auto")}
                    handleClick={showApproveRejectedModal}
                >
                    Decline
                </LDButton>
            }
            <LDModal 
                title="Confirm"
                open={isApproveRejectedModalOpen} 
                onCancel={handleCancel}
                modalContent={
                    <>
                        <div className="text-center d-flex flex-column gap-5">
                            <h4 className="lh-base mb-0">
                                Are you sure you want to Approve&nbsp;
                                <span className="text-bleu-de-france-one">"ROOFLINE"</span> &nbsp;to use ai2claim services?
                            </h4>
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
                                Yes
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
                                No
                                </LDButton>
                            </div>
                        </div>
                    </>
                }
             />
        </>
    )
}