'use client'

import axios from "axios";
import {
  TMemoryCardAdd,
  TMemoryCardPages,
  TMemoryCards,
  TMemoryCard,
  TMainCategoryResponse,
  TMiddleCategorys
} from "@/types/types";
import {NextPage} from "next";
import {QueryFunctionContext, useQuery} from "react-query";

const baseUrl = "http://localhost:8080/api";

export async function fetchMemoryCards(id: number) {
  const req = await fetch(`${baseUrl}/memoryCard/middlecode?param=${id}`);
  const data = await req.json();
}

//
const getMemoryCardPage = async ({queryKey}: QueryFunctionContext) => {
  const res = await axios.get(`${baseUrl}/memoryCard/next?page=${queryKey[1]}`)
  return res.data;
}

const getMemoryCardByKey = async ({queryKey}: QueryFunctionContext) => {
  const res = await axios.get<TMemoryCard>(`${baseUrl}/memoryCard/one?id=${queryKey[1]}`)
  return res.data;
}

const getMemoryCardListByMiddleCategory = async ({queryKey}: QueryFunctionContext) => {
  const res = await axios.get(
    `${baseUrl}/memoryCard/middlecode?param=${queryKey[1]}`
  );
  return res.data;
}


const getMainCategoryByKey = async ({queryKey}: QueryFunctionContext) => {
  const res = await axios.get<TMainCategoryResponse>(`${baseUrl}/mainCategory/one?id=${queryKey[1]}`)
  return res.data;
}

const getMiddleCategoryByMainCatId = async ({queryKey}: QueryFunctionContext) => {
  const res = await  axios.get<TMiddleCategorys>(`${baseUrl}/middleCategory/mainCategoryCode?id=${queryKey[1]}`)
  return res.data;
}

const DependentQueriesPage = () => {
  const {data: maincategory} = useQuery(["mainCategory", 1], getMainCategoryByKey)
  const {data: middlecategorys} = useQuery(["middleCategoryList", maincategory?.data.id], getMiddleCategoryByMainCatId,
    {enabled: !!maincategory?.data.id,})


  console.log(maincategory)
  console.log(middlecategorys)

  return <div>Dependent Queries Page</div>

}

export default DependentQueriesPage

