'use client';

import { init } from '@plausible-analytics/tracker';
import { useEffect } from 'react';

const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? 'amazingrando.com';

export default function Plausible() {
  useEffect(() => {
    init({
      domain,
      outboundLinks: true,
    });
  }, []);

  return null;
}
