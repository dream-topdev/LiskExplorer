import { create } from "zustand";

import { LiskBlock } from "../types/block.type";
import { getLiskBlocks } from "../api/blocks.api";

interface BlocksState {
  blocks: LiskBlock[];
  loading: boolean;
  error?: string;
  loadBlocks: () => void;
  addBlock: (newBlock: LiskBlock[]) => void;
  initStore: () => void;
}

const useBlocksStore = create<BlocksState>((set) => ({
  blocks: [],
  loading: false,
  error: undefined,
  loadBlocks: () => {
    set({
      loading: true,
    });
    getLiskBlocks()
      .then((resp) => {
        if ('data' in resp) {
          set({
            blocks: resp.data,
            error: undefined
          });
        } else {
          set({
            error: resp.message
          })
        }
      })
      .catch((_) => {
        set({
          error: "Network error. Please contact the support team.",
        });
      })
      .finally(() => {
        set({
          loading: false,
        });
      });
  },
  addBlock: (newBlock: LiskBlock[]) => {
    set((prev) => ({
      blocks: [...newBlock, ...prev.blocks].slice(0, 10),
    }));
  },
  initStore: () =>
    set({
      blocks: [],
      loading: false,
      error: undefined,
    }),
}));

export default useBlocksStore;
