import { useMutation } from "@tanstack/react-query"
import { mutatePhoneNum } from "./apis"

const useMutateOTP = () => {
    return useMutation({
        mutationFn: (body) => mutatePhoneNum(body),
        onSuccess: () => {
            console.log("Success")
        },
        onError: () => {
            console.log("Error")
        }
    })
}

export { useMutateOTP }