import { pgTable, uuid, text, timestamp, boolean } from 'drizzle-orm/pg-core';
import { projects } from '../projects/projects.db';
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from 'drizzle-zod';
import { users } from '../auth/auth.db';
import { z } from 'zod';

// 🔹 Define Enums as `const` arrays
export const statusOptions = ['todo', 'in_progress', 'done'] as const;
export const priorityOptions = ['low', 'medium', 'high'] as const;
export const recurringOptions = ['daily', 'weekly', 'monthly', 'none'] as const;

// 🔹 Drizzle Schema Definition
export const tasks = pgTable('tasks', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }), // From BetterAuth
  projectId: uuid('project_id').references(() => projects.id, {
    onDelete: 'set null',
  }),
  title: text('title').notNull(),
  description: text('description'),
  status: text('status', { enum: statusOptions }).default('todo').notNull(),
  priority: text('priority', { enum: priorityOptions })
    .default('medium')
    .notNull(),
  dueDate: timestamp('due_date'),
  isRecurring: boolean('is_recurring').default(false),
  recurringInterval: text('recurring_interval', { enum: recurringOptions })
    .default('none')
    .notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// 🔹 Define a separate refine function
const validateRecurring = (data: {
  isRecurring: boolean;
  recurringInterval: string;
}) => {
  return data.isRecurring
    ? data.recurringInterval !== 'none'
    : data.recurringInterval === 'none';
};

const refineRecurringSchema = <T extends z.ZodTypeAny>(schema: T) =>
  schema.refine(validateRecurring, {
    message:
      'If isRecurring is false, recurringInterval must be "none". Otherwise, it must be one of "daily", "weekly", or "monthly".',
    path: ['recurringInterval'],
  });

// 📌 Select Schema (for response data)
export const selectTaskSchema = refineRecurringSchema(
  createSelectSchema(tasks),
);

// 📌 Insert Schema (for creating tasks)
export const insertTaskSchema = refineRecurringSchema(
  createInsertSchema(tasks).omit({
    id: true, // ID is auto-generated
    userId: true, // Derived from authentication
    createdAt: true,
    updatedAt: true,
  }),
);

// 📌 Update Schema (for partial updates)
export const updateTaskSchema = refineRecurringSchema(
  createUpdateSchema(tasks).omit({
    id: true,
    userId: true,
    createdAt: true,
  }),
);

// 🔹 Types
export type Task = z.infer<typeof selectTaskSchema>;
export type NewTask = z.infer<typeof insertTaskSchema>;
export type UpdateTask = z.infer<typeof updateTaskSchema>;
