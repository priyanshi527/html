alert('Please give your feedback!')
function post() {
if(window.confirm("Are you sure you want to submit?"))
{
	window.open("https://formspree.io/thanks?next=https%3A%2F%2Fpriyanshi527.github.io%2Fhtml%2FPortfolio%2Fportfolio.html&language=en")
}
else {
	window.open("https://priyanshi527.github.io/html/Portfolio/portfolio.html");
}
}
