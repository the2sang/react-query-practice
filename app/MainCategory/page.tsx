import {NextPage} from "next";
import {useQuery} from "react-query";
import {TMainCategory, TMainCategorys} from "@/types/types";
import {getAllMainCategory} from "@/app/api/mainCategoryApi";
import {Fragment} from "react";


const MainCategoryPage = () => {
    const {
        data: mainCategorys,
        isLoading,
        isError,
        error,
    } = useQuery<TMainCategorys, Error>("maincategorys", getAllMainCategory, {
        // staleTime: 5 * 1000,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        refetchInterval: 10 * 1000,
    })

    if (isError) {
        return <div>{error?.message}</div>
    }

    return (
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
    )

}

export default MainCategoryPage