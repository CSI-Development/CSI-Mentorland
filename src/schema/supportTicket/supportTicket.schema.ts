import z from 'zod';

export const SupportTicketData = z.object({
    subject: z.string(),
    description: z.string(),
    source: z.string(),
    priority: z.string(),
  });

export type ISupportTicket = z.TypeOf<typeof SupportTicketData>;
