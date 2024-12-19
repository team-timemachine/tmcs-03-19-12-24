import { GoogleGenerativeAI } from '@google/generative-ai';
import { AI_CONFIG, GEMINI_API_KEY } from '../../config/constants';

// Initialize Gemini AI
export function initializeAI() {
  if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_API_KEY_HERE') {
    throw new Error('API_KEY_MISSING');
  }

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  return genAI.getGenerativeModel({ model: AI_CONFIG.MODEL });
}

export function getGenerationConfig() {
  return {
    temperature: AI_CONFIG.TEMPERATURE,
    maxOutputTokens: AI_CONFIG.MAX_TOKENS,
  };
}