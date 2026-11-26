import { useEffect } from 'react';
import { siteConfig } from '../config/index.js';

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | Precision CNC Aerospace & Defence Components`;
  }, [title]);
}
