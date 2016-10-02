function greetings(name, details) {
  var fullName = name.join(" ");
  var fullOccupation = '';
  for (detail in details) {
    fullOccupation += details[detail] + " ";
  }
  return "Hello, " + fullName + "! Nice to have a " + fullOccupation + "around.";
}