import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';
import { users } from '../auth/auth.db';

// 🚀 Projects Table (Groups tasks)
export const projects = pgTable('projects', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }), // From BetterAuth
  name: text('name').notNull(),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
