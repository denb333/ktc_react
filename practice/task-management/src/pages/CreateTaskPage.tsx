import * as yup from 'yup';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createTask } from '../services/index';
import { useNavigate } from 'react-router';
import type { Task } from '../types/type';

interface IFormInput {
  title: string;
  start_date: string;
  due_date?: string | null;
  description?: string | null;
  status: 'to_do' | 'in_progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee_id?: number | null;
}

const schema: yup.ObjectSchema<IFormInput> = yup.object({
  title: yup.string().required('Title is required').min(3).max(100),
  start_date: yup.string().required('Start date is required').matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be YYYY-MM-DD'),
  due_date: yup
    .string()
    .nullable()
    .notRequired()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be YYYY-MM-DD')
    .test('due_date-after-start_date', 'Due date must be after start date', function (value) {
      if (!value) return true;
      const { start_date } = this.parent;
      return new Date(value) >= new Date(start_date);
    }),
  description: yup.string().nullable().notRequired().max(500),
  status: yup.mixed<'to_do' | 'in_progress' | 'done'>().required().oneOf(['to_do', 'in_progress', 'done']),
  priority: yup.mixed<'low' | 'medium' | 'high'>().required().oneOf(['low', 'medium', 'high']),
  assignee_id: yup.number().typeError('Assignee ID must be a number').nullable().notRequired().min(1),
});

export default function CreateTaskPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      start_date: '',
      due_date: '',
      description: '',
      status: 'to_do',
      priority: 'medium',
      assignee_id: null,
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await createTask(data as unknown as Task);
      navigate('/ourtask');
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Failed to create task. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 fixed top-20 left-0 right-0">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">📝 Tạo Công Việc Mới</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-xl p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Tiêu đề
            </label>
            <input
              {...register('title')}
              type="text"
              id="title"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập tiêu đề"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Mô tả
            </label>
            <input
              {...register('description')}
              type="text"
              id="description"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập mô tả công việc"
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>

          {/* Start Date */}
          <div>
            <label htmlFor="start_date" className="block text-sm font-medium text-gray-700 mb-1">
              Ngày bắt đầu
            </label>
            <input
              {...register('start_date')}
              type="date"
              id="start_date"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
            />
            {errors.start_date && <p className="text-red-500 text-sm mt-1">{errors.start_date.message}</p>}
          </div>

          {/* Due Date */}
          <div>
            <label htmlFor="due_date" className="block text-sm font-medium text-gray-700 mb-1">
              Hạn chót
            </label>
            <input
              {...register('due_date')}
              type="date"
              id="due_date"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
            />
            {errors.due_date && <p className="text-red-500 text-sm mt-1">{errors.due_date.message}</p>}
          </div>

          {/* Assignee ID */}
          <div>
            <label htmlFor="assignee_id" className="block text-sm font-medium text-gray-700 mb-1">
              Người được giao (ID)
            </label>
            <input
              {...register('assignee_id', { valueAsNumber: true })}
              type="number"
              id="assignee_id"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập ID người được giao"
            />
            {errors.assignee_id && <p className="text-red-500 text-sm mt-1">{errors.assignee_id.message}</p>}
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Trạng thái
            </label>
            <select
              {...register('status')}
              id="status"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
            >
              <option value="to_do">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
            {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
          </div>

          {/* Priority */}
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
              Mức độ ưu tiên
            </label>
            <select
              {...register('priority')}
              id="priority"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
            >
              <option value="low">Thấp</option>
              <option value="medium">Trung bình</option>
              <option value="high">Cao</option>
            </select>
            {errors.priority && <p className="text-red-500 text-sm mt-1">{errors.priority.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          ✅ Tạo công việc
        </button>
      </form>
    </div>
  );
}
