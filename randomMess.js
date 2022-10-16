const joke=['What’s the best thing about Switzerland?','I invented a new word!','Did you hear about the mathematician who’s afraid of negative numbers?','Why do we tell actors to “break a leg?”','Hear about the new restaurant called Karma?']
const reply=['I don’t know, but the flag is a big plus.','Plagiarism!','He’ll stop at nothing to avoid them.','Because every play has a cast','There’s no menu: You get what you deserve.'];
const rand=Math.floor(Math.random()*joke.length)
console.log(joke[rand])
const rep = (a)=>{setTimeout(()=>console.log(a),1000)};
rep(reply[rand])