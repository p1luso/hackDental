import React, { useEffect, useRef, useState } from "react";
import styles from "./input.module.css";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import ReactCountryFlag from "react-country-flag";
import { allCountries } from "country-telephone-data";

const rawList = allCountries.map((c) => ({
  name: c.name,
  code: c.iso2,
  dialCode: c.dialCode,
}));

const countryList = (() => {
  const esp = rawList.find((c) => c.code === "es");
  const others = rawList.filter((c) => c.code !== "es");
  return esp ? [esp, ...others] : rawList;
})();


export default function Input({
  id,
  onChange,
  onError,
  variant = "primary",
  label = "",
  labelColor = "standard",
  icon,
  size = "100%",
  errorMsg = "",
  setFocus = false,
  validators = [],
  onEnterPressed = () => {},
  value = "",
  ...otherProps
}) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [country, setCountry] = useState(
    countryList.find((c) => c.code === "es") || countryList[0]
  );

  // Forzar el prefijo al valor
  const sanitizePhone = (raw) => {
    const prefix = `+${country.dialCode}`;
    const stripped = raw.replace(new RegExp(`^\\+${country.dialCode}\\s*`), "");
    return `${prefix} ${stripped}`.trimEnd();
  };

  const handleChange = (e) => {
    let val = e.target.value;
    if (id === "phone") {
      val = sanitizePhone(val);
      inputRef.current.value = val;
    }
    onChange(id, val);
    // validación
    let err = "";
    for (const v of validators) {
      err = v(val);
      if (err) break;
    }
    onError(id, err);
  };

  const selectCountry = (c) => {
    setCountry(c);
    setDropdownOpen(false);
    const newVal = `+${c.dialCode} `;
    onChange(id, newVal);
    inputRef.current.value = newVal;
    inputRef.current.focus();
  };

  useEffect(() => {
    if (setFocus) inputRef.current.focus();
    else inputRef.current.blur();
  }, [setFocus]);

  const showSelector = id === "phone" && (isFocused || Boolean(value));

  return (
    <div
      className={`${styles[variant]} ${styles.container} ${
        errorMsg ? styles.error : ""
      }`}
    >
      {label && (
        <div className={styles.label}>
          <Text
            fontSize="14px"
            s={{ fontWeight: "500" }}
            color={errorMsg ? "error" : labelColor}
          >
            {label}
          </Text>
        </div>
      )}

      <div
        className={styles.inputWrapper}
        onBlur={() => setDropdownOpen(false)}
      >
        <input
          ref={inputRef}
          style={{ width: size }}
          className={styles.input}
          id={id}
          value={value}
          placeholder={id === "phone" ? `+${country.dialCode} ` : undefined}
          onFocus={() => {
            setIsFocused(true);
            if (id === "phone") setDropdownOpen(false);
          }}
          onBlur={() => setIsFocused(false)}
          onKeyDown={(e) => e.key === "Enter" && onEnterPressed()}
          onChange={handleChange}
          {...otherProps}
        />

        {icon && (
          <div className={styles.endIcon}>
            <Icon type={icon} size="1.2rem" color="green" />
          </div>
        )}

        {showSelector && (
          <button
            type="button"
            className={styles.countryBtn}
            onMouseDown={(e) => {
              e.preventDefault();
              setDropdownOpen((o) => !o);
            }}
          >
            <ReactCountryFlag
              countryCode={country.code.toUpperCase()}
              svg
              style={{ fontSize: "1.2em" }}
            />
            <Icon type="arrowDown" size="1rem" />
          </button>
        )}
        {showSelector && dropdownOpen && (
          <ul className={styles.countryList}>
            {countryList.map((c) => (
              <li
                key={c.code}
                className={styles.countryItem}
                onMouseDown={() => selectCountry(c)}
              >
                <ReactCountryFlag
                  countryCode={c.code.toUpperCase()}
                  svg
                  style={{ fontSize: "1em", marginRight: "8px" }}
                />
                <span style={{ fontSize: "0.9em" }}>
                  {c.name}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
