'use client'

import { CustomFilter, Hero, SearchBar, CarCard } from '@/components'
import Image from 'next/image'
import {fetchCars} from '@/utils'
import { HomeProps } from '@/types';
import { fuels, yearsOfProduction } from '@/constants';
import ShowMore from '@/components/ShowMore';
import { useEffect, useState } from 'react';

export default function Home({searchParams} : HomeProps) {

  const [Cars, setCars] = useState([]) //done
  const [loading, setLoading] = useState(false) //done

  //search states
  const [manufacturer, setManufacturer] = useState('') 
  const [model, setModel] = useState('')

  //filter states
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2022)

  //pagination states
  const [limit, setLimit] = useState(10)

  const getCars = async () => {
    setLoading(true)
    try {
      const res = await fetchCars({
        manufacturer: manufacturer || '', 
        model: model || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10
      })
  
      setCars(res);
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  }
  
  useEffect(() => {
    getCars()
  }, [manufacturer, model, year, fuel, limit])

  const isDataEmpty = !Array.isArray(Cars) || Cars.length < 1 || !Cars;
  console.log(isDataEmpty);
  
  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters justify-between relative z-20'>
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} /> 

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} setFilter={setFuel} />
            <CustomFilter title='year' options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>

        {Cars.length>0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {Cars?.map((car) => (
                <CarCard 
                  car={car}
                />
              ))}
            </div>
            
            {/* {loading && (
              <div className='mt-16 w-full flex-center'>
                <Image
                  src='/loader.svg'
                  alt='loader'
                  width={50}
                  height={50}
                  className='object-contain'
                />
              </div>
            )} */}
          <ShowMore 
            pageNumber = {limit / 10}
            isNext = {limit >= Cars.length}
            setLimit = {setLimit}
          />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops! no results!</h2>
            <p>{Cars?.message}</p>
          </div>
        )}

      </div>

    </main>
  )
}
