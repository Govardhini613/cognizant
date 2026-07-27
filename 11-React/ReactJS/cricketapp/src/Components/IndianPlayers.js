function IndianPlayers(){

const oddPlayers=["Virat","Gill","Pant","Jadeja","Shami"];

const evenPlayers=["Rohit","Rahul","Hardik","Siraj","Kuldeep"];

const T20players=["Virat","Rohit","Pant"];

const RanjiPlayers=["Rahul","Gill","Jadeja"];

const merged=[...T20players,...RanjiPlayers];

return(

<div>

<h2>Odd Team Players</h2>

<ul>

{oddPlayers.map((p,i)=><li key={i}>{p}</li>)}

</ul>

<h2>Even Team Players</h2>

<ul>

{evenPlayers.map((p,i)=><li key={i}>{p}</li>)}

</ul>

<h2>Merged Players</h2>

<ul>

{merged.map((p,i)=><li key={i}>{p}</li>)}

</ul>

</div>

);

}

export default IndianPlayers;