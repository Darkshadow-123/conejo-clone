import { Cormorant_Garamond, Mulish, Sacramento } from "next/font/google";
import "./globals.css";

// Font substitutions (see tailwind.config.js for why):
// - Mulish stands in for Muli (its own free open-source successor — near-exact match)
// - Cormorant Garamond stands in for the licensed "beaufort-pro" serif
// - Sacramento stands in for the licensed "PrintedMoments" script
const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-heading",
  display: "swap",
});

const body = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
  display: "swap",
});

const script = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Psychologist & Therapy in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica, CA providing evidence-based therapy for anxiety, trauma, EMDR, burnout, and high-achieving adults. In-person & telehealth.",
  keywords: [
    "Therapist Santa Monica CA",
    "Psychologist Santa Monica",
    "Anxiety Therapy Santa Monica",
    "Trauma Therapist Santa Monica",
    "EMDR Therapy Santa Monica CA",
    "Dr. Maya Reynolds PsyD",
    "Burnout Therapy Los Angeles",
    "Telehealth Therapy California"
  ].join(", "),
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  creator: "Dr. Maya Reynolds, PsyD",
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Therapy & Counseling in Santa Monica, CA",
    description:
      "Compassionate, evidence-based therapy for adults, professionals, and trauma survivors in Santa Monica, CA and statewide via telehealth.",
    url: "https://drmayareynolds.com",
    siteName: "Dr. Maya Reynolds, PsyD Therapy",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist",
  "image": "https://drmayareynolds.com/images/office-1.jpg",
  "@id": "https://drmayareynolds.com",
  "url": "https://drmayareynolds.com",
  "telephone": "+1-310-555-0199",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 4th Street",
    "addressLocality": "Santa Monica",
    "addressRegion": "CA",
    "postalCode": "90401",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.0195,
    "longitude": -118.4912
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "medicalSpecialty": [
    "Psychotherapy",
    "Clinical Psychology",
    "EMDR Therapy",
    "Anxiety Management",
    "Trauma Recovery"
  ],
  "areaServed": [
    "Santa Monica",
    "West Los Angeles",
    "Venice",
    "Brentwood",
    "California"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${script.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-stone font-sans text-slate antialiased">{children}</body>
    </html>
  );
}
