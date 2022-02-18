function lifeInWeeks(age) {
  const days = (90*365) - (age*365);
  const weeks = (90*52) - (age*52);
  const months = (90*12) - (age*12);
  
  console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`);
}

lifeInWeeks(56);
