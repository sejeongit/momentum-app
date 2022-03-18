const quotes = [
  {
    quote : "Always read stuff that will make you look good if you die in the middle of it.",
    author : "P. J. O'Rourke",
  },
  {
    quote : "Luck is what you have left over after you give 100 percent.",
    author : "Langston Coleman",
  },
  {
    quote : "In silence man can most readily preserve his integrity.",
    author : "Meister Eckhart",
  },
  {
    quote : "Love all, trust a few. Do wrong to none.",
    author : "William Shakespeare",
  },
  {
    quote : "Tis the most tender part of love, each other to forgive.",
    author : "John Sheffield",
  },
  {
    quote : "For one human being to love another; that is perhaps the most difficult of all our tasks, the ultimate, the last test and proof, the work for which all other work is but preparation.",
    author : "Rainer Maria Rilke",
  },
  {
    quote : "He who would travel happily must travel light.",
    author : "Antoine de Saint-Exupery",
  },
  {
    quote : "Man as an individual is a genius. But men in the mass form the headless monster, a great, brutish idiot that goes where prodded.",
    author : "Charlie Chaplin",
  },
  {
    quote : "Until the day when God shall deign to reveal the future to man, all human wisdom is summed up in these two words,--'Wait and hope'.",
    author : "Alexandre Dumas",
  },
  {
    quote : "It is an illusion that youth is happy, an illusion of those who have lost it; but the young know they are wretched for they are full of the truthless ideal which have been instilled into them, and each time they come in contact with the real, they are bruised and wounded.",
    author : "William Somerset Maugham",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() *  quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
