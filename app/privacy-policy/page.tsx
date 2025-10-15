import CTA from '@/components/CTA';
import Prose from '@/components/Prose';

export const metadata = { 
  title: 'Privacy Policy — BDG Win Game Information',
  description: 'Privacy policy for BDG Win Game informational website. Learn how we handle user data and provide BDG game information safely.'
};

export default function PrivacyPolicy(){
  return (
    <Prose className="max-w-3xl py-10">
      <h1>Privacy Policy — BDG Win Game Information</h1>
      
      <p className="text-lg opacity-80 mb-8">
        This privacy policy explains how we collect, use, and protect information on this 
        BDG Win Game informational website.
      </p>

      <h2>Information We Collect</h2>
      <p>
        This website is an informational resource about BDG Win Game. We may collect:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li>Basic website analytics and usage statistics</li>
        <li>Information you provide through contact forms (if any)</li>
        <li>Cookies and similar tracking technologies</li>
        <li>IP addresses and browser information for security purposes</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        The information we collect is used to:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li>Improve website performance and user experience</li>
        <li>Provide relevant BDG Game information and updates</li>
        <li>Respond to user inquiries and support requests</li>
        <li>Ensure website security and prevent abuse</li>
      </ul>

      <h2>BDG Game Data</h2>
      <p>
        <strong>Important:</strong> This website is not affiliated with the official BDG Win Game operators. 
        We do not have access to your BDG account data, login credentials, or game information. 
        All BDG-related data is handled by the official BDG platform according to their privacy policy.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        This website contains links to external sites including:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li>Official BDG Game registration and login portals</li>
        <li>BDG app download links</li>
        <li>Related gaming and information websites</li>
      </ul>
      <p className="mt-4">
        We are not responsible for the privacy practices of these external sites. 
        Please review their privacy policies before providing any personal information.
      </p>

      <h2>Cookies and Tracking</h2>
      <p>
        We use cookies and similar technologies to:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li>Remember your preferences and settings</li>
        <li>Analyze website traffic and user behavior</li>
        <li>Provide personalized content and recommendations</li>
        <li>Ensure website functionality and security</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement appropriate security measures to protect your information:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li>SSL encryption for data transmission</li>
        <li>Secure hosting and regular security updates</li>
        <li>Limited access to personal information</li>
        <li>Regular security audits and monitoring</li>
      </ul>

      <h2>Your Rights</h2>
      <p>
        You have the right to:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li>Access information we have about you</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion of your personal data</li>
        <li>Opt-out of certain data collection practices</li>
        <li>Withdraw consent for data processing</li>
      </ul>

      <h2>BDG Game Disclaimer</h2>
      <div className="card bg-gold-50 border-gold-200">
        <p className="text-sm">
          <strong>Important Notice:</strong> This website provides information about BDG Win Game 
          but is not operated by the official BDG company. We are an independent informational 
          resource. For official BDG support, privacy policies, and terms of service, please 
          contact BDG directly through their official channels.
        </p>
      </div>

      <h2>Updates to This Policy</h2>
      <p>
        We may update this privacy policy from time to time. Changes will be posted on this page 
        with an updated revision date. We encourage you to review this policy periodically.
      </p>

      <h2>Contact Information</h2>
      <p>
        If you have questions about this privacy policy or our data practices, please contact us 
        through our contact page. For BDG Game-specific issues, please contact the official 
        BDG support team.
      </p>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Access BDG?</h2>
        <CTA label="Visit BDG Game" />
      </div>

      <p className="text-sm opacity-60 mt-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </Prose>
  );
}
