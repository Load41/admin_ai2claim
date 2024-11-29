import { Input } from "antd";
import { clsx } from "clsx";
import styles from "./LDInput.module.css";
export const LDInput = ({
    className,
    id,
    dataTestId,
    name,
    value,
    type,
    placeholder,
    handleChange,
    suffix,
    errorMessage,
    prefix,
}) => {
    return (
        <>
            <Input
                className={clsx(styles.customInput, className)}
                id={id}
                dataTestId={dataTestId}
                name={name}
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
                suffix={suffix}
                prefix={prefix}
            />
            {errorMessage && (
                <div className={clsx(styles.errorMessage)}>{errorMessage}</div>
            )}
        </>
    )
}