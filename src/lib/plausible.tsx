import Script from 'next/script';

const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? 'amazingrando.com';

export default function Plausible() {
  return (
    <>
      <Script id="plausible-init" strategy="beforeInteractive">
        {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)}`}
      </Script>
      <Script
        defer
        data-domain={domain}
        src="https://plausible.io/js/script.outbound-links.js"
        strategy="afterInteractive"
      />
    </>
  );
}
