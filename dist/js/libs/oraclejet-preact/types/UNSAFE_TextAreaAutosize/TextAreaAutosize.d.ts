/**
 * @license
 * Copyright (c) %FIRST_YEAR% %CURRENT_YEAR%, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { ComponentProps, Ref } from 'preact';
import { FocusableHandle } from '../hooks/UNSAFE_useFocusableTextField';
import { TextField, TextFieldInput } from '../UNSAFE_TextField';
import { InlineUserAssistance } from '../UNSAFE_UserAssistance';
import { CountUnit } from '../hooks/UNSAFE_useLengthFilter';
import { Size } from '../utils/UNSAFE_size';
declare type PickedPropsFromTextField = Pick<ComponentProps<typeof TextField>, 'id'>;
declare type PickedPropsFromTextFieldTextArea = Pick<ComponentProps<typeof TextFieldInput>, 'autoComplete' | 'autoFocus' | 'placeholder' | 'isRequired' | 'role' | 'textAlign' | 'value' | 'onInput' | 'onCommit'>;
declare type PickedPropsFromInlineUserAssistance = Pick<ComponentProps<typeof InlineUserAssistance>, 'assistiveText' | 'helpSourceLink' | 'helpSourceText' | 'isRequiredShown' | 'messages' | 'userAssistanceDensity'>;
declare type Props = PickedPropsFromTextField & PickedPropsFromTextFieldTextArea & PickedPropsFromInlineUserAssistance & {
    isDisabled?: boolean;
    isReadonly?: boolean;
    label: string;
    labelEdge?: 'inside' | 'start' | 'top' | 'none';
    labelStartWidth?: Size;
    minRows?: number;
    maxRows?: number;
    maxLength?: number;
    maxLengthUnit?: CountUnit;
};
export declare const TextAreaAutosize: import("preact").FunctionalComponent<Omit<Props, "ref"> & {
    ref?: Ref<FocusableHandle> | undefined;
}>;
export {};
