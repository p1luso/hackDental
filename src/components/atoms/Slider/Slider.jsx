import React from "react";
import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/slider";

const Slider = ({
  id,
  onChange,
  onError,
  value = 30,
  min = 0,
  max = 100,
  step = 1,
  validators = [],
}) => {
  const handleChange = (value) => {
    handleError(value);
    onChange(id, value);
  };
  const handleError = (value) => {
    let error = "";
    for (const validator of validators) {
      error = validator(value);
      if (error !== "") break;
    }

    onError(id, error);
  };
  return (
    <ChakraSlider
      defaultValue={value}
      h={"34px"}
      value={value}
      onChange={handleChange}
      min={min}
      focusThumbOnChange={false}
      max={max}
    >
      <SliderTrack
        h={"8px"}
        borderRadius={"8px"}
        background={"var(--background-dark)"}
      >
        <SliderFilledTrack background={"var(--primary)"} />
      </SliderTrack>
      <SliderThumb
        bg={"var(--primary)"}
        border={"6px solid var(--primary-light)"}
        p={"12px"}
      />
    </ChakraSlider>
  );
};

export default Slider;
