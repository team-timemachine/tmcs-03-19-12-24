import { Message } from '../../types/chat';
import { AI_CONFIG } from '../../config/constants';

export function formatConversationHistory(messages: Message[]): string {
  const formattedMessages = messages
    .map(msg => `${msg.isAI ? 'Assistant' : 'User'}: ${msg.content}`)
    .join('\n');

  return `${AI_CONFIG.SYSTEM_PROMPT}\n\nConversation history:\n${formattedMessages}`;
}