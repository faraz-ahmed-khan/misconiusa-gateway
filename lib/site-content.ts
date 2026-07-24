/**
 * Governed corporate copy — single source of truth for content pages.
 */

export const CONTACT = {
  company: "Misconi USA Inc.",
  address: "9234 Kingston Pike #457",
  city: "Knoxville, TN 37922",
  email: "info@misconiusainc.com",
  phone: "(865) 298-7731",
  location: "Knoxville, Tennessee",
  investorEmail: "investor@misconiusainc.com",
} as const;

export const BRAND = {
  tagline: "The Readiness Authority™",
  footerBaseline: "MISCONI USA — The Readiness Authority™",
} as const;

export type TermsSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  closing?: string;
};

export const TERMS_SECTIONS: TermsSection[] = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing or using any Misconi USA website, platform, or service, you agree to these Terms of Use. If you do not agree, you must discontinue use immediately.",
      'Misconi USA LLC ("Misconi USA," "we," "us," or "our") may update these Terms at any time. Continued use after changes constitutes acceptance of the updated Terms.',
    ],
  },
  {
    title: "2. Definitions",
    paragraphs: [],
    bullets: [
      '"Services": All readiness scoring, intake, evaluation, and protection systems provided by Misconi USA.',
      '"User": Any individual or organization accessing Misconi USA websites or services.',
      '"Content": All text, graphics, scoring outputs, data, and materials provided by Misconi USA.',
      '"Websites": Any Misconi USA web property.',
    ],
  },
  {
    title: "3. Permitted Use",
    paragraphs: ["Users may access Misconi USA websites and systems solely for:"],
    bullets: [
      "Business-readiness evaluation",
      "Intake and scoring processes",
      "Supplier verification",
      "Viewing informational content",
      "Preparing opportunities or submissions",
    ],
    closing: "Use must comply with all applicable laws and these Terms.",
  },
  {
    title: "4. Prohibited Use",
    paragraphs: ["Users may not:"],
    bullets: [
      "Interfere with or disrupt Misconi USA systems",
      "Attempt unauthorized access",
      "Reverse-engineer or copy proprietary scoring systems",
      "Use the Services for fraudulent or unlawful purposes",
      "Submit false or misleading business information",
      "Use automated tools (bots, scrapers, crawlers) without permission",
    ],
    closing: "Misconi USA may suspend or terminate access for violations.",
  },
  {
    title: "5. Intellectual Property",
    paragraphs: [
      "All content, scoring systems, readiness frameworks, graphics, logos, and proprietary processes are owned by Misconi USA LLC and protected by U.S. and international intellectual property laws.",
      "Users receive no ownership rights and may not reproduce, distribute, or modify any Misconi USA materials without written permission.",
    ],
  },
  {
    title: "6. Accounts and Subscriptions",
    paragraphs: ["Some services may require account creation or subscription enrollment. Users agree to:"],
    bullets: [
      "Provide accurate information",
      "Maintain confidentiality of login credentials",
      "Accept responsibility for all activity under their account",
    ],
    closing: "Misconi USA may suspend accounts for misuse or non-compliance.",
  },
  {
    title: "7. Data Handling",
    paragraphs: [
      "Misconi USA may collect and process business information as described in our Privacy Policy.",
      "We do not sell personal or business data.",
      "We do not request or store sensitive personal information such as Social Security numbers or financial account numbers.",
    ],
  },
  {
    title: "8. Disclaimers",
    paragraphs: ['Misconi USA provides readiness scoring and protection systems "as-is" without warranties of any kind, including:'],
    bullets: ["Accuracy", "Completeness", "Fitness for a particular purpose", "Availability"],
    closing:
      "Readiness scores and evaluations are informational tools and do not guarantee business outcomes, approvals, or procurement awards.",
  },
  {
    title: "9. Limitation of Liability",
    paragraphs: ["To the fullest extent permitted by law, Misconi USA LLC is not liable for:"],
    bullets: [
      "Direct, indirect, incidental, or consequential damages",
      "Loss of business, revenue, or opportunities",
      "Errors, delays, or interruptions in service",
      "Decisions made based on readiness scores or evaluations",
    ],
    closing: "Users assume full responsibility for how they use Misconi USA systems.",
  },
  {
    title: "10. Third-Party Links",
    paragraphs: [
      "Misconi USA websites may contain links to external sites. We are not responsible for third-party content, policies, or practices.",
    ],
  },
  {
    title: "11. Termination",
    paragraphs: ["Misconi USA may suspend or terminate access to any user who:"],
    bullets: [
      "Violates these Terms",
      "Misuses the platform",
      "Submits fraudulent information",
      "Interferes with system integrity",
    ],
    closing: "Termination may occur without notice.",
  },
  {
    title: "12. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of the State of Tennessee and applicable U.S. federal laws. Any disputes must be resolved in Tennessee courts.",
    ],
  },
  {
    title: "13. Contact Information",
    paragraphs: [
      "For questions about these Terms, contact:",
      "Misconi USA LLC",
      "9234 Kingston Pike #457",
      "Knoxville, Tennessee 37922",
      `Email: ${CONTACT.email}`,
      `Phone: ${CONTACT.phone}`,
    ],
  },
];

