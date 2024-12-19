export class AIServiceError extends Error {
  constructor(message: string, public code: string) {
    super(message);
    this.name = 'AIServiceError';
  }
}

export function handleAIError(error: unknown): string {
  console.error('AI Service Error:', error);

  if (error instanceof AIServiceError) {
    switch (error.code) {
      case 'API_KEY_MISSING':
        return "Please set your Gemini API key in config/constants.ts to enable AI responses.";
      case 'API_KEY_INVALID':
        return "Invalid API key. Please check your Gemini API key in config/constants.ts";
      case 'MODEL_INIT_FAILED':
        return "Failed to initialize the AI model. Please check your configuration.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  }

  return "I apologize, but I'm having trouble connecting right now. Please try again in a moment.";
}