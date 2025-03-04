import * as React from 'react';
import { FormValuesShape, FormErrorsShape, FormInputProps, FormFieldProps, FormOptions } from '../../types';
export interface BriefFormProps {
    value: FormValuesShape;
    errors: FormErrorsShape;
    onChange: (value: FormValuesShape, errors: FormErrorsShape) => void;
    components: {
        [key: string]: React.ComponentType<FormInputProps>;
    };
    field: React.ComponentType<FormFieldProps>;
    registeredFields: React.RefObject<{
        [key: string]: any;
    }>;
    options?: FormOptions;
    children: any;
}
export declare const BriefForm: React.MemoExoticComponent<(props: BriefFormProps) => JSX.Element>;
