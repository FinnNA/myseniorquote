
var quotes=new Array()

//change the quotes if desired. Add/ delete additional quotes as desired.

quotes[0]='<i class="em em-ok_hand" style=" font-size:250px;"></i>'
quotes[1]='Whats the deal with airplane food.'


var whichquote=Math.floor(Math.random()*(quotes.length))
document.write(quotes[whichquote])
