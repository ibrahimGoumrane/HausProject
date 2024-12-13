const Dvivder = () => {
  const locations = [
    { loc: 'Maarif', city: 'Casablanca' },
    { loc: 'Hay Riad', city: 'Rabat' },
    { loc: 'Ziat', city: 'Fes' },
    { loc: 'Gueliz', city: 'Marrakech' },
    { loc: 'Malabata', city: 'Tangier' },
    { loc: 'Talborjt', city: 'Agadir' },
    { loc: 'Hamria', city: 'Meknes' },
    { loc: 'Hay El Qods', city: 'Oujda' },
    { loc: 'Mimosas', city: 'Kenitra' },
    { loc: 'Mhannech', city: 'Tetouan' },
  ];
  return (
    <div className="h-[66px]  overflow-x-hidden bg-black-primary flex items-center justify-center px-6  w-full ">
      <div className="flex items-center scroll-content  justify-center  text-white-primary">
        {locations.map((location, index) => (
          <div
            key={index}
            className="flex items-center gap-2    text-paragraph-secondary  border-x-2 border-white-primary px-[32px]  "
          >
            <div className="relative">
              <p
                className={'text-nowrap font-semibold  ' + `${index % 2 === 0 ? 'text-black-primary mainStroke' : ''}`}
                data-text={`${location.loc} - ${location.city}`}
              >
                {location.loc} - {location.city}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dvivder;
