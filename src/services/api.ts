import axios from 'axios';
import type { SpamCheckRequest, SpamCheckResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://spam-email-api-sog1.onrender.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const checkSpamEmail = async (email: string): Promise<SpamCheckResponse> => {
  const response = await apiClient.post<SpamCheckResponse>('/predict', {
    email_text: email,
  } as SpamCheckRequest);
  console.log(response);
  return response.data;
};
