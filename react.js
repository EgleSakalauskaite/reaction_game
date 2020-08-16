window.onload = appear();
var attempt = 0;
function clicked() {
  document.getElementById("shape").style.display = "none";
  var click= Date.now();
  var reaction_time = (click - start)/1000;
  attempt++;
  document.getElementById("header").innerHTML = "Click the shape as fast as you can! Reaction time: "+reaction_time+" seconds. Times clicked: "+attempt;
  var time_out = Math.floor(Math.random() * 2000);
  setTimeout(appear, time_out);
}
function appear() {
  start = Date.now();
  document.getElementById("shape").style.display = "block";
  var margin_left = Math.floor(Math.random() * 626);
  document.getElementById("shape").style.marginLeft = margin_left+"px";
  var margin_top = Math.floor(Math.random() * 226);
  document.getElementById("shape").style.marginTop = margin_top+"px";
  var colors = ["#D90368", "#630F95", "#473DA4", "#1C9C8B", "#6EB11B", "#FFBE0B", "#F75C03", "#EA2B1F", "#9A031E"];
  var random_color = colors[Math.floor(Math.random() * 9)];
  document.getElementById("shape").style.backgroundColor = random_color;
  var shape_type = Math.floor(Math.random() * 2);
  if (shape_type == 0) {
    document.getElementById("shape").style.borderRadius = "0px";
  }
  else {
    document.getElementById("shape").style.borderRadius = "37.5px";
  }
}
