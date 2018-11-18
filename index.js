// Write your code in this file!

function scuberGreetingForFeet(feet) {
  if (feet < 400){
    return 'This one is on me!'
  }else if (feet > 2000 && feet < 2500) {
    return 'I will gladly take your thirty bucks.';
  }else if (feet > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  let respo;
  city === 'NYC' ? respo = 'Ok, sounds good.' : respo = 'No go.'
  return respo;
}

function switchOnCharmFromTip(geno) {
  switch (geno) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}
