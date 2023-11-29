let str1="listen";
let str2="silent";
 str1=str1.toLowerCase().split("").sort().join("");
 str2=str2.toLowerCase().split("").sort().join("");
if(str1 == str2)
{
    console.log("The given string is anagram")
}
else
{
    console.log("Not anagram")
}