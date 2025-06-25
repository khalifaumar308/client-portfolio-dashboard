export const metadata = {
  title: "Abiola Jimoh | Fintech Consultant & Business Advisor",
  description:
    "Abiola Jimoh is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships.",
  openGraph: {
    title: "Abiola Jimoh | Fintech Consultant & Business Advisor",
    description:
      "Abiola Jimoh is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships.",
    type: "website",
    url: "https://samueljohnson.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abiola Jimoh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abiola Jimoh | Fintech Consultant & Business Advisor",
    description:
      "Abiola Jimoh is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships.",
    images: ["/images/og-image.jpg"],
  },
}

export default function Head() {
  return (
    <>
      <title>Abiola Jimoh | Fintech Consultant & Business Advisor</title>
      <meta name="description" content="Abiola Jimoh is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships." />
      <meta property="og:title" content="Abiola Jimoh | Fintech Consultant & Business Advisor" />
      <meta property="og:description" content="Abiola Jimoh is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://samueljohnson.com" />
      <meta property="og:image" content="/images/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Abiola Jimoh" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Abiola Jimoh | Fintech Consultant & Business Advisor" />
      <meta name="twitter:description" content="Abiola Jimoh is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships." />
      <meta name="twitter:image" content="/images/og-image.jpg" />
    </>
  )
}
