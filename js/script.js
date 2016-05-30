// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

window.setInterval(printQuote, 30000);

var randomQuotes = [
	{
		quote : "There is always more misery among the lower classes than there is humanity in the higher.",
		source : "Victor Hugo",
		citation : "Les Misérables",
		year : 1862,
		tag : "humanity"
	},
	{
		quote : "If you live for people's acceptance, you'll die from their rejection.",
		source : "Lecrae",
		year : 2012
	},
	{
		quote : "Education without values, as useful as it is, seems rather to make man a more clever devil.",
		source : "C.S. Lewis",
		tag : "education"
	},
	{
		quote : "We have a right to believe whatever we want, but not everything we believe is right.",
		source : "Ravi Zacharias",
		year : 2013
	},
	{
		quote : "Our need for worth is so powerful that whatever we base our identity and value on we essentially 'deify'",
		source : "Timothy Keller",
		citation : "The Reason for God",
		year : 2007
	},
	{
		quote : "Without education, we are in a horrible and deadly danger of taking educated people seriously.",
		source : "G.K. Chesterton"
	},
	{
		quote : "The supreme happiness of life is the conviction that we are loved; loved for ourselves—say rather, loved in spite of ourselves.",
		source : "Victor Hugo",
		citation : "Les Misérables",
		year : 1862
	},
	{
		quote : "..power is for flourishing. When power is used well, people and the whole cosmos come more alive to what they were meant to be.",
		source : "Andy Crouch",
		citation : "Playing God: Redeeming the Gift of Power"
	},
	{
		quote : "We cannot grow when we are in shame, and we can't use shame to change ourselves or others.",
		source : "Brené Brown"
	},
	{
		quote : "The fault, dear Brutus, is not in our stars, but in ourselves, that we are underlings.",
		source : "William Shakespeare",
		citation : "Julius Caesar",
		year : 1599
	}
];

var randomColor = ["IndianRed", "DarkOrange", "green", "indigo", "SteelBlue", "GoldenRod", "DarkSalmon", "DimGrey", "OliveDrab", "Sienna"];

var quoteContainer = [];

function getRandomQuote() {
	var selector = Math.floor(Math.random() * randomQuotes.length);
	quoteContainer.push(randomQuotes[selector]);
	return randomQuotes[selector];
}

function getRandomColor() {
	var randomNumber = Math.floor(Math.random() * randomColor.length); 
	return randomColor[randomNumber];
}

function printQuote() {
	var selectedQuote = getRandomQuote();
	var quoteHTML = '<p class="quote">' + selectedQuote.quote + '</p><p class="source">' + selectedQuote.source;
	if ("citation" in selectedQuote)
	{
		quoteHTML = quoteHTML + '<span class="citation">' + selectedQuote.citation + '</span>';
	}
	if ("year" in selectedQuote)
	{
		quoteHTML = quoteHTML + '<span class="year">' + selectedQuote.year + '</span> </p>';
	}
	quoteHTML = quoteHTML + '</p>';
	randomQuotes.splice(randomQuotes.indexOf(selectedQuote), 1);
	var newColor = getRandomColor();
	document.getElementById('quote-box').innerHTML = quoteHTML;
	document.body.style.backgroundColor = newColor;
	document.getElementById('loadQuote').style.backgroundColor = newColor;
	if (randomQuotes.length == 0) {
		for (i = 0; i < quoteContainer.length; i++)
		{
			randomQuotes.push(quoteContainer[i]);
		}
		quoteContainer = [];
	}
}

