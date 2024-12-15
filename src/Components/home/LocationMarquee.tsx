import Marquee from 'react-fast-marquee';

interface LocationMarqueeProps {
  locations: string[];
}

export default function LocationMarquee({ locations }: LocationMarqueeProps) {
  return (
    <Marquee className="bg-black-primary py-4" autoFill={true} pauseOnHover={true}>
      {locations.map((location, index) => (
        // <div
        //   key={index}
        //   className="flex items-center gap-2 text-paragraph-secondary border-x-2 border-white-primary px-[32px]"
        // >
        //   <div className="relative">
        //     <p
        //       className={'text-nowrap font-semibold ' + `${index % 2 === 0 ? 'text-black-primary mainStroke' : ''}`}
        //       data-text={location}
        //     >
        //       {location}
        //     </p>
        //   </div>
        // </div>
        <span
          key={index}
          className={
            'pl-8 text-2xl text-nowrap font-semibold ' +
            `${index % 2 === 0 ? 'text-black-primary text-stroke-[.4px] text-stroke-white-primary' : 'text-white-primary'}`
          }
        >
          {location}
        </span>
      ))}
    </Marquee>
  );
}
