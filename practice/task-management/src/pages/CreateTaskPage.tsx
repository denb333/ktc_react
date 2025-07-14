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
      alert('Tạo công việc thành công');
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Failed to create task. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6 fixed top-20 left-0 right-0">
      <h2 className="text-2xl font-bold text-center text-gray-800">📝 Tạo Công Việc Mới</h2>

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

      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
        ✅ Tạo công việc
      </button>
    </form>

  );
}
