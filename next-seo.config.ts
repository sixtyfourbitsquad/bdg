import { DefaultSeoProps } from 'next-seo';

const keywords = [
  // Core
  'bdg game','bdg game india','bdg game login','bdg game bonus','bdg live game','bdg colour game','bdg online game','bdg play online','bdg gaming app','bdg official site',
  // Login & Access
  'bdg game login link','bdg game website login','bdg login id','bdg app login','bdg game register','bdg register new account','bdg login page','bdg login bonus','bdg account login','bdg login rewards',
  // App & Download
  'bdg game download','bdg app apk','bdg app download','bdg colour trading app','bdg game for android','bdg apk latest version','bdg app update','bdg apk india','bdg play store link','bdg ios download',
  // Bonus & Offers
  'bdg signup bonus','bdg game bonus code','bdg 100 bonus offer','bdg bonus today','bdg referral bonus','bdg free bonus','bdg bonus withdrawal','bdg deposit bonus','bdg cash bonus','bdg new user bonus',
  // Betting/Colour Trading
  'bdg colour prediction','bdg trading app','bdg trading login','bdg game prediction','bdg colour chart','bdg game result','bdg game pattern','bdg colour game live','bdg winning tricks','bdg colour tips',
  // Regional
  'bdg india app','bdg game india login','bdg indian version','bdg online india','bdg indian game site','bdg app india bonus','bdg official india','bdg india live','bdg play india','bdg india registration',
  // Withdrawal/Payment
  'bdg withdrawal proof','bdg game withdrawal','bdg paytm withdrawal','bdg instant withdraw','bdg payment update','bdg deposit method','bdg cash out','bdg add money','bdg recharge bonus','bdg payment issue',
  // Community
  'bdg telegram channel','bdg official telegram','bdg whatsapp group','bdg game community','bdg player reviews','bdg user feedback','bdg support number','bdg customer care','bdg online chat','bdg live updates',
  // How-to
  'how to play bdg game','how to login bdg game','how to withdraw from bdg','how to predict bdg colors','how to earn from bdg','how bdg app works','bdg guide for beginners','bdg game tutorial','bdg safe or not','bdg real or fake',
  // Competition
  'bdg vs jalwa game','bdg vs raja game','bdg like games','bdg similar sites','bdg top alternatives','best games like bdg','bdg clone sites','bdg prediction apps','bdg competition','bdg trending in india'
];

const config: DefaultSeoProps = {
  defaultTitle: 'BDG Win Game — Official Login, Download App & ₹300 Bonus',
  titleTemplate: '%s | BDG Win Game India',
  description: 'BDG Win Game (Big Daddy Game) — official info hub for login, download, bonus, colour prediction and withdrawals in India. Register now and claim your ₹300 bonus.',
  canonical: 'https://bdgwinngames.com',
  additionalMetaTags: [
    { name:'keywords', content: keywords.join(', ') },
    { name:'theme-color', content:'#D4AF37' }
  ],
  openGraph: {
    url:'https://bdgwinngames.com',
    type:'website',
    siteName:'BDG Win Game',
    images:[{ url:'/og-image.jpg', width:1200, height:630, alt:'BDG Win Game Login & Download' }]
  },
  twitter:{ cardType:'summary_large_image' }
};
export default config;
