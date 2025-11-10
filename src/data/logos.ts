import colombia from '@/assets/images/logos/colombia.svg';
import fourKitchens from '@/assets/images/logos/fourkitchens.svg';
import nyu from '@/assets/images/logos/nyu.svg';
import smithCollege from '@/assets/images/logos/smith-college.svg';
import stanford from '@/assets/images/logos/stanford.svg';
import yale from '@/assets/images/logos/yale.svg';
import emulsify from '@/assets/images/logos/emulsify.svg';
import baruch from '@/assets/images/logos/baruch.svg';
import harvard from '@/assets/images/logos/harvard.svg';
import intuit from '@/assets/images/logos/intuit.svg';
import salesforce from '@/assets/images/logos/salesforce.svg';
import wqed from '@/assets/images/logos/wqed.svg';

export const logos = [
  {
    logo: colombia,
    name: 'Colombia',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1'
  },
  {
    logo: nyu,
    name: 'NYU',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1'
  },
  {
    logo: smithCollege,
    name: 'Smith College',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1'
  },
  {
    logo: stanford,
    name: 'Stanford',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1'
  },
  {
    logo: yale,
    name: 'Yale',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1'
  },
  {
    logo: emulsify,
    name: 'Emulsify',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1'
  },
  {
    logo: baruch,
    name: 'Baruch College',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1'
  },
  {
    logo: harvard,
    name: 'Harvard',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1'
  },
  {
    logo: intuit,
    name: 'Intuit',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1'
  },
  {
    logo: salesforce,
    name: 'Salesforce',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1'
  },
  {
    logo: fourKitchens,
    name: 'Four Kitchens',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1'
  },
  {
    logo: wqed,
    name: 'WQED',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1'
  },
  
] as const;

export type Logo = typeof logos[number];
