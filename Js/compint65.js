var amount;
var principal = 1000.0;
var rate = 0.05;

document.writeln("<table border = \"1\">");
document.writeln("<caption>Calculating Compound Interest</caption>");
document.writeln("<thread><tr><th>Year</th>");
document.writeln("<th>Amount on Deposit</th>");
document.writeln("</tr></thread><tbody>");
for(var year = 1; year <= 10; ++year) {
  amount = principal * Math.pow(1.0 + rate, year);
  document.writeln("<tr><td>" + year + "</td><td>" + amount.toFixed(2) + "</td></tr>");
}
document.writeln("</tbody></table>");