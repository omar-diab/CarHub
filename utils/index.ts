import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const {manuFacturer, year, model, limit, fuel} = filters;
    const headers = {
		'x-rapidapi-key': '52cd54b136msh9de825e64c5250ap19d843jsn15c5fd6936ee',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    };
    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manuFacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers
    });
    const result = await response.json();
    return result;
}

export const generateCarImageUrl = (car : CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');
    const {make, year, model} = car;
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', "fullscreen");
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
} 

export const UpdateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);
    const newPathname = `${window.location.pathname}? ${searchParams.toString()}`

    return newPathname;
}

export const calculateCarRent = (city_mpg: number, year: number): number => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
    const currentYear = new Date().getFullYear();
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (currentYear - year) * ageFactor;
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
    return Math.round(rentalRatePerDay);
}
