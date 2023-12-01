export type UserType = {
    id: number
    firstName: string
    lastName: string
    email: string
    role: 'user' | 'customer' | 'admin'
    status: 'pending' | 'email' | 'approved' | 'rejected'
}