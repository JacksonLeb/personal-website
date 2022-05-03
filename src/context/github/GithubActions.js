const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

//Get single user
export const getUser = async () => { 
    const response = await fetch(`${GITHUB_URL}/users/JacksonLeb`, {
        hearders: {
            Authorization: `token ${GITHUB_TOKEN}`,
        },
    })
    console.log(response)
    //if not found

    const data = await response.json()
    
    return data
    
}

//get personal repos
export const getUserRepos = async (login) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,
    })

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
        hearders: {
            Authorization: `token ${GITHUB_TOKEN}`
        },
    })

    const data = await response.json()

    return data
}