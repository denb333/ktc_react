import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { SubmitHandler } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../Context/context';

// interface IFormInput {
//     name: string;
//     email: string;
//     age: number | null;

// }
const userSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
    email: yup
        .string()
        .email("Email is invalid")
        .required("Email is required"),
    age: yup
        .number()
        .transform((value, originalValue) =>
            originalValue === "" || originalValue === null ? null : value
        )
        .nullable()
        .notRequired()
        .test("is-valid-age", "Age must be positive", (value) => {
        if (value === null || value === undefined) return true; 
            return value > 0;
        }),
        // i did search gpt for age test part
});

export default function UserForm() {
    const { addUser } = useContext(UserContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<any>({
        resolver: yupResolver(userSchema),
    });

    const onSubmit: SubmitHandler<any> = (data) => {
        console.log("Submit data successfully: ", data);
        addUser(data);

        reset();
    };
    //    console.log("errors.age: ", errors.age.message);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 border border-gray-300 rounded-md mt-20">
            <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                    {...register("name")}
                    className="border px-2 py-1 w-full"
                    placeholder="Enter name"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message as string}</p>
                )}
            </div>

            <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input
                    {...register("email")}
                    className="border px-2 py-1 w-full"
                    placeholder="Enter email"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message as string}</p>
                )}
            </div>

            <div className="mb-4">
                <label className="block mb-1">Age (optional)</label>
                <input
                    {...register("age")}
                    type="number"
                    className="border px-2 py-1 w-full"
                    placeholder="Enter age"
                />
                {errors.age && (
                    <p className="text-red-500 text-sm">{errors.age.message as string} </p>

                )}
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-auto block"
            >
                Submit
            </button>
        </form>
    )
}