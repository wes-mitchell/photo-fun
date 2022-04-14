
export const getImages = () => {
  return fetch(`https://wes-mitchell.github.io/photoapi/database.json`)
    .then(response => response.json())
    .then(parsedResponse => {
      return parsedResponse
    })
}


// export const getImageById = (imageId) => { 
//   return fetch(`https://wes-mitchell.github.io/photoapi/database.json/`)
//   .then(response => response.json())
//   .then(allData  => {
//     // console.log(allData.images);
//     allData.images.filter(image => {
//       // console.log(image);
//       const filteredImage = []
//       if (image.id === imageId) {
//       filteredImage.push(image)
//       return 
//       }
//       return filteredImage
//   })
//   }    
// )}





// export const showRaw = (imageArr) => {
//   console.log(imageArr); 
//   window.open(`${imageArr.raw}`, "_blank")
//  }


// export const getImages = () => {
//     return fetch("http://localhost:8088/images")
//       .then(response => response.json())
//       .then(parsedResponse => {
//           images = parsedResponse
//           return parsedResponse.sort(function(a, b){return 0.5 - Math.random()});
//         })
//       }



