import React from 'react';

import { UseFormRegister, FieldValues } from "react-hook-form";

const Select = ({ name, register, children } : { name: string, register: UseFormRegister<FieldValues>, children: React.ReactNode }) => (
    <select className="field field--select"  {...register(name)}>
        {children}
    </select>
);

export default Select;