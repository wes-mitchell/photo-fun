let images = []

export const getImages = () => {
  return fetch("http://localhost:8088/images")
    .then(response => response.json())
    .then(parsedResponse => {
      images = parsedResponse
      return parsedResponse
    })
}