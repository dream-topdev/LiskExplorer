export interface ErrorResponse {
  error: true;
  message: string;
}
export type APIResponse = {
  data: any;
  meta: {
    count: number;
    offset: number;
    total?: number;
  }
};