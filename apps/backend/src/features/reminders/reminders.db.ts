import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';
import { tasks } from '../tasks/tasks.db';
import { users } from '../auth/auth.db';
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from 'drizzle-zod';
import { z } from 'zod';

// 🚀 Reminders Table (Task Notifications)
export const reminders = pgTable('reminders', {
  id: uuid('id').defaultRandom().primaryKey(),
  taskId: uuid('task_id').references(() => tasks.id, { onDelete: 'cascade' }),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }), // From BetterAuth
  title: text('title').notNull(),
  content: text('content').notNull(),
  remindAt: timestamp('remind_at').notNull(),
});

// 📌 Select Schema (for response data)
export const selectReminderSchema = createSelectSchema(reminders);

// 📌 Insert Schema (for creating reminders)
export const insertReminderSchema = createInsertSchema(reminders).omit({
  id: true, // ID is auto-generated
  userId: true,
});

// 📌 Update Schema (for partial updates)
export const updateReminderSchema = createUpdateSchema(reminders).omit({
  id: true,
  userId: true,
});

// 🔹 Types
export type Reminder = z.infer<typeof selectReminderSchema>;
export type InsertReminder = z.infer<typeof insertReminderSchema>;
export type UpdateReminder = z.infer<typeof updateReminderSchema>;
