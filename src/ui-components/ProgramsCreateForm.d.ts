/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProgramsCreateFormInputValues = {
    name?: string;
    description?: string;
    image?: string;
    day?: string;
    time?: string;
};
export declare type ProgramsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    day?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgramsCreateFormOverridesProps = {
    ProgramsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    day?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProgramsCreateFormProps = React.PropsWithChildren<{
    overrides?: ProgramsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProgramsCreateFormInputValues) => ProgramsCreateFormInputValues;
    onSuccess?: (fields: ProgramsCreateFormInputValues) => void;
    onError?: (fields: ProgramsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProgramsCreateFormInputValues) => ProgramsCreateFormInputValues;
    onValidate?: ProgramsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProgramsCreateForm(props: ProgramsCreateFormProps): React.ReactElement;
