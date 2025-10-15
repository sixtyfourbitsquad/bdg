import CTA, { CTA_URL } from '@/components/CTA';
import Prose from '@/components/Prose';

export const metadata = { 
  title: 'About BDG Win Game — Official Information Hub',
  description: 'Learn about BDG Win Game (Big Daddy Game) - the popular colour prediction app in India. Official information, features, and safe gaming guide.'
};

export default function About(){
  return (
    <Prose className="max-w-3xl py-10">
      <h1>About BDG Win Game — Your Complete Information Hub</h1>
      
      <p className="text-lg opacity-80 mb-8">
        BDG Win Game (Big Daddy Game) has become one of the most popular colour prediction apps in India. 
        This informational website provides comprehensive guides, tips, and official links for BDG players.
      </p>

      <h2>What is BDG Win Game?</h2>
      <p>
        BDG Win Game is a colour prediction application that allows users to predict outcomes and earn rewards. 
        The game features simple mechanics where players predict the next colour (Red, Green, or Blue) to win prizes.
      </p>

      <h2>Key Features of BDG Game India</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Easy Registration:</strong> Quick signup with mobile number and OTP verification</li>
        <li><strong>Welcome Bonus:</strong> New users receive signup bonuses upon registration</li>
        <li><strong>Referral Program:</strong> Earn rewards by inviting friends to join BDG</li>
        <li><strong>Multiple Withdrawal Options:</strong> UPI, Paytm, and other payment methods</li>
        <li><strong>Live Game Results:</strong> Real-time colour prediction results and patterns</li>
        <li><strong>Mobile App:</strong> Download BDG APK for Android and iOS devices</li>
      </ul>

      <h2>How BDG Colour Prediction Works</h2>
      <p>
        The BDG colour prediction game operates on simple mechanics. Players choose from three colours: 
        Red, Green, or Blue. The game generates results at regular intervals, and correct predictions 
        result in rewards based on the odds and amount wagered.
      </p>

      <h2>BDG Login and Registration Process</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Click the <a className="link-gold" href={CTA_URL} target="_blank" rel="nofollow noopener">Register Now</a> button</li>
        <li>Enter your mobile number for OTP verification</li>
        <li>Set a secure password for your BDG account</li>
        <li>Claim your welcome bonus and start playing</li>
      </ol>

      <h2>BDG Withdrawal and Payment Methods</h2>
      <p>
        BDG offers multiple withdrawal options including UPI, Paytm, and bank transfers. 
        Withdrawal limits and processing times may vary. Always verify your payment details 
        before requesting withdrawals.
      </p>

      <h2>Safety and Responsible Gaming</h2>
      <p>
        This website is an independent informational resource about BDG Win Game. We are not 
        affiliated with the official BDG operators. Always play responsibly and within your means. 
        Verify app policies and terms before making deposits.
      </p>

      <h2>BDG vs Other Games</h2>
      <p>
        BDG Win Game competes with other colour prediction apps like Jalwa Game and Raja Game. 
        Each platform offers different features, bonuses, and withdrawal options. Compare 
        multiple platforms before choosing the one that suits your preferences.
      </p>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Experience BDG?</h2>
        <CTA label="Start Playing BDG Game" />
      </div>
    </Prose>
  );
}
