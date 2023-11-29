let word="Athira is a good girl";

function lengthOfWord()
{
    let count =0;
    for(let i=word.length-1;i>=0;i--)
    {
      if(word.charAt(i)!==' ')
      {
        count++;
      }
      else
      {
        if(count>0)
        {
            return count;
        }
      }
    }

}
let count=lengthOfWord(word);
console.log("Last word length is :"+count)