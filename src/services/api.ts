import axios from 'axios';
import type { SpamCheckRequest, SpamCheckResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const checkSpamEmail = async (email: string): Promise<SpamCheckResponse> => {
  const response = await apiClient.post<SpamCheckResponse>('/check-spam', {
    email,
  } as SpamCheckRequest);
  return response.data;
};
