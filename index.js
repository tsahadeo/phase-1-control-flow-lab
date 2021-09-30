function scuberGreetingForFeet(someValue){
if (someValue === 199){
  return 'This one is on me!'}
  else if (someValue == 2001){
    return 'I will gladly take your thirty bucks.'}
  else (someValue > 2500)
    return 'No can do.'
}

function ternaryCheckCity(someCity){
  return (someCity === ('NYC')) ? ('Ok, sounds good.') : ('No go.')
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'; break;
      case 'not as generous':
        return 'Thank you.'; break;
        default:
          return 'Bye.'; break;
  }
}