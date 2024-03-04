import { create } from "zustand";

import { LiskTransaction } from "../types/transaction.type";
import { getTransactions } from "../api/transactions.api";

interface BlocksState {
  txs: LiskTransaction[];
  loading: boolean;
  offset: number;
  total: number;
  error?: string;
  loadTransactions: () => void;
  initStore: () => void;
}

const LIMIT = 20;
const useTxStore = create<BlocksState>((set, get) => ({
  txs: [],
  loading: false,
  offset: 0,
  total: 0,
  error: undefined,
  loadTransactions: () => {
    set({
      loading: true,
    });
    getTransactions(get().offset, LIMIT)
      .then((resp) => {
        if ("data" in resp) {
          set((prev) => ({
            txs: [...prev.txs, ...resp.data],
            offset: resp.meta.offset + resp.meta.count,
            total: resp.meta.total,
            error: undefined,
          }));
        } else {
          set({
            error: resp.message
          })
        }
      })
      .finally(() => {
        set({
          loading: false,
        });
      });
  },
  initStore: () =>
    set({
      txs: [],
      offset: 0,
      total: 0,
      loading: false,
      error: undefined,
    }),
}));

export default useTxStore;
