import { useForm } from "react-hook-form";



interface IFormInput {
    status: string;
    priority: string;
}
type Props = {
    onSearch?: (filters: IFormInput) => void;
};
export default function SearchTasks({ onSearch }: Props) {
    // react form hook
    const {
        register,
        handleSubmit,
    } = useForm<IFormInput>({
        defaultValues: {
            status: '',
            priority: '',
        },
        mode: 'onChange',
    });

    const onSubmit = (data: IFormInput) => {
        if (onSearch && typeof onSearch === 'function') {
            onSearch(data);
        }
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-row flex-wrap items-end space-x-4"
        >
            {/* Status */}
            <div className="flex flex-col">
                <label htmlFor="status" className="text-sm text-gray-700 mb-1">
                    Status
                </label>
                <select
                    {...register('status')}
                    id="status"
                    name="status"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">All</option>
                    <option value="to_do">To Do</option>
                    <option value="in_progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
            </div>

            {/* Priority */}
            <div className="flex flex-col">
                <label htmlFor="priority" className="text-sm text-gray-700 mb-1">
                    Priority
                </label>
                <select
                    {...register('priority')}
                    id="priority"
                    name="priority"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div className="self-end">
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md shadow-sm transition"
                >
                    Search
                </button>
            </div>
        </form>
    );
}


