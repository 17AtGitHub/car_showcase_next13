'use client'

import Image from 'next/image'
import {SearchManufacturer} from "@/components"
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'

const SearchButton = ({otherClasses}: {otherClasses: string}) => (
    <button type="submit" className= {`-ml-3 z-10 ${otherClasses}`}>
        <Image 
            src='/magnifying-glass.svg'
            alt='magnifying glass'
            width={40}
            height={40}
            className='object-contain'
        />
        
    </button>
)


const SearchBar = ({setManufacturer, setModel}) => {

    const [manufacturer, setSearchManufacturer] = useState("")
    const [model, setSearchModel] = useState('');
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(manufacturer === '' || model === ''){
            return alert('Please fill in the search data.')
        }
        setManufacturer(manufacturer)
        setModel(model)
    }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer 
                    selected={manufacturer}
                    setSelected={setSearchManufacturer}
                />
                <SearchButton otherClasses="sm:hidden"/>
            </div>
            <div className='searchbar__item'>
                <Image
                    src='/model-icon.png'
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4'
                    alt='car model'
                />
                <input
                    type='text'
                    name='model'
                    value={model}
                    onChange={(e) => setSearchModel(e.target.value)}
                    placeholder='Tiguan...'
                    className='searchbar__input'
                    style={{textTransform: 'capitalize'}}
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />
        </form>  
    )
}

export default SearchBar