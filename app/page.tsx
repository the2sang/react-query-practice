// 'use client'

import "./globals.css"
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MainCategoryPage from "@/app/MainCategory/page";
import Link from "next/link";
import DependentQueriesPage from "@/app/pages/Dependent/page";


const Home = () => {
    return (
        <>
          <nav className="flex m-10">
            <Link href="/pages/MainCategory" className="mr-5" >Refetch Mount Page</Link>
            <Link href="/pages/ParallelQureisMainCategory" >Paralle Queries Page</Link>
            <Link href="/pages/Dependent">Dependent Quries page</Link>
          </nav>
        </>
    )
}

export default Home
