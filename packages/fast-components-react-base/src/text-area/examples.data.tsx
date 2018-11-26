import * as React from "react";
import schema from "./text-area.schema.json";
import Documentation from "./.tmp/documentation";
import { ComponentFactoryExample } from "@microsoft/fast-development-site-react";
import TextArea, {
    TextAreaHandledProps,
    TextAreaManagedClasses,
    TextAreaUnhandledProps,
} from "./text-area";

const examples: ComponentFactoryExample<TextAreaHandledProps> = {
    name: "Text area",
    component: TextArea,
    schema: schema as any,
    documentation: <Documentation />,
    detailData: {
        managedClasses: {
            textArea: "textarea",
        },
        disabled: false,
        placeholder: "placeholder text",
        readonly: false,
        required: false,
    },
    data: [
        {
            managedClasses: {
                textArea: "textarea",
            },
            disabled: false,
            placeholder: "placeholder text",
            readonly: false,
            required: false,
        },
        {
            managedClasses: {
                textArea: "textarea",
            },
            disabled: true,
            placeholder: "placeholder text",
            readonly: false,
            required: false,
        },
    ],
};

export default examples;
