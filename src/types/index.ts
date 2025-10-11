export interface SpamCheckRequest {
  email_text: string;
}

export interface SpamCheckResponse {
  prediction: '🚨 Spam' | '✅ Ham';
  confidence: number;
  is_spam: boolean;
}

export interface ApiError {
  message: string;
  status?: number;
}
