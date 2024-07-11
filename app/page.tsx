import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";


export default async function Home({searchParams} : any) {
  const allCars = await fetchCars({
      manuFacturer: searchParams.manuFacturer || '',
      year: searchParams.year || 2024,
      fuel: searchParams.fuel || '',
      limit: searchParams.limit || 10,
      model : searchParams.model || ''
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div id="discover" className="mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto">
          <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
              <h1 className="text-4xl font-extrabold text-primary-blue">
                  Car Catalogue
              </h1>
              <p>Explore the cars you might like</p>
          </div>
          <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
              <SearchBar/>
              <div className="flex justify-start flex-wrap items-center gap-2">
                  <CustomFilter title='fuel' options={fuels}/>
                  <CustomFilter title='year' options={yearsOfProduction}/>
              </div>
          </div>
          {!isDataEmpty ? (
            <section>
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
                    {allCars?.map((car) => 
                      <CarCard 
                          car={car}
                      />
                    )}
                </div>
                <ShowMore
                  pageNumber={(searchParams.limit || 10) / 10}
                  isNext={(searchParams.limit || 10) > allCars.length}
                />
            </section>
          ): (
             <div className="mt-16 flex justify-center items-center flex-col gap-2">
                <h2 className="text-black text-xl font-bold">Oops, no result</h2>
                <p>{allCars?.message}</p>
             </div>
          )}
      </div>
    </main>
  );
}
