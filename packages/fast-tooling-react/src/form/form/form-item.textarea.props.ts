import FormItemCommon from "./form-item.props";

/**
 * Textarea class name contract
 */
export interface FormItemTextareaClassNameContract {
    formItemTextarea: string;
    formItemTextarea__disabled: string;
    formItemTextarea_control: string;
    formItemTextarea_controlLabel: string;
    formItemTextarea_controlTextarea: string;
    formItemTextarea_softRemove: string;
    formItemTextarea_softRemoveInput: string;
}

export interface FormItemTextareaProps extends FormItemCommon {
    /**
     * The unique index for the section
     */
    index: number;

    /**
     * The number of rows to assign to the textarea
     */
    rows?: number;
}
