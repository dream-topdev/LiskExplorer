import { API_TRANSACTIONS } from "../constants/api";
import { configuration } from "../constants/config";
import api from "../helpers/api.manager";
import { APIResponse, ErrorResponse } from "../types/api.response.type";
import { LiskTransaction } from "../types/transaction.type";

interface GetTransactionsResponse extends APIResponse {
  data: LiskTransaction[];
}

export const getTransactions = async (offset: number, limit: number) => {
  const res = await api.get<GetTransactionsResponse | ErrorResponse>(`${API_TRANSACTIONS}?address=${configuration.TEST_LISK_ADDRESS}&offset=${offset}&limit=${limit}`);
  return res.data;
};
