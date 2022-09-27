import { urlFetch } from "../constants";

export const getGitHubUser = async (user: String) => {
    const response = await fetch(`${urlFetch}${user}`, {
        method: 'GET'
    })

    const payload = await response.json();
    return payload
}