import { Message } from '../../types/chat';
import { initializeAI, getGenerationConfig } from './config';
import { formatConversationHistory } from './messageFormatter';
import { AIServiceError, handleAIError } from './errorHandler';

let model: any = null;

try {
  model = initializeAI();
} catch (error) {
  console.error('Failed to initialize Gemini AI:', error);
}

export async function generateAIResponse(messages: Message[]): Promise<string> {
  try {
    if (!model) {
      throw new AIServiceError('Model initialization failed', 'MODEL_INIT_FAILED');
    }

    // Start chat with generation config
    const chat = model.startChat({
      history: [],
      generationConfig: getGenerationConfig(),
    });

    // Format and send message
    const prompt = formatConversationHistory(messages);
    const result = await chat.sendMessage(prompt);
    
    if (!result.response?.text) {
      throw new AIServiceError('Empty response from AI', 'EMPTY_RESPONSE');
    }

    return result.response.text();
  } catch (error) {
    return handleAIError(error);
  }
}