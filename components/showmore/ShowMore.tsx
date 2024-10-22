'use client'

import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import CustomButton from "../buttons/CustomButton";
import { UpdateSearchParams } from "@/utils";

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter();
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = UpdateSearchParams('limit', `${newLimit}`)
        router.push(newPathName, { scroll: false });
    };
  return (  
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton
                title="Show More"
                btnType="button"
                containerStyles="bg-primary-blue rounded-full text-white hover:bg-white hover:text-primary-blue"
                handleClick={handleNavigation}
                isDisabled={false}
            />
        )}
    </div>
  )
}

export default ShowMore