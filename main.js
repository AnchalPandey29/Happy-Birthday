function gift()
{
    var text;
    var gift=prompt("WHAT DO YOU WANT AS YOUR BIRTHDAY GIFT ???","Gift 🎁");
    if (gift == null || gift == "") {
        text = "Please enter a gift :( ";
      } else {
        text = "Yeee " + gift + "! is waiting for you ";
      }
      document.getElementById("gif").innerHTML = text;
}



