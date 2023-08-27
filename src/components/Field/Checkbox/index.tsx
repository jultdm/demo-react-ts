import { UseFormRegister, FieldValues } from "react-hook-form";

const Input = ({ name, register, label='' } : { name: string, label?: string, register: UseFormRegister<FieldValues> }) => (
    <div><input className="field field--checkbox" type="checkbox" {...register(name)} /> {label}</div>
);

export default Input;