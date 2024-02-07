const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")

// setTimeout(() => {
//     heading1.textContent = "one"
//     heading1.style.color = "violet"
//     setTimeout(() => {
//         heading2.textContent = "two"
//         heading2.style.color = "purple"
//         setTimeout(() => {
//             heading3.textContent = "three"
//             heading3.style.color = "red"
//             setTimeout(() => {
//                 heading4.textContent = "four"
//                 heading4.style.color = "pink"
//                 setTimeout(() => {
//                     heading5.textContent = "five"
//                     heading5.style.color = "green"
//                     setTimeout(() => {
//                         heading6.textContent = "six"
//                         heading6.style.color = "blue"
//                         setTimeout(() => {
//                             heading7.textContent = "seven"
//                             heading7.style.color = "brown"
//                         }, 1000);
//                     }, 3000);
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }, 1000);


function callbackhell(element, text, color, time, onsuucess, onfailure) {
    setTimeout(() => {
        if (element) {
            element.textContent = text
            element.style.color = color
            if (onsuucess) {
                onsuucess()
            }
        } else {
            if (onfailure) {
                onfailure()
            }
        }
    }, time);
}


//pyramid of dom

callbackhell(heading1, "one", "red", 1000, () => {
    callbackhell(heading2, "two", "green", 2000, () => {
        callbackhell(heading3, "three", "blue", 1000, () => {
            callbackhell(heading4, "four", "pink", 2000, () => {
                callbackhell(heading5, "five", "green", 3000, () => {
                    callbackhell(heading6, "six", "brown", 2000, () => {
                        callbackhell(heading7, "seven", "cyan", 1000, () => {

                        }, () => { console.log("failure7") })
                    }, () => { console.log("failure6") })
                }, () => { console.log("failure5") })
            }, () => { console.log("failure4") })
        }, () => { console.log("failure3") })
    }, () => { console.log("failure2") })
}, () => { console.log("failure1") })