"use client";
import * as yup from "yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import type { Task } from "../../../types/auth";
import apiClient from "../../../../../lib/api-client-advanced";
import { useRouter } from "next/navigation";

interface IFormInput {
    title: string;
    start_date: string;
    due_date?: string | null;
    description?: string | null;
    status: "to_do" | "in_progress" | "done";
    priority: "low" | "medium" | "high";
    assignee_id?: number | null;
}

const schema: yup.ObjectSchema<IFormInput> = yup.object({
    title: yup.string().required().min(3).max(100),
    start_date: yup
        .string()
        .required()
        .matches(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD"),
    due_date: yup
        .string()
        .nullable()
        .notRequired()
        .matches(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD")
        .test("due_date-after-start_date", "Due date must be after start date", function (value) {
            if (!value) return true;
            const { start_date } = this.parent;
            return new Date(value) >= new Date(start_date);
        }),
    description: yup.string().nullable().notRequired().max(500),
    status: yup.mixed<"to_do" | "in_progress" | "done">().required().oneOf(["to_do", "in_progress", "done"]),
    priority: yup.mixed<"low" | "medium" | "high">().required().oneOf(["low", "medium", "high"]),
    assignee_id: yup.number().nullable().notRequired().min(1),
});

export default function UpdateTaskPage() {
    const { id } = useParams();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(schema),
        defaultValues: {
            title: "",
            start_date: "",
            due_date: "",
            description: "",
            status: "to_do",
            priority: "medium",
            assignee_id: null,
        },
        mode: "onChange",
    });

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const task = await apiClient.get(`/workspaces/tasks/${id}`) as any;
                reset({
                    title: task.title,
                    start_date: task.start_date?.split("T")[0] || "",
                    due_date: task.due_date?.split("T")[0] || "",
                    description: task.description || "",
                    status: task.status,
                    priority: task.priority,
                    assignee_id: task.assignee_id || null,
                });
            } catch (error) {
                console.error("Error fetching task:", error);
                alert("Không tìm thấy task hoặc lỗi server!");
                router.push("/ourtask");
            }
        };
        if (id) fetchTask();
    }, [id, reset, router]);

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            await apiClient.put(`/workspaces/tasks/${id}`, data);
            alert("✅ Cập nhật task thành công!");
            router.push("/ourtask");
        } catch (error) {
            console.error("Error updating task:", error);
            alert("❌ Lỗi khi cập nhật task. Vui lòng thử lại.");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6 fixed top-20 left-0 right-0">
            <h2 className="text-2xl font-bold text-center text-gray-800">📝 Chỉnh sửa Công Việc</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tiêu đề</label>
                    <input {...register('title')} className="w-full border rounded-lg p-2" placeholder="Nhập tiêu đề" />
                    {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Người được giao (ID)</label>
                    <input {...register('assignee_id', { valueAsNumber: true })} type="number" className="w-full border rounded-lg p-2" placeholder="Nhập ID người được giao" />
                    {errors.assignee_id && <p className="text-red-500">{errors.assignee_id.message}</p>}
                </div>


                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Mô tả</label>
                    <textarea {...register('description')} rows={4} className="w-full border rounded-lg p-2 resize-none" placeholder="Nhập mô tả công việc"></textarea>
                    {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Ngày bắt đầu</label>
                    <input {...register('start_date')} type="date" className="w-full border rounded-lg p-2" />
                    {errors.start_date && <p className="text-red-500">{errors.start_date.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Hạn chót</label>
                    <input {...register('due_date')} type="date" className="w-full border rounded-lg p-2" />
                    {errors.due_date && <p className="text-red-500">{errors.due_date.message}</p>}
                </div>



                <div>
                    <label className="block text-sm font-medium text-gray-700">Trạng thái</label>
                    <select {...register('status')} className="w-full border rounded-lg p-2">
                        <option value="to_do">To Do</option>
                        <option value="in_progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                    {errors.status && <p className="text-red-500">{errors.status.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Mức độ ưu tiên</label>
                    <select {...register('priority')} className="w-full border rounded-lg p-2">
                        <option value="low">Thấp</option>
                        <option value="medium">Trung bình</option>
                        <option value="high">Cao</option>
                    </select>
                    {errors.priority && <p className="text-red-500">{errors.priority.message}</p>}
                </div>
            </div>
            <div className="flex flex-row justify-between space-x-4">
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
                    ✅ Cập nhật
                </button>
                <button type="button" onClick={() => router.push("/ourtask")} className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">
                    ❌ Hủy
                </button>
            </div>
        </form>
    );
}
