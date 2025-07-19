import React from "react";
import { useForm } from "react-hook-form";

const FormBuilder = ({ schema, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const getValidationRules = (field) => {
    const rules = {};
    if (field.required) {
      rules.required = `${field.label} is required`;
    }
    if (field.validation) {
      Object.assign(rules, field.validation);
    }
    return rules;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4 p-4"
    >
      {schema.map((field) => (
        <div key={field.name} className="relative w-full">
          <div
            className={`border-2 w-full h-[56px] relative p-1 pb-3 rounded-xl transition-all ${
              errors[field.name]
                ? "border-red-400"
                : "border-[#0c363c42] focus-within:border-[#0C363C]"
            }`}
          >
            <input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name, getValidationRules(field))}
              className="h-full w-full pt-7 pb-2 pl-2 text-base border-none outline-none bg-transparent"
            />
            <label
              htmlFor={field.name}
              className="absolute top-1 left-2 text-[#0c363c99] text-sm font-semibold"
            >
              {field.label}
            </label>
          </div>
          {errors[field.name] && (
            <div className="bg-red-100 text-red-700 px-3 py-1 mt-1 rounded-md text-sm">
              {errors[field.name]?.message}
            </div>
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-2.5 bg-[#0C363C] text-white font-bold text-xl rounded-full transition  ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default FormBuilder;
