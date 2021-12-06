var birthDate = document.querySelector("#birth-date");
var luckyNumber = document.querySelector("#lucky-no");
var checkButton = document.querySelector("#check-button");
var outputBox = document.querySelector("#output");
console.log("I am here");
checkButton.addEventListener('click', checkBirthDateIsLucky)

function compareValues(sum,luckyNumber)
{
  if(sum%luckyNumber === 0)
  {
  outputBox.innerText = "Yeah! Its Lucky for you 🙌!!!";
  }
else
{
    outputBox.innerText = "Oops!!! Not so lucky 😢";
}
}
function checkBirthDateIsLucky()
{
  const dob = birthDate.value;
  const sum = calculateSum(dob);
  compareValues(sum,luckyNumber.value);
 
}

function calculateSum(dob)
{
  let sum = 0;
  dob = dob.replaceAll("-","");
  for (i=0;i<dob.length;i++)
{
  sum = sum + Number(dob.charAt(i));
  
}
return sum;
}