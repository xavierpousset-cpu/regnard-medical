import { relations } from "drizzle-orm";
import { users, forumTopics, forumPosts } from "./schema";

export const usersRelations = relations(users, ({ many }) => ({
  forumTopics: many(forumTopics),
  forumPosts: many(forumPosts),
}));

export const forumTopicsRelations = relations(forumTopics, ({ one, many }) => ({
  creator: one(users, {
    fields: [forumTopics.createdBy],
    references: [users.id],
  }),
  posts: many(forumPosts),
}));

export const forumPostsRelations = relations(forumPosts, ({ one }) => ({
  topic: one(forumTopics, {
    fields: [forumPosts.topicId],
    references: [forumTopics.id],
  }),
  author: one(users, {
    fields: [forumPosts.userId],
    references: [users.id],
  }),
}));
