/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export async function generateImage(prompt: string): Promise<string> {
  const encodedPrompt = encodeURIComponent(prompt);
  const seed = Math.floor(Math.random() * 1000000);
  
  // Using Pollinations AI as the robust free fallback
  // This produces high-quality results without requiring an API key immediately
  const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?seed=${seed}&width=1024&height=1024&nologo=true`;
  
  // We simulate a network delay to allow for the loading animations to be appreciated
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return url;
}
