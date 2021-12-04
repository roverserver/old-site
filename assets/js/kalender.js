function myFunction() {
  /* Get the text field */
  var copyText = "https://calendar.teamup.com/kb/subscribe-to-teamup-icalendar-feeds/";

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("ical link in Zwischenablage Kopiert");
}
