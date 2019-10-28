


const outEl = document.querySelector("#container")
businesses.forEach(business => {
    let totalOrders = business.orders.reduce(
        currentTotal, nextValue) => currentTotal += nextValue
    })



// // //   outEl.innerHTML = "<h1>Acitve Businesses</h1>"
// // // listing of each business & address
// // //   businesses.forEach(business => {
// // //       const zipCodeKey = "addressZipCode";
// // //       outEl.innerHTML += `
// // //       <h2>${business.companyName}</h2>
// // //       <section>
// // //       ${business.addressFullStreet}
// // //       </section>
// // //       <section>${business.addressCity}, ${business["addressStateCode"]} ${business[zipCodeKey]}</section>
// // //       `
// // //   })
// // // arrary to contain all businesses in NY
// // //   const newYorkBusinesses = businesses.filter(business => {
// // //       let inNewYork = false;
// // //       if (business.addressStateCode === "NY") {
// // //           inNewYork = true;
// // //       } 
// // //       return inNewYork
// // //   })
// // // console.log("test", newYorkBusinesses)
// // // // only New York businesses to the dom
// // //   newYorkBusinesses.forEach(business => {
// // //       const zipCodeKey = "addressZipCode";
// // //       outEl.innerHTML += `
// // //       <h2>${business.companyName}</h2>
// // //       <section>
// // //       ${business.addressFullStreet}
// // //       </section>
// // //       <section>${business.addressCity}, ${business["addressStateCode"]} ${business[zipCodeKey]}</section>
// // //       `
// // //   })

// // // const manufacturingBusinesses = businesses.filter(business => {
// // //     if (business.companyIndustry === "Manufacturing") {
// // //         manufacturing = true;
// // //     } else {
// // //         return false;
// // //     }
// // //     return manufacturing
// // // })
// // // console.log("manufacturing test", manufacturingBusinesses);
// // //   manufacturingBusinesses.forEach(business => {
// // //       const zipCodeKey = "addressZipCode";
// // //       outEl.innerHTML += `
// // //       <h2>${business.companyName}</h2>
// // //       <section>
// // //       ${business.addressFullStreet}
// // //       </section>
// // //       <section>${business.addressCity}, ${business["addressStateCode"]} ${business[zipCodeKey]}</section>
// // //       `
// // //   })


// // outEl.innerHTML += "<h1>Purchasing Agents</h1>";

// // /*
// //     Using map(), you extract the purchasing agent object
// //     from each business and store it in a new array
// // */
// // const agents = businesses.map(business => {
// //     return {
// //         fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
// //         phone: business.phoneWork,
// //         coName: business.companyName
// //     }
// // })
// // console.log("agent object", agents)

// // agents.forEach(agent => {
// //     outEl.innerHTML +=
// //         `<h2>${agent.fullName}</h2>
// //          <p>${agent.coName}</p>
// //          <p>${agent.phone}</p>
// //         `;
// //     outEl.innerHTML += "<hr/>";
// // });


// const outEl = document.querySelector("#container");
// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundBusiness = businesses.find(
//                 business =>
//                     business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value)
//             );

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
//                 </h2>
//                 <section>
//                 ${foundBusiness.companyName}

//                 </section>
            
//             `;
//         }
//     });


    const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

    const totalRainfall = monthlyRainfall.reduce((total, currentValue) => total += currentValue)

    console.log("total rainfall", totalRainfall)
  
const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

const theSentence = words.reduce((sentence, currentWord) => sentence += ` ${currentWord}`);
console.log("letter sentence", theSentence);


