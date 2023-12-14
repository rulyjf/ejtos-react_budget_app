import React, { useContext, useState } from "react";
import Select, { components } from "react-select";
import { AppContext } from "../context/AppContext";

const Currency = (prompt) => {
  const { currency, dispatch } = useContext(AppContext);
  const [newCurrency, setnewCurrency] = useState(currency);

  const handleCurrencyChange = (event) => {
    updateCurrency(event.value);
    setnewCurrency(event.value);
  };

  const updateCurrency = async (curr) => {
    await dispatch({
      type: "CHG_CURRENCY",
      payload: curr,
    });
  };

  const VALUE_START = "Currency( ";
  const VALUE_END = " )";
  const currencyOptions = [
    { value: "$", label: "$ Dollar" },
    { value: "£", label: "£ Pound" },
    { value: "€", label: "€ Euro" },
    { value: "₹", label: "₹ Ruppee" },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#A5E2A0",
      color: "#FFFFFF",
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "yellow" : "green",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "red" : "yellow",
      },
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      background: "#A5E2A0",
      padding: 0,
    }),
    singleValue: (provided) => ({
      ...provided,
      height: "100%",
      color: "#FFFFFF",
      paddingTop: "3px",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
      // const color = chroma(data.color);

      ...styles,
      backgroundColor: isFocused ? "#FFFFFF" : null,
      color: "#333333",
    }),
  };

  return (
    <div className="alert alert-success">
      <Select
        value={currencyOptions.find(function (option) {
          return option.value === newCurrency.value;
        })}
        options={currencyOptions}
        styles={customStyles}
        Placeholder="NONE"
        isSearchable={false}
        components={{
          SingleValue: ({ children, ...props }) => {
            return (
              <components.SingleValue {...props}>
                {VALUE_START + children + VALUE_END}
              </components.SingleValue>
            );
          },
          Placeholder: ({ children, ...props }) => {
            return (
              <components.Placeholder {...props}>
                {VALUE_START + children + VALUE_END}
              </components.Placeholder>
            );
          },
          IndicatorSeparator: () => null,
        }}
        onChange={handleCurrencyChange}
      />
    </div>
  );
};

export default Currency;
