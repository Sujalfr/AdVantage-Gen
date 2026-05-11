/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: number;
}

export interface PromptHistoryItem {
  id: string;
  prompt: string;
  timestamp: number;
}

export type GenerationStatus = 'idle' | 'generating' | 'success' | 'error';
