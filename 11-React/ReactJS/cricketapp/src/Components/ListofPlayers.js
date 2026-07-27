function ListofPlayers(){

const players=[

{name:"Virat",score:95},
{name:"Rohit",score:85},
{name:"Gill",score:91},
{name:"Rahul",score:62},
{name:"Pant",score:78},
{name:"Hardik",score:66},
{name:"Jadeja",score:72},
{name:"Bumrah",score:48},
{name:"Siraj",score:39},
{name:"Shami",score:70},
{name:"Kuldeep",score:64}

];

const lowScore=players.filter(player=>player.score<70);

return(

<div>

<h2>List of Players</h2>

<ul>

{players.map((player,index)=>

<li key={index}>

{player.name} - {player.score}

</li>

)}

</ul>

<h2>Players with score below 70</h2>

<ul>

{lowScore.map((player,index)=>

<li key={index}>

{player.name} - {player.score}

</li>

)}

</ul>

</div>

);

}

export default ListofPlayers;