import { API_BLOCKS } from "../constants/api";
import api from "../helpers/api.manager";
import { APIResponse, ErrorResponse } from "../types/api.response.type";
import { LiskBlock } from "../types/block.type";

interface GetBlocksResponse extends APIResponse {
  data: LiskBlock[];
}

export const getLiskBlocks = async () => {
  const res = await api.get<GetBlocksResponse | ErrorResponse>(API_BLOCKS);
  return res.data;
};
