import React from 'react';
import '../App.css';
import {Link} from '@reach/router';

const HowToPlay = props => {

    return (
        <div class="HTPbody">
            <h1 class="daRulez">Da Rulez</h1>

        <ul class="ruleList">
            <li class="ruleList1"><h2>Help all the cards get out of the lava pit safely!!</h2></li>
            <li class="ruleList1"><h2>1.) To win you must stack all the cards in ascending order, starting from Ace then 2 then 3 and so on,  according to a cards suit in all of the vacant Ace spots on the left.</h2></li>
            <li class="ruleList1"><h2>2.) To navigate the game you may only stack cards on top of each other IF AND ONLY IF both cards are opposite colors (Red and Black) and they are stacked in descending order (a black 9 can stack on a red 10 but not the other way around).</h2></li>
            <li class="ruleList1"><h2>3.) Kings are the only cards with the authority to take up any empty space on the board.</h2></li>
            <li class="ruleList1"><h2>4.) If you have run out of moves then you are free to draw from the deck as many times as you can</h2></li>
            <li class="ruleList1"><h2>5.) The game ends once all of the cards have been stacked in their proper positions</h2></li>
            <li class="ruleList1"><h2>6.) DON'T DROP THE CARDS IN THE LAVA!!</h2></li>
        </ul>

        <Link to="/" class="HTPbackHome">Back</Link>

        </div>
    );

}

export default HowToPlay;