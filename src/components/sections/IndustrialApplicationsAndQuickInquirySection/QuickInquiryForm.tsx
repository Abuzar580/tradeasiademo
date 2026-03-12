"use client";

import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { inputStyle, options } from "./constant";

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
            <div className="w-full h-full rounded-[8px] md:rounded-[40px] bg-[var(--brand-white)] px-[25px] py-[32px] shadow-[var(--btn-shadow-soft)] md:shadow-[var(--box-shadow)] flex flex-col gap-[30px]">
                <form className="flex-1 flex flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        {/* Product Name */}
                        <div className="flex flex-col pb-5">
                            <label className="body-regular text-[var(--brand-primary-deep)] uppercase">
                                PRODUCT NAME *
                            </label>

                            <input
                                type="text"
                                placeholder="Enter product name"
                                {...register("productName", { required: "Product name is required" })}
                                className={`${inputStyle} ${errors.productName ? "border-[var(--brand-danger)]" : ""}`}
                            />

                            {errors.productName && (
                                <p className="text-[var(--brand-danger)] text-[var(--body-small-size)] m-0"> {errors.productName.message} </p>
                            )}
                        </div>

                        {/* Quantity */}
                        <div className="flex flex-col pb-5">
                            <label className="body-regular text-[var(--brand-primary-deep)] uppercase">
                                QTY *
                            </label>

                            <input
                                type="text"
                                placeholder="Enter quantity"
                                {...register("qty", { required: "Quantity is required" })}
                                className={`${inputStyle} ${errors.qty ? "border-[var(--brand-danger)]" : ""}`}
                            />

                            {errors.qty && (
                                <p className="text-[var(--brand-danger)] text-[var(--body-small-size)] m-0"> {errors.qty.message} </p>
                            )}
                        </div>

                        {/* Select Option */}
                        <div className="flex flex-col pb-5">
                            <label className="body-regular text-[var(--brand-primary-deep)] uppercase">
                                SELECT
                            </label>

                            <select
                                {...register("selectOption", { required: "Please select an option" })}
                                className={`${inputStyle} bg-[var(--brand-neutral-surface-3)]`}
                            >
                                <option value="">Select an option</option>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}> {option.label} </option>
                                ))}
                            </select>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col pb-5">
                            <label className="body-regular text-[var(--brand-primary-deep)] uppercase">
                                EMAIL *
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                {...register("email", { required: "Email is required" })}
                                className={`${inputStyle} ${errors.email ? "border-[var(--brand-danger)]" : ""}`}
                            />

                            {errors.email && (
                                <p className="text-[var(--brand-danger)] text-[var(--body-small-size)] m-0"> {errors.email.message} </p>
                            )}
                        </div>

                        {/* Message */}
                        <div className="flex flex-col">
                            <label className="body-regular text-[var(--brand-primary-deep)] uppercase">
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

                    <div className="flex justify-center mt-[30px]">
                        <Button variant="primary" type="submit" className="w-full">
                            Submit Inquiry
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}