/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
   return text.split(' ').map((item => item[0].toUpperCase() + item.slice(1).toLowerCase())).join(' ')
}


console.log(capSentence('i woulD lOVe to spEAk at jsconF.'))


module.exports = capSentence