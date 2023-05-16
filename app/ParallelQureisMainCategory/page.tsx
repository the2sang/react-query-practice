'use client'

import axios from "axios";
import type { NextPage } from "next";
import {QueryClient, QueryFunctionContext, useQuery} from "react-query";
import {getMemoryCards} from "@/app/api/memoryCardApi";
import {TMemoryCard} from "@/types/types";
import getQueryClient from "@/app/getQueryClient";


interface Post {
    id: number;
    title: string;
    author: string;
    description: string;
}


const getMemoryCardsById = async (query: QueryFunctionContext) => {
    console.log(query)
    const { data }
        = await axios.get(`http://localhost:8080/api/middleCategory/mainCategoryCode?id=${query.queryKey[1]}`)
    return data.list;
}


const Page: NextPage = () => {

    useQuery<TMemoryCard, Error>(["middleCategory", 1], getMemoryCardsById);
    useQuery<TMemoryCard, Error>(["middleCategory", 2], getMemoryCardsById);

    return <div>Parallel Queries Page</div>;
};


export default Page