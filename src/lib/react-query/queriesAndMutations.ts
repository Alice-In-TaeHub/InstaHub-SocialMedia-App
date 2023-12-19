import { INewUser } from '@/types'
import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery

} from '@tanstack/react-query'
import { createUserAccount, signInAccount } from '../appwrite/api'

// creating a new user account
export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}

// sign in a user account
export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: {
            email: string;
            password: string;
        }) => signInAccount(user)
    })
}