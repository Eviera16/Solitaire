import React, { useState } from 'react';
import Card from '../components/Card';
import InPlay from '../components/inPlay';
import CardContext from '../contexts/cardContext';
import {Link} from '@reach/router';
import lavagif from '../images/lavagif.gif';
import '../App.css';


const Play = props => {

    const [cardVal, setCardVal] = useState("");
    const [cardSuite, setCardSuite] = useState("");
    const [cardColor, setCardColor] = useState("");
    const [prevCard, setPrevCard] = useState();
    const [prevDiv, setPrevDiv] = useState();
    const [deckSuite, setDeckSuite] = useState([]);


    const firstArr = [];
    const secArr = [];

    for (var i = 0; i < 28; i++) {
        firstArr.push(props.Deck[i]);
    }
    for (var j = 28; j < 52; j++) {
        secArr.push(props.Deck[j]);
    }

    return (
        <div className="mainPlay" style={{backgroundImage:lavagif}}> 
        <CardContext.Provider value={{cardVal, setCardVal, cardSuite, setCardSuite, cardColor, setCardColor, prevCard, setPrevCard, prevDiv, setPrevDiv, deckSuite, setDeckSuite}}>
            <InPlay 
            deck1={firstArr}
            deck2={secArr}
            />
            <Link to="/" class="backHome">Back</Link>
        </CardContext.Provider>
            
            
        </div>
    );
}

export default Play;


{/* <div class="inPlay" style={{ display: "flex", flexDirection: "column" }}>
                {
                    firstArr.map((card, i) => {
                        console.log("Card", card);
                        console.log("I here ", i);
                        return (
                            <div style={{ width: 300, backgroundColor: "blue", display: "flex"}} key={i}>
                                <Card
                                    val={card.Value}
                                    suite={card.Suite}
                                    color={card.Color}
                                    faceUp={true}
                                />
                                <p>{i}</p>
                            </div>
                        )
                    })
                }
            </div> */}


            // {
            //     secArr.map((card, i) => {
            //         console.log("Card", card);
            //         return (
            //             <div style={{ display: "flex", marginLeft: 400 }}>
            //                 <div style={{ width: 300, border: "1px solid blue" }} key={i}>
            //                     <Card
            //                         val={card.Value}
            //                         suite={card.Suite}
            //                         color={card.Color}
            //                         faceUp={false}
            //                         zIndex={i}
            //                     />

            //                     <p>{i}</p>
            //                 </div>
            //             </div>
            //         )
            //     })
            // }