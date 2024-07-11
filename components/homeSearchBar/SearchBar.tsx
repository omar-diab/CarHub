'use client'

import React ,{ useState } from "react";
import SearchManufacturer from "./SearchManufacturer/SearchManufacturer";
import Image from "next/image";
import { useRouter } from 'next/navigation'



const SearchButton = ({otherClasses}: {otherClasses : string}) => (
    <button
        type="submit"
        className={`-ml-3 z-10 ${otherClasses}`}    
    >
        <Image src='/magnifying-glass.svg' alt='magnifying glass' width={40} height={40} className="object-contain"/>
    </button>
)

const SearchBar = () => {
    const [manuFacturer, setManuFacturer] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter()

    const handleSearch = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(manuFacturer === '' && model === '') {
            return alert('Please fill in the search bar');
        }
        updateSearchParams(model.toLowerCase(), manuFacturer.toLowerCase())
    };
    
    const updateSearchParams = (model: string, manuFacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);
        if(model) {
            searchParams.set('model', model);
        }else {
            searchParams.delete('model');
        }
        if(manuFacturer) {
            searchParams.set('manuFacturer', manuFacturer);
        }else {
            searchParams.delete('manuFacturer');
        }
        const newPathName = `${window.location.pathname}? ${searchParams.toString()}`
        router.push(newPathName, { scroll: false })
    }

  return (
    <form 
        className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
        onSubmit={handleSearch}
    >
        <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
            <SearchManufacturer
                manuFacturer={manuFacturer}
                setManuFacturer={setManuFacturer}
            />
            <SearchButton otherClasses='sm:hidden'/>
        </div>
        <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
            <Image
                src='/model-icon.png'
                alt='car model'
                width={25}
                height={25}
                className="absolute w-[20px] h-[20px] ml-4"
            />
            <input 
                type="text" 
                name="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Tiguan"
                className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
            />
            <SearchButton otherClasses="sm:hidden"/>
        </div>
        <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar