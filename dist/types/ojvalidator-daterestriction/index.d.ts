/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import { DateTimeConverter } from '../ojconverter-datetime';
import Validator = require('../ojvalidator');
declare class DateRestrictionValidator implements Validator<string> {
    constructor(options?: DateRestrictionValidator.ValidatorOptions);
    getHint(): string | null;
    validate(value: string): void;
}
declare namespace DateRestrictionValidator {
    // tslint:disable-next-line interface-over-type-literal
    type DayFormatterInput = {
        date: number;
        fullYear: number;
        month: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type DayFormatterOutput = {
        className?: string;
        disabled?: boolean;
        tooltip?: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type ValidatorOptions = {
        converter?: DateTimeConverter;
        dayFormatter?: ((param0: DayFormatterInput) => DayFormatterOutput | null | 'all');
        messageDetail?: string;
        messageSummary?: string;
    };
}
export = DateRestrictionValidator;
