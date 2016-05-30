// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

window.setInterval(printQuote, 30000);

var randomQuotes = [
	{
		quote : "Thou hast made us for thyself, O Lord, and our heart is restless until it finds its rest in thee.",
		source : "St. Augustine",
		citation : "Confessions",
		year : "AD 400",
		tags : "longing, desire"
	},
	{
		quote : "If you live for people's acceptance, you'll die from their rejection.",
		source : "Lecrae",
		year : 2012,
		tags : "acceptance, inspiration"
	},
	{
		quote : "Violence in the developing world is like grief in the developed world—it’s everywhere, but we just don’t see it.",
		source : "Gary Haugen",
		citation : "The Locust Effect",
		year : 2014,
		tags : "violence, poverty, justice"
	},
	{
		quote : "We have a right to believe whatever we want, but not everything we believe is right.",
		source : "Ravi Zacharias",
		year : 2013,
		tags : "philosophy, belief, knowledge"
	},
	{
		quote : "Our need for worth is so powerful that whatever we base our identity and value on we essentially 'deify'",
		source : "Timothy Keller",
		citation : "The Reason for God",
		year : 2007,
		tags : "religion, identity"
	},
	{
		quote : "Without education, we are in a horrible and deadly danger of taking educated people seriously.",
		source : "G.K. Chesterton",
		tags : "education, knowledge"
	},
	{
		quote : "The supreme happiness of life is the conviction that we are loved; loved for ourselves—say rather, loved in spite of ourselves.",
		source : "Victor Hugo",
		citation : "Les Misérables",
		year : 1862,
		tags : "life, love"
	},
	{
		quote : "..power is for flourishing. When power is used well, people and the whole cosmos come more alive to what they were meant to be.",
		source : "Andy Crouch",
		citation : "Playing God: Redeeming the Gift of Power",
		tags : "power, service"
	},
	{
		quote : "We cannot grow when we are in shame, and we can't use shame to change ourselves or others.",
		source : "Brené Brown",
		tags : "growth, shame, change"
	},
	{
		quote : "If we conceal our wounds out of fear and shame, our inner darkness can neither be illuminated nor become a light for others.",
		source : "Brennan Manning",
		citation : "Abba's Child",
		year : 1994,
		tags : "healing, fear, shame"
	}
];

var randomColor = ["IndianRed", "DarkOrange", "green", "indigo", "SteelBlue", "GoldenRod", "DarkSalmon", "DimGrey", "OliveDrab", "Sienna"];

var usedQuotes = [];

var usedColors = [];

// Return a random quote object from randomQuotes and add a copy of it into usedQuotes array
function getRandomQuote() {
	var selector = Math.floor(Math.random() * randomQuotes.length);
	usedQuotes.push(randomQuotes[selector]);
	return randomQuotes[selector];
}

// Return a random color from randomColor and add a copy of it into usedColors array
function getRandomColor() {
	var randomNumber = Math.floor(Math.random() * randomColor.length); 
	usedColors.push(randomColor[randomNumber]);
	return randomColor[randomNumber];
}

// Replace quote in quote-box div with a random quote and background color
function printQuote() {
	// Get a random quote and color, and store them in variables
	var selectedQuote = getRandomQuote();
	var newColor = getRandomColor();
	// Construct HTML string using different properties of quote object
	// The properties Citation, Year, and Tags are optional
	var quoteHTML = '<p class="quote">' + selectedQuote.quote + '</p><p class="source">' + selectedQuote.source;
	if ("citation" in selectedQuote)
	{
		quoteHTML = quoteHTML + '<span class="citation">' + selectedQuote.citation + '</span>';
	}
	if ("year" in selectedQuote)
	{
		quoteHTML = quoteHTML + '<span class="year">' + selectedQuote.year + '</span>';
	}
	quoteHTML = quoteHTML + '</p>';
	if ("tags" in selectedQuote)
	{
		quoteHTML = quoteHTML + '<p class="tags">Tags: ' + selectedQuote.tags+ '</p>';
	}
	// Remove the selected quote and color from their array
	randomQuotes.splice(randomQuotes.indexOf(selectedQuote), 1);
	randomColor.splice(randomColor.indexOf(newColor), 1);
	// Insert final HTML string into quote-box div
	document.getElementById('quote-box').innerHTML = quoteHTML;
	// Change background color to a new random color
	document.body.style.backgroundColor = newColor;
	document.getElementById('loadQuote').style.backgroundColor = newColor;
	// When all the quotes have been used, refill the randomQuotes array
	// and empty the usedQuotes array
	if (randomQuotes.length == 0) {
		for (i = 0; i < usedQuotes.length; i++)
		{
			randomQuotes.push(usedQuotes[i]);
		}
		usedQuotes = [];
	}
	// When all the colors have been used, refill the randomColor array
	// and empty the usedColors array
	if (randomColor.length == 0) {
		for (i = 0; i < usedColors.length; i++)
		{
			randomColor.push(usedColors[i]);
		}
		usedColors = [];
	}
}

