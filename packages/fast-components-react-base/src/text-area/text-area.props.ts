import * as React from "react";
import {
    ManagedClasses,
    TextAreaClassNameContract,
} from "@microsoft/fast-components-class-name-contracts-base";

export interface TextAreaManagedClasses
    extends ManagedClasses<TextAreaClassNameContract> {}
export interface TextAreaUnhandledProps
    extends React.HTMLAttributes<HTMLTextAreaElement> {}
export interface TextAreaHandledProps extends TextAreaManagedClasses {
    /**
     * The disabled state
     */
    disabled: boolean;

    /**
     * Placeholder text for input field
     */
    placeholder: string;

    /**
     * Readonly
     */
    readonly: boolean;

    /**
     * Required
     */
    required: boolean;
}

export type TextAreaProps = TextAreaHandledProps & TextAreaUnhandledProps;
