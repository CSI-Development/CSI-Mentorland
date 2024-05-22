import z from "zod";

export const addWallet = z.object({
  walletAddress: z.string(),
});

export type IWalletAddress = z.TypeOf<typeof addWallet>;
