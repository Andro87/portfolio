"use client";

import styles from "./Form.module.scss";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export type FormData = {
    fullName: string;
    email: string;
    message: string;
};

export const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>();

    const [subMessage, setSubMessage] = useState(false);

    const onHandleSubimt = (data: FormData) => {
        const templateParam = {
            to_name: "Giusy",
            from_name: data.fullName,
            email: data.email,
            message: data.message
        };
        emailjs
            .send(
                "portfolio_service",
                "template_op7941n",
                templateParam,
                "DQSjs40WoC4ZaHx_3"
            )
            .then(() => {
                console.log("Email sent successfully");
                setSubMessage(true);
                reset();
            })
            .catch(error => {
                console.log("error", error);
            });
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit(onHandleSubimt)}>
            <div className={styles.input_container}>
                <label htmlFor="fullName">full name</label>
                <input
                    type="text"
                    id="fullName"
                    {...register("fullName", {
                        required: "This is required!"
                    })}
                />

                {errors.fullName && <p>{errors.fullName.message}</p>}
            </div>
            <div className={styles.input_container}>
                <label htmlFor="email">email</label>
                <input
                    type="text"
                    id="email"
                    {...register("email", {
                        required: "This is required!",
                        pattern: {
                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                            message: "Email is not valid"
                        }
                    })}
                />

                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className={styles.input_container}>
                <label htmlFor="message">message</label>
                <textarea
                    id="message"
                    rows={4}
                    {...register("message", {
                        required: "This is required!",
                        minLength: {
                            value: 50,
                            message: "Min length is 50"
                        }
                    })}
                ></textarea>
                {errors.message && <p>{errors.message.message}</p>}
            </div>

            <button
                title="contact me"
                className={styles.form_btn}
                type="submit"
            >
                contact me
            </button>
            {subMessage && <p className={styles.subMessage}>Thank you!</p>}
        </form>
    );
};
