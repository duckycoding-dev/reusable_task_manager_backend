import { z } from 'zod';
import {
  statusOptions,
  priorityOptions,
  type InsertTask,
  type Task,
  type UpdateTask,
  recurringOptions,
} from './tasks.db';

// 📌 Query Params Schemas
export const getTasksQuerySchema = z.object({
  projectId: z.string().uuid().optional(),
  status: z.enum(statusOptions).optional(),
  priority: z.enum(priorityOptions).optional(),
  dueDate: z.string().datetime().optional(),
});

// 📌 Path Params Schemas
export const taskIdParamSchema = z.object({
  taskId: z.string().uuid('Task id should be a valid uuid'),
});
export const projectIdParamSchema = z.object({ projectId: z.string().uuid() });
export const getProjectTasksParamsSchema = z.object({
  projectId: z.string().uuid(),
});

export const taskStatusSchema = z.enum(statusOptions);
export const taskPrioritySchema = z.enum(priorityOptions);
export const taskRecurringSchema = z.enum(recurringOptions);

// 📌 Types
export type GetTasksQuery = z.infer<typeof getTasksQuerySchema>;
export type TaskIdParam = z.infer<typeof taskIdParamSchema>;
export type ProjectIdParam = z.infer<typeof projectIdParamSchema>;
export type GetProjectTasksParams = z.infer<typeof getProjectTasksParamsSchema>;
export type TaskStatusOption = z.infer<typeof taskStatusSchema>;
export type TaskPriorityOption = z.infer<typeof taskPrioritySchema>;
export type TaskRecurringOption = z.infer<typeof taskRecurringSchema>;

export type GetTasksResponse = Task[];
export type GetTaskResponse = Task;
export type CreateTaskRequest = InsertTask;
export type CreateTaskResponse = Task;
export type UpdateTaskRequest = UpdateTask;
export type UpdateTaskResponse = Task;
export type DeleteTaskResponse = { success: boolean };
export type MarkTaskDoneResponse = Task;
export type GetProjectTasksResponse = Task[];
export type GetOverdueTasksResponse = Task[];
