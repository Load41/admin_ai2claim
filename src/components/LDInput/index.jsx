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
  isNotBottomSpace,
  isSearchBarInputWrap,
  isTextarea,
  isSmallCustomInput,
  disabled = false,
}) => {
  const { TextArea } = Input;
  return (
    <>
      {isTextarea ? (
        <TextArea
          rows={4}
          placeholder={placeholder}
          className={clsx(styles.inputWrap, styles.customInput, className)}
        />
      ) : (
        <div
          className={clsx(
            isNotBottomSpace && "mb-0",
            styles.inputWrap,
            isSearchBarInputWrap
          )}
        >
          <Input
            className={clsx(
              isSmallCustomInput && styles.isSmallCustomInput,
              styles.customInput,
              className
            )}
            id={id}
            dataTestId={dataTestId}
            name={name}
            value={value}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            onChange={handleChange}
            suffix={suffix}
            prefix={prefix}
          />
          {errorMessage && (
            <p
              className={clsx(
                styles.errorMessage,
                "d-flex fw-400 text-red small error-msg-text mt-2 mb-0 letter-space-1"
              )}
            >
              {errorMessage}
            </p>
          )}
        </div>
      )}
    </>
  );
};
