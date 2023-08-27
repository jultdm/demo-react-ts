import { UseFormRegister, FieldValues } from "react-hook-form";

const Input = ({ name, register, type='text', label='' } : { name: string, register: UseFormRegister<FieldValues>, type?: string, label?: string }) => (
    <input className="field field--input" type={type} placeholder={label} {...register(name)} />
);

export default Input;