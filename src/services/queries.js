import { useQuery } from "@tanstack/react-query"
import { getProducts } from "./apis"

const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getProducts
    })
}

export { useProducts }