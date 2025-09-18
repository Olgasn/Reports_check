import * as yup from 'yup';
import { InferType } from 'yup';

export const AddStudentSchema = yup.object({
  name: yup
    .string()
    .required('Обязательный параметр')
    .min(2, 'Название должен быть не менее 2 символов'),
  surname: yup
    .string()
    .required('Обязательный параметр')
    .min(2, 'Название должен быть не менее 2 символов'),
  middlename: yup
    .string()
    .required('Обязательный параметр')
    .min(2, 'Название должен быть не менее 2 символов'),
});

export type AddStudentFormData = InferType<typeof AddStudentSchema>;
