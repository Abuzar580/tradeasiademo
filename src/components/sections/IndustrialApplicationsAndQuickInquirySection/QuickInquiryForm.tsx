"use client";

import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { inputStyle, options } from "./constant";
import { ArrowIcon } from "@/icons";

type FormValues = {
    productName: string;
    qty: string;
    selectOption: string;
    email: string;
    message: string;
};

export function QuickInquiryForm() {
    const {
        handleSubmit,
        control,
        register,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            productName: "",
            qty: "",
            selectOption: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log("Form submitted:", data);
    };

    return (
        <section>
            <div className="w-full h-full rounded-[var(--industrial-applications-form-radius-mobile)] md:rounded-[var(--industrial-applications-form-radius-desktop)] bg-[var(--industrial-applications-form-bg)] px-[var(--industrial-applications-form-padding-x)] py-[var(--industrial-applications-form-padding-y)] shadow-[var(--industrial-applications-form-shadow-mobile)] md:shadow-[var(--industrial-applications-form-shadow-desktop)] flex flex-col gap-[var(--industrial-applications-form-gap)]">
                <form className="flex-1 flex flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        {/* Product Name */}
                        <div className="flex flex-col pb-4">
                            <label className="body-regular text-[var(--industrial-applications-form-label-color)] uppercase">
                                PRODUCT NAME *
                            </label>

                            <input
                                type="text"
                                placeholder="Enter product name"
                                {...register("productName", { required: "Product name is required" })}
                                className={`${inputStyle} ${errors.productName ? "border-[var(--industrial-applications-form-error-color)]" : ""}`}
                            />

                            {errors.productName && (
                                <p className="text-[var(--industrial-applications-form-error-color)] text-[var(--industrial-applications-form-error-size)] m-0"> {errors.productName.message} </p>
                            )}
                        </div>

                        {/* Quantity */}
                        <div className="flex flex-col pb-4">
                            <label className="body-regular text-[var(--industrial-applications-form-label-color)] uppercase">
                                QTY *
                            </label>

                            <input
                                type="text"
                                placeholder="Enter quantity"
                                {...register("qty", { required: "Quantity is required" })}
                                className={`${inputStyle} ${errors.qty ? "border-[var(--industrial-applications-form-error-color)]" : ""}`}
                            />

                            {errors.qty && (
                                <p className="text-[var(--industrial-applications-form-error-color)] text-[var(--industrial-applications-form-error-size)] m-0"> {errors.qty.message} </p>
                            )}
                        </div>

                        {/* Select Option */}
                        <div className="flex flex-col pb-4 relative">
                            <label className="body-regular text-[var(--industrial-applications-form-label-color)] uppercase">
                                SELECT
                            </label>

                            <div className="relative">
                                <select
                                    {...register("selectOption", { required: "Please select an option" })}
                                    className={`${inputStyle} bg-[var(--industrial-applications-form-select-bg)] appearance-none w-full`}
                                >
                                    <option value="" className="absolute text-[var(--industrial-applications-form-select-option-color)] bg-[var(--industrial-applications-form-select-bg)] max-w-[50px]!">
                                        Select an option
                                    </option>
                                    {options.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                            className="text-[var(--industrial-applications-form-select-option-selected-color)] bg-[var(--industrial-applications-form-select-bg)] max-w-[50px]!"
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>

                                <div className="absolute inset-y-0 right-[19px] flex items-center pointer-events-none">
                                    <ArrowIcon className="w-3 h-3 text-[var(--industrial-applications-form-arrow-color)] transform rotate-90" />
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col pb-4">
                            <label className="body-regular text-[var(--industrial-applications-form-label-color)] uppercase">
                                EMAIL *
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                {...register("email", { required: "Email is required" })}
                                className={`${inputStyle} ${errors.email ? "border-[var(--industrial-applications-form-error-color)]" : ""}`}
                            />

                            {errors.email && (
                                <p className="text-[var(--industrial-applications-form-error-color)] text-[var(--industrial-applications-form-error-size)] m-0"> {errors.email.message} </p>
                            )}
                        </div>

                        {/* Message */}
                        <div className="flex flex-col pb-4">
                            <label className="body-regular text-[var(--industrial-applications-form-label-color)] uppercase">
                                MESSAGE
                            </label>

                            <textarea
                                {...register("message")}
                                rows={6}
                                placeholder="Enter your message"
                                className={`${inputStyle} h-auto body-regular p-3`}
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex justify-center mt-[var(--industrial-applications-form-submit-margin-top)]">
                        <Button variant="primary" type="submit" className="w-full">
                            Submit Inquiry
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}