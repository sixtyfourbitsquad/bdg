export const CTA_URL = 'https://bdgwina.co//#/register?invitationCode=3422740317';

export default function CTA({ label='Register & Claim ₹500 Bonus', className='' }:{
  label?: string; className?: string;
}) {
  return (
    <a href={CTA_URL} target="_blank" rel="nofollow noopener"
       className={`btn-gold ${className}`} aria-label={label}>
      {label}
    </a>
  );
}
