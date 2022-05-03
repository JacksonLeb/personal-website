const GITHUB_URL = process.env.GITHUB_URL
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

//get personal repos
export const getPersonalRepos = async () => {

    //Establishing params to get 10 repos/page sorted by recently created
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,
    })

    //Getting API resopnse for my personal Github repos
    const response = await fetch(`${GITHUB_URL}/users/JacksonLeb/repose?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
        }
    })

    //Jsonizing Data
    const data = await response.json()

    return data
}