export interface UserRepoMinimum {
    name: string,
    html_url: string,
    description: string,
    language: string,
}

export interface UserRepo extends UserRepoMinimum{
    id: number,
    favourite: false
}