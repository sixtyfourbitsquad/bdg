import CTA from '@/components/CTA';
import Prose from '@/components/Prose';

export const metadata = { 
  title: 'Contact BDG Win Game — Support & Help',
  description: 'Get help with BDG Game login, withdrawal issues, and account problems. Contact information and support resources for BDG players in India.'
};

export default function Contact(){
  return (
    <Prose className="max-w-3xl py-10">
      <h1>Contact BDG Win Game — Support & Help Center</h1>
      
      <p className="text-lg opacity-80 mb-8">
        Need help with BDG Game login, withdrawal, or account issues? Find support resources 
        and contact information for BDG players in India.
      </p>

      <h2>BDG Game Support Channels</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="card">
          <h3 className="text-xl font-semibold mb-3">Official BDG Support</h3>
          <p className="mb-3">For direct BDG app issues, contact official support:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>In-app customer support chat</li>
            <li>Official BDG Telegram channel</li>
            <li>BDG WhatsApp support group</li>
          </ul>
        </div>
        
        <div className="card">
          <h3 className="text-xl font-semibold mb-3">Account Issues</h3>
          <p className="mb-3">Common BDG account problems:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>BDG login not working</li>
            <li>OTP not received</li>
            <li>Password reset issues</li>
            <li>Account verification problems</li>
          </ul>
        </div>
      </div>

      <h2>BDG Withdrawal Support</h2>
      <p>
        If you&apos;re experiencing withdrawal issues with BDG Game, here are the steps to resolve them:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li>Check minimum withdrawal limits in your BDG wallet</li>
        <li>Verify your UPI ID or Paytm details are correct</li>
        <li>Ensure your BDG account is fully verified</li>
        <li>Contact BDG support if withdrawal is pending for more than 24 hours</li>
      </ol>

      <h2>BDG App Download Issues</h2>
      <p>
        Having trouble downloading the BDG app? Try these solutions:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li>Use the official download link from our homepage</li>
        <li>Check your device storage space</li>
        <li>Enable installation from unknown sources (Android)</li>
        <li>Update your device to the latest OS version</li>
      </ul>

      <h2>BDG Bonus and Referral Issues</h2>
      <p>
        If you haven&apos;t received your BDG signup bonus or referral rewards:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li>Check your BDG wallet balance</li>
        <li>Verify you used the correct referral link</li>
        <li>Ensure your account is fully activated</li>
        <li>Contact BDG support with your user ID</li>
      </ul>

      <h2>Important Disclaimer</h2>
      <div className="card bg-gold-50 border-gold-200">
        <p className="text-sm">
          <strong>Note:</strong> This website is an independent informational resource about BDG Win Game. 
          We are not affiliated with the official BDG operators or support team. For official support, 
          always contact BDG through their official channels within the app or on their official website.
        </p>
      </div>

      <h2>BDG Game Safety Tips</h2>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li>Never share your BDG login credentials with anyone</li>
        <li>Use strong passwords and enable app lock</li>
        <li>Verify withdrawal details before confirming</li>
        <li>Play responsibly and within your budget</li>
        <li>Keep your BDG app updated to the latest version</li>
      </ul>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Need to Access BDG?</h2>
        <CTA label="Login to BDG Game" />
      </div>
    </Prose>
  );
}
