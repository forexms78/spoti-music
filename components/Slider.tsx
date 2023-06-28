"use client";

import * as RadixSlider from "@radix-ui/react-slider";
interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value = 1, onChange }) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };
  return <RadixSlider.Root></RadixSlider.Root>;
};

export default Slider;
