import Script from 'next/script';

const scriptSrc =
  process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT ?? '';

export default function Plausible() {
  return (
    <>
      <Script id="plausible-init" strategy="beforeInteractive">
        {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
      </Script>
      <Script async src={scriptSrc} strategy="afterInteractive" />
    </>
  );
}
