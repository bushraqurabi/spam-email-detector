export interface SpamCheckRequest {
  email_text: string;
}

export interface SpamCheckResponse {
  prediction: 'spam' | 'ham';
  confidence: number;
  is_spam: boolean;
}

export interface ApiError {
  message: string;
  status?: number;
}
