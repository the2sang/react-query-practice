 'use client'

import {useQuery} from "react-query";
import {TMainCategory, TMainCategorys} from "@/types/types";
import {getAllMainCategory} from "@/app/api/mainCategoryApi";
import {Fragment} from "react";
 import Link from "next/link";


const MainCategoryPage = () => {
    const {
        data: mainCategorys,
        isLoading,
        isError,
        error,
    } = useQuery<TMainCategorys, Error>("maincategorys", getAllMainCategory, {
        staleTime: 60 * 1000,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        // refetchInterval: 60 * 1000,
    })

    if (isError) {
        return <div>{error?.message}</div>
    }

    return (
        <>

            <div className="m-5">

                <div>
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        mainCategorys?.list.map((mainCategory) => (
                            <Fragment key={mainCategory.id}>
                                <div>id: {mainCategory.id}</div>
                                <div>내용: {mainCategory.name}</div>
                                <hr />
                            </Fragment>
                        ))
                    )}
                </div>
            </div>


        </>

    )

}

export default MainCategoryPage