import * as React from "react";
import { Select } from "baseui/select";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const engine = new Styletron();

const SelectComponent = () => {
  const [value, setValue] = React.useState([]);

  return (
    <StyletronProvider value={engine}>
      <Select
        options={[
          { label: "AliceBlue", id: "#F0F8FF" },
          { label: "AntiqueWhite", id: "#FAEBD7" },
          { label: "Aqua", id: "#00FFFF" },
          { label: "Aquamarine", id: "#7FFFD4" },
          { label: "Azure", id: "#F0FFFF" },
          { label: "Beige", id: "#F5F5DC" }
        ]}
        value={value}
        placeholder="Select color"
        onChange={params => setValue(params.value)}
        overrides={{
          Dropdown: {
            style: ({ $theme }) => ({
              outline: `${$theme.colors.warning200} solid`,
              backgroundColor: $theme.colors.warning200
            })
          },
          Input: {
            style: ({ $theme }) => ({
              outline: `${$theme.colors.warning200} solid`,
              backgroundColor: $theme.colors.warning200
            })
          }
        }}
      />
    </StyletronProvider>
  );
}

export default SelectComponent;