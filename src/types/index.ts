export interface SpamCheckRequest {
  email: string;
}

export interface SpamCheckResponse {
  result: 'spam' | 'ham';
  percentage: number;
}

export interface ApiError {
  message: string;
  status?: number;
}
