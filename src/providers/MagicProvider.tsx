/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client"
import { getChainId, getNetworkUrl } from '@/utils/network';
import { OAuthExtension } from '@magic-ext/oauth';
import { Magic as MagicBase } from 'magic-sdk';
import { type ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Web3 } from 'web3';

export type Magic = MagicBase<OAuthExtension[]>;

type MagicContextType = {
  magic: Magic | null;
  web3: any;
};

const MagicContext = createContext<MagicContextType>({
  magic: null,
  web3: null,
});

export const useMagic = () => useContext(MagicContext);

const MagicProvider = ({ children }: { children: ReactNode }) => {
  const [magic, setMagic] = useState<Magic | null>(null);
  const [web3, setWeb3] = useState<any>(null);
//   const [web3, setWeb3] = useState<typeof Web3 | null>(null);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MAGIC_API_KEY) {
      const magic = new MagicBase(process.env.NEXT_PUBLIC_MAGIC_API_KEY, {
        network: {
          rpcUrl: getNetworkUrl(),
          chainId: getChainId(),
        },
        extensions: [new OAuthExtension()],
      });

      setMagic(magic);
      setWeb3(new Web3((magic as any).rpcProvider));
    }
  }, []);

  const value = useMemo(() => {
    return {
      magic,
      web3,
    };
  }, [magic, web3]);

  return <MagicContext.Provider value={value}>{children}</MagicContext.Provider>;
};

export default MagicProvider;
