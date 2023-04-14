const API_ENDPOINT = 'https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68'

export const getMenuItems = async () => {
    const response = await fetch(API_ENDPOINT)
    const data = await response.json()
    return data
}