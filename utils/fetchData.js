const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const getData = async (url) => {
    const res = await fetch(`${baseUrl}/${url}`, {
        method: 'GET',
      
    })

    const data =  res.json()
    return data
}



