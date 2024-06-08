import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { appointments } from "@/server/db/schemas/appointments";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: post
      // await ctx.db.insert(appointments).values({
      //   date: input.name,
      //   salonId: ""

      // });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.appointments.findFirst({
      orderBy: (appointments, { desc }) => [desc(appointments.createdAt)],
    });
  }),
});
