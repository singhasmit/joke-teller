// selections
const jokeText=document.getElementById('joke');





// events
button.addEventListener('click',tellTheJoke);



// functions
async function getJoke(){
  const apiUrl='https://v2.jokeapi.dev/joke/Programming?type=single';
  try {
    const response=await fetch(apiUrl);
    const data=await response.json()
    return data.joke;

  } catch (error) {
    console.log('error in joke api',error);
  }
}

async function tellTheJoke(joke){
  const programmingJoke=await getJoke();
  jokeText.innerText=programmingJoke;
 window.speechSynthesis.speak(new SpeechSynthesisUtterance(programmingJoke));
}


// on load