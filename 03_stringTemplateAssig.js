function stringTemplateAssign() {
  var MyDreamCompany = "Amdocs";
  console.log("My Dream Company is :", MyDreamCompany);
  var hobby1 = "Craft";
  var hobby2 = "Playing Tennis";
  var hobby3 = "Sketching";
  console.log("2.1", hobby1 + hobby2 + hobby3);
  console.log(
    `2.2 Hobby 1 is ${hobby1} , Hobby 2 is ${hobby2} ,Hobby 3 is ${hobby3}`
  );
  console.log(
    "length of hobby1 : ",
    hobby1.length,
    "length of hobby2 : ",
    hobby2.length,
    "length of hobby3 : ",
    hobby3.length
  );
  console.log(
    "addition of length : ",
    hobby1.length + hobby2.length + hobby3.length
  );
}
stringTemplateAssign();
