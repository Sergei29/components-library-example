import React, { ComponentProps } from "react";

import { Button, ButtonProps } from "../Button";

import "./TextInput.css";

export interface ITextInputProps extends ComponentProps<"input"> {
  children: React.ReactNode;
}

const TextInput = ({
  children,
  className,
  ...restInputProps
}: ITextInputProps): JSX.Element => {
  return (
    <div className="storybook-text-input">
      <input type="text" {...restInputProps} />
      {children}
    </div>
  );
};

TextInput.Button = (props: ButtonProps) => <Button {...props} />;

export { TextInput };
