import { landingContent } from '../content';

import { CtaBanner } from './vendor-cta-banner';

export function DestinationCta() {
  const { title, description, buttonLabel } = landingContent.destinationCta;

  return (
    <CtaBanner
      title={title}
      description={description}
      buttonLabel={buttonLabel}
      illustrationSrc='/destination_cta.svg'
      illustrationAlt='Concert stage illustration'
      illustrationWidth={328}
      illustrationHeight={222}
      illustrationClassName='top-[40px] left-[905px]'
      vectorSrc='/vendor_vector.png'
      vectorClassName='top-[207px] left-[609px]'
      topBg='#FFFFFF'
      bottomBg='transparent'
      className='relative z-20'
    />
  );
}
