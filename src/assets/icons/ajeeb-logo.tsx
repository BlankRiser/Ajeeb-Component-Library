import { SVGProps } from 'react';

export const AjeebLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#a)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.592 1.607a2891.94 2891.94 0 0 0-3.108 4.636c-.408.611-.758 1.072-.776 1.023-.019-.048.136-.525.345-1.059.209-.534.38-1.026.38-1.093 0-.095-.467-.121-2.217-.121-1.219 0-2.216.014-2.216.031S2.7 6.1 3.554 7.378a425.19 425.19 0 0 0 2.099 3.115c.3.435.521.813.491.838-.03.026-.28-.165-.558-.425s-.696-.655-.93-.88c-.334-.323-.443-.38-.517-.274-.052.074-.554.822-1.117 1.663C2.46 12.255 2 12.958 2 12.976c0 .019 1.907.034 4.238.034 2.649 0 4.2.033 4.135.087-.057.049-.65.184-1.319.302-.669.118-1.216.252-1.216.298 0 .046.492.815 1.093 1.708s1.106 1.61 1.121 1.595c.015-.016.527-.784 1.138-1.707.61-.922 1.55-2.324 2.089-3.114.539-.79.995-1.397 1.014-1.349.018.048-.137.524-.346 1.059-.209.534-.38 1.005-.38 1.046 0 .04.998.075 2.217.075S18 12.976 18 12.936c0-.04-.72-1.142-1.6-2.447a151.985 151.985 0 0 1-2.061-3.119l-.461-.746 1.941 1.74.752-1.103c.414-.606.905-1.337 1.09-1.623.187-.286.339-.548.339-.583 0-.034-1.907-.062-4.238-.062-2.612 0-4.198-.033-4.135-.087.056-.047.662-.188 1.346-.313.732-.134 1.233-.27 1.217-.33-.014-.056-.494-.806-1.067-1.667-.573-.86-1.055-1.578-1.073-1.595-.017-.017-.223.256-.458.606Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <filter id='a' x={0} y={0} width={20} height={20} filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.04 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_38_2360' />
        <feBlend in='SourceGraphic' in2='effect1_dropShadow_38_2360' result='shape' />
      </filter>
    </defs>
  </svg>
);
