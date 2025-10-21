// 내 답변
// export default function reverseString(str){
    
//     let reverseS = [];
//     for(let i=0; i < str.length; i++){
//         reverseS.push(str[str.length -1 -i]);
//     }
//     return reverseS.join("");
// }

// export function toUpperCase(str){
//     return str.toUpperCase()
// }


// ================ 
// ==== 모범답안 ====
export default function reverseString(str){
    return str.split("").reverse().join("");
}

export function toUpperCase(str){
    return str.toUpperCase()
}