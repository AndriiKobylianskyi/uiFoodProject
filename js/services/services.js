async function getDate(url) {
    let result = await fetch(url)

    if (!result.ok) throw Error(`Could not fetch ${url}, status: ${res.status}`)

    return await result.json()
}

const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    })

    return await res.json
}
export { getDate }
export { postData }