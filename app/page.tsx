'use client'

import "./globals.css"
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MainCategoryPage from "@/app/MainCategory/page";


const Home = () => {
    return (
        <>
            {/*<Component {...pageProps} />*/}
            {/*<Link href="/ParallelQureisMainCategory">Paralel Link</Link>*/}
            <MainCategoryPage/>
        </>
    )
}

export default Home
