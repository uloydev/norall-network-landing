import { browser } from '$app/environment';

// Server-side: use environment variables
// Client-side: use hardcoded values that work in browser
const CMS_URL = browser 
  ? 'http://localhost:1337' 
  : (process.env.CMS_URL || 'http://localhost:1337');

const PUBLIC_CMS_URL = browser
  ? 'http://localhost:1337'
  : (process.env.PUBLIC_CMS_URL || 'http://localhost:1337');

export const cms = {
  url: CMS_URL,
  publicUrl: PUBLIC_CMS_URL,
  apiUrl: `${CMS_URL}/api`,
};

export async function fetchFromCMS<T>(endpoint: string): Promise<T> {
  const url = `${cms.apiUrl}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`CMS API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error('Error fetching from CMS:', error);
    throw error;
  }
}

export function getMediaUrl(path: string | null | undefined): string {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${cms.publicUrl}${path}`;
}
