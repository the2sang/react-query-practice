'use client'

import "./globals.css"
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MainCategoryPage from "@/app/MainCategory/page";


const Home = () => {
    return (
        <>
            <MainCategoryPage/>
        </>
    )
}

export default Home
