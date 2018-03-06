// create a function that counts all the vowels in a string

function vowelCount(string){
    let str = string.split("");
    let vowel_list = "aeiouAEIOU";
    let vowel_count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowel_list.indexOf(str[i]) !== -1){
            vowel_count += 1;
        }
    }
    return vowel_count;
}

console.log(vowelCount("Hello World"));
// result: 3