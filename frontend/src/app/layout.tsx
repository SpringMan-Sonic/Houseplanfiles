import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.houseplanfiles.com"),
  title: {
    default: "Readymade House Plans in India | HousePlanFiles",
    template: "%s | HousePlanFiles",
  },
  description:
    "Download readymade house plans, floor plans & home designs in India. 1000+ verified plans by expert architects. 2BHK, 3BHK, duplex, village house plans available.",
  keywords: [
    "readymade house plans india",
    "house plans",
    "floor plans",
    "home design",
    "duplex house plans",
    "3bhk house plan",
    "2bhk house plan",
    "village house plans",
    "vastu house plans",
    "architect india",
    "house design india",
  ],
  authors: [{ name: "HousePlanFiles", url: "https://www.houseplanfiles.com" }],
  creator: "HousePlanFiles",
  publisher: "HousePlanFiles",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.houseplanfiles.com",
    siteName: "HousePlanFiles",
    title: "Readymade House Plans in India | HousePlanFiles",
    description:
      "Download readymade house plans, floor plans & home designs in India. 1000+ verified plans by expert architects.",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "HousePlanFiles - Readymade House Plans India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Readymade House Plans in India | HousePlanFiles",
    description:
      "Download readymade house plans, floor plans & home designs in India.",
    images: ["/logo1.png"],
    creator: "@files22844",
  },
  alternates: {
    canonical: "https://www.houseplanfiles.com",
  },
  verification: {
    google: "1boqz5_cvkNxWsABlYzA9OW8lXrR_ZttKSxmnT0jsUU",
  },
};

// ✅ LocalBusiness + Organization Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HousePlanFiles",
  description:
    "India's leading platform for readymade house plans, architectural designs, and construction services.",
  url: "https://www.houseplanfiles.com",
  logo: "https://www.houseplanfiles.com/logo1.png",
  image: "https://www.houseplanfiles.com/logo1.png",
  telephone: "+919755248864",
  email: "houseplansdesignsfile@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/Houseplansndesignfiles",
    "https://www.instagram.com/house_plan_files",
    "https://x.com/files22844",
    "https://www.youtube.com/@houseplansfiles8308",
    "https://pinterest.com/houseplanfiles/",
    "https://www.linkedin.com/company/105681541/",
  ],
  founder: {
    "@type": "Person",
    name: "Himanshu Vyas",
    jobTitle: "Founder & CEO",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "House Plans & Architectural Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Readymade House Plans",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom House Design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3D Elevation Design",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HousePlanFiles",
  url: "https://www.houseplanfiles.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.houseplanfiles.com/house-plans?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon2.ico" type="image/x-icon" />
        <meta name="theme-color" content="#f97316" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Providers>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
