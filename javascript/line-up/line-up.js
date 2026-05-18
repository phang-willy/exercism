//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, order) => {
  let suffix;

  const lastTwo = order % 100

  if (lastTwo >= 11 && lastTwo <= 13) {
    suffix = "th"
  } else {
    switch (order % 10) {
      case 1:
        suffix = "st";
        break;

      case 2:
        suffix = "nd";
        break;

        case 3:
        suffix = "rd";
        break

      default:
        suffix = "th";
    }
  }

  const position = String(order)+suffix

  return name +", you are the "+ position +" customer we serve today. Thank you!"
};
