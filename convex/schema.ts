import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    images: v.optional(v.string()),
    role: v.union(v.literal("candidate"), v.literal("interviewer")), //admin | user
    clerkId: v.string(),
  }).index("by_clerk_id", ["clerkId"]),
});
