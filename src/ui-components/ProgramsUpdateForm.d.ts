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
export declare type ProgramsUpdateFormInputValues = {
    name?: string;
    description?: string;
    image?: string;
    day?: string;
    time?: string;
};
export declare type ProgramsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    day?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgramsUpdateFormOverridesProps = {
    ProgramsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    day?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProgramsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProgramsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    programs?: any;
    onSubmit?: (fields: ProgramsUpdateFormInputValues) => ProgramsUpdateFormInputValues;
    onSuccess?: (fields: ProgramsUpdateFormInputValues) => void;
    onError?: (fields: ProgramsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgramsUpdateFormInputValues) => ProgramsUpdateFormInputValues;
    onValidate?: ProgramsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProgramsUpdateForm(props: ProgramsUpdateFormProps): React.ReactElement;
