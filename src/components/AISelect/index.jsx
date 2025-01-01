import { Select } from "antd";
import clsx from "clsx";
import styles from "./AISelect.module.css";

export function AISelect({
  defaultValue,
  handleChange,
  isOpen,
  dropdownClass,
  selectClass,
  options,
  placeholder,
  suffixIcon,
  label,
  id,
  AKSelectlabelClassName,
  className,
  variant = "outlined",
  isSmallRadius,
  isDiffrentSelect,
  isAddressSelectMenu,
  name, // Add the name prop
  value, // Add the value prop
  onChange, // Add the onChange prop
  onSearch, // Add the onSearch prop here
  status,
  errorMessage,
  isFlipInput,
}) {
  return (
    <>
      <div
        className={clsx(
          isDiffrentSelect ? styles.isDiffrentSelect : "",
          isAddressSelectMenu ? styles.isAddressSelectMenu : "",
          className
        )}
      >
        {label && (
          <label
            htmlFor={id}
            className={clsx(styles.AKInputLabel, AKSelectlabelClassName)}
          >
            {label}
          </label>
        )}
        <Select
          name={name} // Set the name attribute here
          showSearch // Enable search input in the dropdown
          onSearch={onSearch} // Pass the onSearch prop to the Select component
          popupClassName={clsx(
            isDiffrentSelect ? styles.isDiffrentDropDownStyle : "",
            styles.dropdown,
            dropdownClass
          )}
          open={isOpen}
          defaultValue={defaultValue}
          value={value} // Set the value from props
          style={{
            width: "100%",
          }}
          className={clsx(styles.select, selectClass)}
          onChange={onChange} // Use the passed onChange function
          placeholder={placeholder}
          options={options}
          suffixIcon={suffixIcon}
          variant={variant}
          filterOption={false} // Disable built-in filter to use custom search handling
        />
        {status === "error" && errorMessage && (
          <p
            className={clsx(
              isFlipInput ? "position-absolute" : "",
              "mb-0 mt-2 d-flex fw-400 text-red small error-msg-text"
            )}
          >
            {errorMessage}
          </p>
        )}
      </div>
    </>
  );
}
