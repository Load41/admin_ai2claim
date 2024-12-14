import { Modal } from "antd"
import styles from "./LDModal.module.css";
export const LDModal = ({open, onCancel, modalContent, title, width}) => {
    
    return(
        <>
            <Modal
                title={title}
                open={open}
                onCancel={onCancel}
                centered
                width={width}
                className="remove-footer-modal"
            >
                {modalContent}
            </Modal>
        </>
    )
}