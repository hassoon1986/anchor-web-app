import { AddressProvider } from '@anchor-protocol/anchor-js/address-provider/provider';
import { useWallet } from '@anchor-protocol/wallet-provider';
import { Msg, StdFee } from '@terra-money/terra.js';
import { transactionFee } from 'env';
import React from 'react';
import { useAddressProvider } from '../providers/address-provider';
import extension, { PostResponse } from '../terra/extension';

interface ActionContainerProps {
  render: (execute: ActionExecute) => React.ReactElement;
}

export type ActionExecute = (fabricated: Fabricated) => Promise<PostResponse>;

export type Fabricated = (ap: AddressProvider) => Msg[];

export const ActionContainer: React.FunctionComponent<ActionContainerProps> = ({
  render,
}) => {
  const addressProviders = useAddressProvider();
  const { status, connect } = useWallet();

  const execute = (fabricated: Fabricated) =>
    new Promise<PostResponse>((resolve, reject) => {
      extension.post(
        {
          ...transactionFee,
          msgs: fabricated(addressProviders),
        },
        (response) => {
          console.log('action.tsx..()', response);
          if (!response.success) reject(response.error);
          else resolve(response);
        },
      );
    });

  switch (status.status) {
    case 'ready':
      return render(execute);
    case 'not_connected':
      return <button onClick={connect}>Connect Wallet</button>;
    default:
      return null;
  }
};
