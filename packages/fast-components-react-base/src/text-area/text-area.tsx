import * as React from "react";
import * as ReactDOM from "react-dom";
import Foundation, { HandledProps } from "@microsoft/fast-components-foundation-react";
import {
    TextAreaHandledProps,
    TextAreaManagedClasses,
    TextAreaUnhandledProps,
} from "./text-area.props";
import {
    ManagedClasses,
    TextAreaClassNameContract,
} from "@microsoft/fast-components-class-name-contracts-base";
import { get } from "lodash-es";

class TextArea extends Foundation<TextAreaHandledProps, TextAreaUnhandledProps, {}> {
    protected handledProps: HandledProps<TextAreaHandledProps> = {
        disabled: void 0,
        placeholder: void 0,
        readonly: void 0,
        required: void 0,
    };

    /**
     * Renders the component
     */
    public render(): React.ReactElement<HTMLInputElement> {
        return (
            <div>
                <input
                    {...this.unhandledProps()}
                    className={this.generateClassNames()}
                    disabled={this.props.disabled || null}
                    placeholder={this.props.placeholder || null}
                />
            </div>
        );
    }

    /**
     * Generates class names
     */
    protected generateClassNames(): string {
        return super.generateClassNames(get(this.props, "managedClasses.textArea"));
    }
}

export default TextArea;
export * from "./text-area.props";
export { TextAreaClassNameContract };
