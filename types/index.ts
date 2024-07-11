import { MouseEventHandler } from "react";

type st =string;
type num = number;
type bool = boolean;

export interface CustomButtonProps {
    title: st,
    containerStyles?: st,
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: 'button' | 'submit';
    textStyles?: st;
    rightIcon?: st;
    isDisabled: bool;
}

export interface SearchManuFacturerProps {
    manuFacturer: st;
    setManuFacturer: (manuFacturer: st) => void;
}

export interface CarProps {
    "city_mpg": num,
    "class": st,
    "combination_mpg": num,
    "cylinders": num,
    "displacement": num,
    "drive": st,
    "fuel_type": st,
    "highway_mpg": num,
    "make": st,
    "model": st,
    "transmission": st,
    "year": num
}

export interface FilterProps {
    manuFacturer: st,
    year: num,
    fuel: st,
    limit: num,
    model : st
}

export interface OptionProps {
    title: st,
    value: st,
}

export interface CustomFiterProps {
    title: st,
    options: OptionProps[],
}

export interface ShowMoreProps {
    pageNumber: num,
    isNext: bool
}