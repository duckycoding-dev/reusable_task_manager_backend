import { pgTable, uuid, text, primaryKey } from 'drizzle-orm/pg-core';
import { tasks } from '../tasks/tasks.db';
import { users } from '../auth/auth.db';

// 🚀 Labels Table (Tags for Tasks)
export const labels = pgTable('labels', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }), // From BetterAuth
  name: text('name').notNull(),
  color: text('color'),
});

// 🚀 Many-to-Many: Task <-> Labels
export const taskLabels = pgTable(
  'task_labels',
  {
    taskId: uuid('task_id').references(() => tasks.id, { onDelete: 'cascade' }),
    labelId: uuid('label_id').references(() => labels.id, {
      onDelete: 'cascade',
    }),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.taskId, t.labelId] }), // Composite Primary Key
  }),
);
