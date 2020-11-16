import React, { useState, useContext, useEffect } from 'react';
import Card from './Card';
import CardContext from '../contexts/cardContext';
import { Link } from '@reach/router';
import '../App.css';
import backCard from '../images/backCard.png';
import TwoC from '../images/2C.png';
import TwoD from '../images/2D.png';
import TwoH from '../images/2H.png';
import TwoS from '../images/2S.png';
import ThreeC from '../images/3C.png';
import ThreeD from '../images/3D.png';
import ThreeH from '../images/3H.png';
import ThreeS from '../images/3S.png';
import FourC from '../images/4C.png';
import FourD from '../images/4D.png';
import FourH from '../images/4H.png';
import FourS from '../images/4S.png';
import FiveC from '../images/5C.png';
import FiveD from '../images/5D.png';
import FiveH from '../images/5H.png';
import FiveS from '../images/5S.png';
import SixC from '../images/6C.png';
import SixD from '../images/6D.png';
import SixH from '../images/6H.png';
import SixS from '../images/6S.png';
import SevenC from '../images/7C.png';
import SevenD from '../images/7D.png';
import SevenH from '../images/7H.png';
import SevenS from '../images/7S.png';
import EightC from '../images/8C.png';
import EightD from '../images/8D.png';
import EightH from '../images/8H.png';
import EightS from '../images/8S.png';
import NineC from '../images/9C.png';
import NineD from '../images/9D.png';
import NineH from '../images/9H.png';
import NineS from '../images/9S.png';
import TenC from '../images/10C.png';
import TenD from '../images/10D.png';
import TenH from '../images/10H.png';
import TenS from '../images/10S.png';
import JackC from '../images/JC.png';
import JackD from '../images/JD.png';
import JackH from '../images/JH.png';
import JackS from '../images/JS.png';
import QueenC from '../images/QC.png';
import QueenD from '../images/QD.png';
import QueenH from '../images/QH.png';
import QueenS from '../images/QS.png';
import KingC from '../images/KC.png';
import KingD from '../images/KD.png';
import KingH from '../images/KH.png';
import KingS from '../images/KS.png';
import AceC from '../images/AC.png';
import AceD from '../images/AD.png';
import AceH from '../images/AH.png';
import AceS from '../images/AS.png';
import { parseJSON } from 'jquery';

const InPlay = props => {

    const [deckCard, setDeckCard] = useState(false);
    const [counter, setCounter] = useState(0);
    const [usedCards, setUsedCards] = useState([]);
    const [newDeck, setNewDeck] = useState([]);
    const [clickDeck, setClickDeck] = useState(false);
    const [kingCount, setKingCount] = useState(0);
    const [ youWon, setYouWon] = useState(false);

    const { cardVal, cardSuite, cardColor, prevCard, prevDiv, deckSuite, setDeckSuite } = useContext(CardContext);

    const findImage2 = (cardHere, val, suite) => {
        if (val === "A") {
            if (suite === "Heart") {
                cardHere.setAttribute("style", `background-image: url(${AceH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Spade") {
                cardHere.setAttribute("style", `background-image: url(${AceS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Clover") {
                cardHere.setAttribute("style", `background-image: url(${AceC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Diamond") {
                cardHere.setAttribute("style", `background-image: url(${AceD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
        }
        else if (val === "K") {
            if (suite === "Heart") {
                cardHere.setAttribute("style", `background-image: url(${KingH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Spade") {
                cardHere.setAttribute("style", `background-image: url(${KingS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Clover") {
                cardHere.setAttribute("style", `background-image: url(${KingC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Diamond") {
                cardHere.setAttribute("style", `background-image: url(${KingD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
        }
        else if (val === "Q") {
            if (suite === "Heart") {
                cardHere.setAttribute("style", `background-image: url(${QueenH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Spade") {
                cardHere.setAttribute("style", `background-image: url(${QueenS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Clover") {
                cardHere.setAttribute("style", `background-image: url(${QueenC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Diamond") {
                cardHere.setAttribute("style", `background-image: url(${QueenD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
        }
        if (val === "J") {
            if (suite === "Heart") {
                cardHere.setAttribute("style", `background-image: url(${JackH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Spade") {
                cardHere.setAttribute("style", `background-image: url(${JackS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Clover") {
                cardHere.setAttribute("style", `background-image: url(${JackC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Diamond") {
                cardHere.setAttribute("style", `background-image: url(${JackD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
        }
        if (val === "2") {
            if (suite === "Heart") {
                cardHere.setAttribute("style", `background-image: url(${TwoH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Spade") {
                cardHere.setAttribute("style", `background-image: url(${TwoS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Clover") {
                cardHere.setAttribute("style", `background-image: url(${TwoC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Diamond") {
                cardHere.setAttribute("style", `background-image: url(${TwoD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
        }
        else if (val === "3") {
            if (suite === "Heart") {
                cardHere.setAttribute("style", `background-image: url(${ThreeH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Spade") {
                cardHere.setAttribute("style", `background-image: url(${ThreeS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Clover") {
                cardHere.setAttribute("style", `background-image: url(${ThreeC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Diamond") {
                cardHere.setAttribute("style", `background-image: url(${ThreeD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
        }
        else if (val === "4") {
            if (suite === "Heart") {
                cardHere.setAttribute("style", `background-image: url(${FourH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Spade") {
                cardHere.setAttribute("style", `background-image: url(${FourS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Clover") {
                cardHere.setAttribute("style", `background-image: url(${FourC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Diamond") {
                cardHere.setAttribute("style", `background-image: url(${FourD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
        }
        else if (val === "5") {
            if (suite === "Heart") {
                cardHere.setAttribute("style", `background-image: url(${FiveH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Spade") {
                cardHere.setAttribute("style", `background-image: url(${FiveS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Clover") {
                cardHere.setAttribute("style", `background-image: url(${FiveC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Diamond") {
                cardHere.setAttribute("style", `background-image: url(${FiveD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
        }
        else if (val === "6") {
            if (suite === "Heart") {
                cardHere.setAttribute("style", `background-image: url(${SixH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Spade") {
                cardHere.setAttribute("style", `background-image: url(${SixS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Clover") {
                cardHere.setAttribute("style", `background-image: url(${SixC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Diamond") {
                cardHere.setAttribute("style", `background-image: url(${SixD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
        }
        else if (val === "7") {
            if (suite === "Heart") {
                cardHere.setAttribute("style", `background-image: url(${SevenH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Spade") {
                cardHere.setAttribute("style", `background-image: url(${SevenS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Clover") {
                cardHere.setAttribute("style", `background-image: url(${SevenC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Diamond") {
                cardHere.setAttribute("style", `background-image: url(${SevenD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
        }
        else if (val === "8") {
            if (suite === "Heart") {
                cardHere.setAttribute("style", `background-image: url(${EightH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Spade") {
                cardHere.setAttribute("style", `background-image: url(${EightS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Clover") {
                cardHere.setAttribute("style", `background-image: url(${EightC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Diamond") {
                cardHere.setAttribute("style", `background-image: url(${EightD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
        }
        else if (val === "9") {
            if (suite === "Heart") {
                cardHere.setAttribute("style", `background-image: url(${NineH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Spade") {
                cardHere.setAttribute("style", `background-image: url(${NineS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Clover") {
                cardHere.setAttribute("style", `background-image: url(${NineC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Diamond") {
                cardHere.setAttribute("style", `background-image: url(${NineD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
        }
        else if (val === "10") {
            if (suite === "Heart") {
                cardHere.setAttribute("style", `background-image: url(${TenH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Spade") {
                cardHere.setAttribute("style", `background-image: url(${TenS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Clover") {
                cardHere.setAttribute("style", `background-image: url(${TenC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
            else if (suite === "Diamond") {
                cardHere.setAttribute("style", `background-image: url(${TenD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; position: absolute; z-index:${counter};`);
            }
        }
        return cardHere;
    }

    const findImage = (cardHere, C) => {
        var boolHere = false;
        if (cardHere === null){
            boolHere = true;
        }
        if (boolHere === false){
            if (cardHere.className === "A") {
                if (deckSuite[23 - C] === "Heart") {
                    cardHere.setAttribute("style", `background-image: url(${AceH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Spade") {
                    cardHere.setAttribute("style", `background-image: url(${AceS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Clover") {
                    cardHere.setAttribute("style", `background-image: url(${AceC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Diamond") {
                    cardHere.setAttribute("style", `background-image: url(${AceD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
            }
            else if (cardHere.className === "K") {
                if (deckSuite[23 - C] === "Heart") {
                    cardHere.setAttribute("style", `background-image: url(${KingH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Spade") {
                    cardHere.setAttribute("style", `background-image: url(${KingS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Clover") {
                    cardHere.setAttribute("style", `background-image: url(${KingC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Diamond") {
                    cardHere.setAttribute("style", `background-image: url(${KingD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
            }
            else if (cardHere.className === "Q") {
                if (deckSuite[23 - C] === "Heart") {
                    cardHere.setAttribute("style", `background-image: url(${QueenH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Spade") {
                    cardHere.setAttribute("style", `background-image: url(${QueenS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left:-130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Clover") {
                    cardHere.setAttribute("style", `background-image: url(${QueenC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left:-130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Diamond") {
                    cardHere.setAttribute("style", `background-image: url(${QueenD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left:-130px; z-index:${counter};`);
                }
            }
            if (cardHere.className === "J") {
                if (deckSuite[23 - C] === "Heart") {
                    cardHere.setAttribute("style", `background-image: url(${JackH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Spade") {
                    cardHere.setAttribute("style", `background-image: url(${JackS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Clover") {
                    cardHere.setAttribute("style", `background-image: url(${JackC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Diamond") {
                    cardHere.setAttribute("style", `background-image: url(${JackD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
            }
            if (cardHere.className === "2") {
                if (deckSuite[23 - C] === "Heart") {
                    cardHere.setAttribute("style", `background-image: url(${TwoH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Spade") {
                    cardHere.setAttribute("style", `background-image: url(${TwoS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Clover") {
                    cardHere.setAttribute("style", `background-image: url(${TwoC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Diamond") {
                    cardHere.setAttribute("style", `background-image: url(${TwoD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
            }
            else if (cardHere.className === "3") {
                if (deckSuite[23 - C] === "Heart") {
                    cardHere.setAttribute("style", `background-image: url(${ThreeH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left:-130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Spade") {
                    cardHere.setAttribute("style", `background-image: url(${ThreeS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left:-130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Clover") {
                    cardHere.setAttribute("style", `background-image: url(${ThreeC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left:-130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Diamond") {
                    cardHere.setAttribute("style", `background-image: url(${ThreeD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left:-130px; z-index:${counter};`);
                }
            }
            else if (cardHere.className === "4") {
                if (deckSuite[23 - C] === "Heart") {
                    cardHere.setAttribute("style", `background-image: url(${FourH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Spade") {
                    cardHere.setAttribute("style", `background-image: url(${FourS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Clover") {
                    cardHere.setAttribute("style", `background-image: url(${FourC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Diamond") {
                    cardHere.setAttribute("style", `background-image: url(${FourD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
            }
            else if (cardHere.className === "5") {
                if (deckSuite[23 - C] === "Heart") {
                    cardHere.setAttribute("style", `background-image: url(${FiveH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Spade") {
                    cardHere.setAttribute("style", `background-image: url(${FiveS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Clover") {
                    cardHere.setAttribute("style", `background-image: url(${FiveC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Diamond") {
                    cardHere.setAttribute("style", `background-image: url(${FiveD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
            }
            else if (cardHere.className === "6") {
                if (deckSuite[23 - C] === "Heart") {
                    cardHere.setAttribute("style", `background-image: url(${SixH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Spade") {
                    cardHere.setAttribute("style", `background-image: url(${SixS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Clover") {
                    cardHere.setAttribute("style", `background-image: url(${SixC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Diamond") {
                    cardHere.setAttribute("style", `background-image: url(${SixD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
            }
            else if (cardHere.className === "7") {
                if (deckSuite[23 - C] === "Heart") {
                    cardHere.setAttribute("style", `background-image: url(${SevenH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left:-130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Spade") {
                    cardHere.setAttribute("style", `background-image: url(${SevenS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left:-130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Clover") {
                    cardHere.setAttribute("style", `background-image: url(${SevenC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left:-130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Diamond") {
                    cardHere.setAttribute("style", `background-image: url(${SevenD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left:-130px; z-index:${counter};`);
                }
            }
            else if (cardHere.className === "8") {
                if (deckSuite[23 - C] === "Heart") {
                    cardHere.setAttribute("style", `background-image: url(${EightH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left:-130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Spade") {
                    cardHere.setAttribute("style", `background-image: url(${EightS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left:-130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Clover") {
                    cardHere.setAttribute("style", `background-image: url(${EightC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left:-130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Diamond") {
                    cardHere.setAttribute("style", `background-image: url(${EightD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left:-130px; z-index:${counter};`);
                }
            }
            else if (cardHere.className === "9") {
                if (deckSuite[23 - C] === "Heart") {
                    cardHere.setAttribute("style", `background-image: url(${NineH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Spade") {
                    cardHere.setAttribute("style", `background-image: url(${NineS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Clover") {
                    cardHere.setAttribute("style", `background-image: url(${NineC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Diamond") {
                    cardHere.setAttribute("style", `background-image: url(${NineD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
            }
            else if (cardHere.className === "10") {
                if (deckSuite[23 - C] === "Heart") {
                    cardHere.setAttribute("style", `background-image: url(${TenH}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Spade") {
                    cardHere.setAttribute("style", `background-image: url(${TenS}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Clover") {
                    cardHere.setAttribute("style", `background-image: url(${TenC}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
                else if (deckSuite[23 - C] === "Diamond") {
                    cardHere.setAttribute("style", `background-image: url(${TenD}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: -130px; z-index:${counter};`);
                }
            }
            return cardHere;
        }
    }

    useEffect(() => {
        const BrandNewArr = [];
        for (var i = 0; i < props.deck2.length; i++) {
            BrandNewArr.push(props.deck2[i].Suite);
        }
        setDeckSuite(BrandNewArr);
        console.log("BrandNewArr here:", BrandNewArr);
    }, [])

    console.log("Deck SUites here: ", deckSuite);

    console.log("Hello there!!");

    const clickHandler = e => {
        e.preventDefault();
        setClickDeck(true);
        console.log("Deck Card here before if: ", deckCard);
        var testArr2 = ["H23", "H22", "H21", "H20", "H19", "H18", "H17", "H16", "H15", "H14", "H13", "H12", "H11", "H10", "H9", "H8", "H7", "H6", "H5", "H4", "H3", "H2", "H1", "H0"];
        console.log("TestArr2 before: ", testArr2);
        for (var i = 0; i < usedCards.length; i++) {
            for (var j = 0; j < testArr2.length; j++) {
                if (usedCards[i] === testArr2[j]) {
                    testArr2.splice(j, 1);
                }
            }
        }
        console.log("TestArr2 here: ", testArr2);
        var currentId = "";
        var c = counter;
        console.log("counter: ", counter);
        if (counter === 24) {
            setCounter(0);
            setDeckCard(false);
            let newArr = [];
            for (var i = 0; i < 24; i++) {
                let thisId = "H" + i;
                let used = false;
                for (var j = 0; j < usedCards.length; j++) {
                    if (thisId === usedCards[j]) {
                        console.log("Used card here: ", thisId);
                        used = true;
                        break;
                    }
                }
                if (used !== true) {
                    let unUsedCard = document.getElementById(thisId);
                    newArr.push(thisId);
                    if (unUsedCard) {
                        unUsedCard.setAttribute("style", `background-image: url(${backCard}); background-size: 125px; background-repeat: no-repeat; height: 190px; width: 125px; cursor: pointer; margin-top: -220px; position: absolute; margin-left: 0px; z-index: ${i};`)
                        console.log("unused card here: ", unUsedCard);
                    }
                }
            }
            setNewDeck(newArr);
            console.log("After set newwDeck here: ", newDeck);
        }
        else {
            for (var j = 23 - counter; j >= 0; j--) {
                let currId = "H" + j;
                let bRake = false;
                for (var i = 0; i < testArr2.length; i++) {
                    if (currId === testArr2[i]) {
                        bRake = true;
                        break;
                    }
                }
                if (bRake === true) {
                    currentId = currId;
                    break;
                }
                else {
                    c++;
                }
            }
            const drawCard = document.getElementById(currentId);
            findImage(drawCard, c);
            c++;
            setCounter(c);
        }
        console.log("Deck Card here after: ", deckCard);
        console.log("counter after: ", counter);
    }


    const drop = e => {
        console.log("Here in first drop function");
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        console.log("card here: ", card);
        console.log("card Id value: ", card.id);

        var IdLetter = card.id.slice(0, 1);
        console.log("here is the letter from Id: ", IdLetter);

        card.style.display = 'block';


        //dropping cards from the deck
        if (IdLetter === 'H') {
            if (e.target.className === "space") {
                if (cardVal === "K") {
                    findImage2(card, cardVal, cardSuite);
                    setUsedCards(usedCards => [...usedCards, card.id]);
                    e.target.appendChild(card);
                }
            }

            if (e.target.className === cardVal) {
                if (e.target.id === cardSuite) {
                    findImage2(card, cardVal, cardSuite);
                    setUsedCards(usedCards => [...usedCards, card.id]);
                    e.target.appendChild(card);
                    card.title = cardSuite;
                    console.log("card.id", card.id);
                    card.draggable = false;
                }
            }
            if (e.target.draggable === false) {
                if (e.target.title === cardSuite) {
                    if (e.target.className === 'A' && cardVal === '2') {
                        console.log("e.target.id is here: ", e.target.id);
                        document.getElementById(e.target.id).innerHTML = "";
                        findImage2(card, cardVal, cardSuite);
                        console.log("card Id here: ", card.id);
                        setUsedCards(usedCards => [...usedCards, card.id]);
                        e.target.appendChild(card);
                        findImage2(e.target, e.target.className, e.target.title);
                        card.title = cardSuite;
                        card.draggable = false;
                    }
                    else if (e.target.className === '10' && cardVal === 'J') {
                        document.getElementById(e.target.id).innerHTML = "";
                        findImage2(card, cardVal, cardSuite);
                        console.log("card Id here: ", card.id);
                        setUsedCards(usedCards => [...usedCards, card.id]);
                        e.target.appendChild(card);
                        findImage2(e.target, e.target.className, e.target.title);
                        card.title = cardSuite;
                        card.draggable = false;
                    }
                    else if (e.target.className === 'J' && cardVal === 'Q') {
                        document.getElementById(e.target.id).innerHTML = "";
                        findImage2(card, cardVal, cardSuite);
                        console.log("card Id here: ", card.id);
                        setUsedCards(usedCards => [...usedCards, card.id]);
                        e.target.appendChild(card);
                        findImage2(e.target, e.target.className, e.target.title);
                        card.title = cardSuite;
                        card.draggable = false;
                    }
                    else if (e.target.className === 'Q' && cardVal === 'K') {
                        document.getElementById(e.target.id).innerHTML = "";
                        setKingCount(kingCount + 1);
                        console.log("King Count right here", kingCount);
                        if (kingCount == 3){
                            console.log("You Won!!!!");
                            setYouWon(true);
                        }
                        findImage2(card, cardVal, cardSuite);
                        console.log("card Id here: ", card.id);
                        setUsedCards(usedCards => [...usedCards, card.id]);
                        e.target.appendChild(card);
                        findImage2(e.target, e.target.className, e.target.title);
                        card.title = cardSuite;
                        card.draggable = false;
                    }
                    else {
                        var num0 = parseInt(e.target.className);
                        var num2 = parseInt(cardVal);
                        var sum0 = num0 + 1;
                        if (num2 === sum0) {
                            document.getElementById(e.target.id).innerHTML = "";
                            findImage2(card, cardVal, cardSuite);
                            console.log("card Id here: ", card.id);
                            setUsedCards(usedCards => [...usedCards, card.id]);
                            e.target.appendChild(card);
                            findImage2(e.target, e.target.className, e.target.title);
                            card.title = cardSuite;
                            card.draggable = false;
                            console.log("card here: ", card);
                        }
                    }
                }
            }
            if (e.target.title === "Red") {
                console.log("first if");
                if (cardColor === "Black") {
                    if (e.target.className === 'K' && cardVal === 'Q') {
                        findImage2(card, cardVal, cardSuite);
                        console.log("card Id here: ", card.id);
                        setUsedCards(usedCards => [...usedCards, card.id]);
                        e.target.appendChild(card);
                    }
                    else if (e.target.className === 'Q' && cardVal === 'J') {
                        findImage2(card, cardVal, cardSuite);
                        console.log("card Id here: ", card.id);
                        setUsedCards(usedCards => [...usedCards, card.id]);
                        e.target.appendChild(card);
                    }
                    else if (e.target.className === 'J' && cardVal === '10') {
                        findImage2(card, cardVal, cardSuite);
                        console.log("card Id here: ", card.id);
                        setUsedCards(usedCards => [...usedCards, card.id]);
                        e.target.appendChild(card);
                    }
                    else {
                        var num = parseInt(e.target.className);
                        var num1 = parseInt(cardVal);
                        if (num === num1 + 1) {
                            findImage2(card, cardVal, cardSuite);
                            console.log("card Id here: ", card.id);
                            setUsedCards(usedCards => [...usedCards, card.id]);
                            e.target.appendChild(card);
                        }
                    }
                }
            }
            else if (e.target.title === "Black") {
                if (cardColor === "Red") {
                    if (e.target.className === 'K' && cardVal === 'Q') {
                        findImage2(card, cardVal, cardSuite);
                        console.log("card Id here: ", card.id);
                        setUsedCards(usedCards => [...usedCards, card.id]);
                        e.target.appendChild(card);
                    }
                    else if (e.target.className === 'Q' && cardVal === 'J') {
                        findImage2(card, cardVal, cardSuite);
                        console.log("card Id here: ", card.id);
                        setUsedCards(usedCards => [...usedCards, card.id]);
                        e.target.appendChild(card);
                    }
                    else if (e.target.className === 'J' && cardVal === '10') {
                        findImage2(card, cardVal, cardSuite);
                        console.log("card Id here: ", card.id);
                        setUsedCards(usedCards => [...usedCards, card.id]);
                        e.target.appendChild(card);
                    }
                    else {
                        var num = parseInt(e.target.className);
                        var num1 = parseInt(cardVal);
                        if (num === num1 + 1) {
                            findImage2(card, cardVal, cardSuite);
                            console.log("card Id here: ", card.id);
                            setUsedCards(usedCards => [...usedCards, card.id]);
                            e.target.appendChild(card);
                        }
                    }
                }
            }
        }
        else {
            if (e.target.className === "space") {
                if (cardVal === "K") {
                    e.target.appendChild(card);
                    console.log("Here is the previous card: ", prevCard);
                    if (prevCard !== null) {
                        console.log("prevCard.title ", prevCard.title);
                        console.log("prevCard.className", prevCard.className);
                        console.log("prevDiv here: ", prevDiv);
                        findImage2(prevCard, prevCard.className, prevDiv.className);
                        prevCard.faceUp = true;
                        prevCard.draggable = true;
                    }
                }
            }

            if (e.target.className === cardVal) {
                if (e.target.id === cardSuite) {
                    e.target.appendChild(card);
                    card.title = cardSuite;
                    console.log("card.id", card.id);
                    card.draggable = false;
                    console.log("Here is the prevCard: ", prevCard);
                    if (prevCard !== null) {
                        console.log("prevCard.title", prevCard.title);
                        console.log("prevCard.className", prevCard.className);
                        console.log("prevDiv here: ", prevDiv);
                        findImage2(prevCard, prevCard.className, prevDiv.className);
                        prevCard.faceUp = true;
                        prevCard.draggable = true;
                    }
                }
            }
            if (e.target.draggable === false) {
                if (e.target.title === cardSuite) {
                    if (e.target.className === 'A' && cardVal === '2') {
                        let newEId = e.target.id + e.target.id;
                        console.log("new e,target.id here: ", newEId);
                        console.log("e.target.id is here: ", e.target.id);
                        document.getElementById(e.target.id).innerHTML = "";
                        let eDiv = document.getElementById(newEId);
                        findImage2(e.target, e.target.className, eDiv.className);
                        e.target.appendChild(card);
                        card.title = cardSuite;
                        card.draggable = false;
                        if (prevCard !== null) {
                            console.log("Here is the previous card: ", prevCard);
                            console.log("prevCard.title", prevCard.title);
                            console.log("prevCard.className", prevCard.className);
                            console.log("prevDiv here: ", prevDiv);
                            findImage2(prevCard, prevCard.className, prevDiv.className);
                            prevCard.faceUp = true;
                            prevCard.draggable = true;
                        }
                    }
                    else if (e.target.className === '10' && cardVal === 'J') {
                        document.getElementById(e.target.id).innerHTML = "";
                        e.target.appendChild(card);
                        let newEId = e.target.id + e.target.id;
                        let eDiv = document.getElementById(newEId);
                        findImage2(e.target, e.target.className, eDiv.className);
                        card.title = cardSuite;
                        card.draggable = false;
                        if (prevCard !== null) {
                            console.log("Here is the previous card: ", prevCard);
                            console.log("prevCard.title", prevCard.title);
                            console.log("prevCard.className", prevCard.className);
                            console.log("prevDiv here: ", prevDiv);
                            findImage2(prevCard, prevCard.className, prevDiv.className);
                            prevCard.faceUp = true;
                            prevCard.draggable = true;
                        }
                    }
                    else if (e.target.className === 'J' && cardVal === 'Q') {
                        document.getElementById(e.target.id).innerHTML = "";
                        e.target.appendChild(card);
                        let newEId = e.target.id + e.target.id;
                        let eDiv = document.getElementById(newEId);
                        findImage2(e.target, e.target.className, eDiv.className);
                        card.title = cardSuite;
                        card.draggable = false;
                        if (prevCard !== null) {
                            console.log("Here is the previous card: ", prevCard);
                            console.log("prevCard.title", prevCard.title);
                            console.log("prevCard.className", prevCard.className);
                            console.log("prevDiv here: ", prevDiv);
                            findImage2(prevCard, prevCard.className, prevDiv.className);
                            prevCard.faceUp = true;
                            prevCard.draggable = true;
                        }
                    }
                    else if (e.target.className === 'Q' && cardVal === 'K') {
                        document.getElementById(e.target.id).innerHTML = "";
                        setKingCount(kingCount + 1);
                        console.log("King Count right here", kingCount);
                        if (kingCount == 3){
                            console.log("You Won!!!!");
                            setYouWon(true);
                        }
                        e.target.appendChild(card);
                        let newEId = e.target.id + e.target.id;
                        let eDiv = document.getElementById(newEId);
                        findImage2(e.target, e.target.className, eDiv.className);
                        card.title = cardSuite;
                        card.draggable = false;
                        if (prevCard !== null) {
                            findImage2(prevCard, prevCard.className, prevDiv.className);
                            prevCard.faceUp = true;
                            prevCard.draggable = true;
                        }
                    }
                    else {
                        var num0 = parseInt(e.target.className);
                        var num2 = parseInt(cardVal);
                        var sum0 = num0 + 1;
                        if (num2 === sum0) {
                            document.getElementById(e.target.id).innerHTML = "";
                            e.target.appendChild(card);
                            let newEId = e.target.id + e.target.id;
                            let eDiv = document.getElementById(newEId);
                            findImage2(e.target, e.target.className, eDiv.className);
                            card.title = cardSuite;
                            card.draggable = false;
                            if (prevCard !== null) {
                                console.log("Here is the previous card: ", prevCard);
                                console.log("prevCard.title", prevCard.title);
                                console.log("prevCard.className", prevCard.className);
                                console.log("prevDiv here: ", prevDiv);
                                findImage2(prevCard, prevCard.className, prevDiv.className);
                                prevCard.faceUp = true;
                                prevCard.draggable = true;
                            }
                        }
                    }
                }
            }
            if (e.target.title === "Red") {
                console.log("first if");
                if (cardColor === "Black") {
                    if (e.target.className === 'K' && cardVal === 'Q') {
                        e.target.appendChild(card);
                        console.log("Here is the previous card: ", prevCard);
                        if (prevCard !== null) {
                            console.log("Here is the previous card: ", prevCard);
                            console.log("prevCard.title", prevCard.title);
                            console.log("prevCard.className", prevCard.className);
                            console.log("prevDiv here: ", prevDiv);
                            findImage2(prevCard, prevCard.className, prevDiv.className);
                            prevCard.faceUp = true;
                            prevCard.draggable = true;
                        }
                    }
                    else if (e.target.className === 'Q' && cardVal === 'J') {
                        e.target.appendChild(card);
                        console.log("Here is the previous card: ", prevCard);
                        if (prevCard !== null) {
                            console.log("Here is the previous card: ", prevCard);
                            console.log("prevCard.title", prevCard.title);
                            console.log("prevCard.className", prevCard.className);
                            console.log("prevDiv here: ", prevDiv);
                            findImage2(prevCard, prevCard.className, prevDiv.className);
                            prevCard.faceUp = true;
                            prevCard.draggable = true;
                        }
                    }
                    else if (e.target.className === 'J' && cardVal === '10') {
                        e.target.appendChild(card);
                        console.log("Here is the previous card: ", prevCard);
                        if (prevCard !== null) {
                            console.log("Here is the previous card: ", prevCard);
                            console.log("prevCard.title", prevCard.title);
                            console.log("prevCard.className", prevCard.className);
                            console.log("prevDiv here: ", prevDiv);
                            findImage2(prevCard, prevCard.className, prevDiv.className);
                            prevCard.faceUp = true;
                            prevCard.draggable = true;
                        }
                    }
                    else {
                        var num = parseInt(e.target.className);
                        var num1 = parseInt(cardVal);
                        if (num === num1 + 1) {
                            e.target.appendChild(card);
                            console.log("Here is the previous card: ", prevCard);
                            if (prevCard !== null) {
                                console.log("Here is the previous card: ", prevCard);
                                console.log("prevCard.title", prevCard.title);
                                console.log("prevCard.className", prevCard.className);
                                console.log("prevDiv here: ", prevDiv);
                                findImage2(prevCard, prevCard.className, prevDiv.className);
                                prevCard.faceUp = true;
                                prevCard.draggable = true;
                            }
                        }
                    }
                }
            }
            else if (e.target.title === "Black") {
                if (cardColor === "Red") {
                    if (e.target.className === 'K' && cardVal === 'Q') {
                        e.target.appendChild(card);
                        console.log("Here is the previous card: ", prevCard);
                        if (prevCard !== null) {
                            console.log("Here is the previous card: ", prevCard);
                            console.log("prevCard.title", prevCard.title);
                            console.log("prevCard.className", prevCard.className);
                            console.log("prevDiv here: ", prevDiv);
                            findImage2(prevCard, prevCard.className, prevDiv.className);
                            prevCard.faceUp = true;
                            prevCard.draggable = true;
                        }
                    }
                    else if (e.target.className === 'Q' && cardVal === 'J') {
                        e.target.appendChild(card);
                        console.log("Here is the previous card: ", prevCard);
                        if (prevCard !== null) {
                            console.log("Here is the previous card: ", prevCard);
                            console.log("prevCard.title", prevCard.title);
                            console.log("prevCard.className", prevCard.className);
                            console.log("prevDiv here: ", prevDiv);
                            findImage2(prevCard, prevCard.className, prevDiv.className);
                            prevCard.faceUp = true;
                            prevCard.draggable = true;
                        }
                    }
                    else if (e.target.className === 'J' && cardVal === '10') {
                        e.target.appendChild(card);
                        console.log("Here is the previous card: ", prevCard);
                        if (prevCard !== null) {
                            console.log("Here is the previous card: ", prevCard);
                            console.log("prevCard.title", prevCard.title);
                            console.log("prevCard.className", prevCard.className);
                            console.log("prevDiv here: ", prevDiv);
                            findImage2(prevCard, prevCard.className, prevDiv.className);
                            prevCard.faceUp = true;
                            prevCard.draggable = true;
                        }
                    }
                    else {
                        var num = parseInt(e.target.className);
                        var num1 = parseInt(cardVal);
                        if (num === num1 + 1) {
                            e.target.appendChild(card);
                            console.log("Here is the previous card: ", prevCard);
                            if (prevCard !== null) {
                                console.log("Here is the previous card: ", prevCard);
                                console.log("prevCard.title", prevCard.title);
                                console.log("prevCard.className", prevCard.className);
                                console.log("prevDiv here: ", prevDiv);
                                findImage2(prevCard, prevCard.className, prevDiv.className);
                                prevCard.faceUp = true;
                                prevCard.draggable = true;
                            }
                        }
                    }
                }
            }
        }

    }

    const dragOver = e => {
        e.preventDefault();
    }

    var section1 = [];
    var section2 = [];
    var section3 = [];
    var section4 = [];
    var section5 = [];
    var section6 = [];
    var section7 = [];
    var count = -1;

    for (var i = 0; i < 7; i++) {
        for (var j = count + 1; j < props.deck1.length; j++) {
            if (i === 0) {
                section1.push(props.deck1[j]);
                count++;
                break;
            }
            else if (i === 1) {
                if (count === 1) {
                    props.deck1[j].faceUp = true;
                }
                else {
                    props.deck1[j].faceUp = false;
                }
                section2.push(props.deck1[j]);
                count++;
                if (count === 2) {
                    break;
                }
            }
            else if (i === 2) {
                if (count === 4) {
                    props.deck1[j].faceUp = true;
                }
                else {
                    props.deck1[j].faceUp = false;
                }
                section3.push(props.deck1[j]);
                count++;
                if (count === 5) {
                    break;
                }
            }
            else if (i === 3) {
                if (count === 8) {
                    props.deck1[j].faceUp = true;
                }
                else {
                    props.deck1[j].faceUp = false;
                }
                section4.push(props.deck1[j]);
                count++;
                if (count === 9) {
                    break;
                }
            }
            else if (i === 4) {
                if (count === 13) {
                    props.deck1[j].faceUp = true;
                }
                else {
                    props.deck1[j].faceUp = false;
                }
                section5.push(props.deck1[j]);
                count++;
                if (count === 14) {
                    break;
                }
            }
            else if (i === 5) {
                if (count === 19) {
                    props.deck1[j].faceUp = true;
                }
                else {
                    props.deck1[j].faceUp = false;
                }
                section6.push(props.deck1[j]);
                count++;
                if (count === 20) {
                    break;
                }
            }
            else if (i === 6) {
                if (count === 26) {
                    props.deck1[j].faceUp = true;
                }
                else {
                    props.deck1[j].faceUp = false;
                }
                section7.push(props.deck1[j]);
                count++;
                if (count === 27) {
                    break;
                }
            }

        }
    }
    console.log("Section2 here", section2);

    return (
        <div style={{ height: 722 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ height: 220, width: 300, padding: 10, display: "flex", backgroundColor:"grey" }}>
                    <div
                        className="A"
                        id="Spade"
                        onDrop={drop}
                        onDragOver={dragOver}
                        style={{
                            height: 200,
                            width: 150,
                            backgroundColor: "beige",
                            display: "flex",
                            flexDirection: "column",
                            margin: 10
                        }}> Ace Spades</div>
                    <div
                        className="A"
                        id="Heart"
                        onDrop={drop}
                        onDragOver={dragOver}
                        style={{
                            height: 200,
                            width: 150,
                            backgroundColor: "beige",
                            display: "flex",
                            flexDirection: "column",
                            margin: 10
                        }}> Ace Hearts</div>
                </div>
                <div style={{ height: 220, width: 300, padding: 10, display: "flex", backgroundColor:"grey" }}>
                    <div
                        className="A"
                        id="Clover"
                        onDrop={drop}
                        onDragOver={dragOver}
                        style={{
                            height: 200,
                            width: 150,
                            backgroundColor: "beige",
                            display: "flex",
                            flexDirection: "column",
                            margin: 10
                        }}> Ace Clovers</div>
                    <div
                        className="A"
                        id="Diamond"
                        onDrop={drop}
                        onDragOver={dragOver}
                        style={{
                            height: 200,
                            width: 150,
                            backgroundColor: "beige",
                            display: "flex",
                            flexDirection: "column",
                            margin: 10
                        }}> Ace Diamonds</div>
                </div>
            </div>
            <div style={{ display: "flex", marginLeft: 350, marginTop: -475 }}>
                <div
                    className="space"
                    onDrop={drop}
                    onDragOver={dragOver}
                    style={{ display: "flex", flexDirection: "column", width: 125, height: 180, border: "3px solid black", margin: 0, backgroundColor:"grey" }}
                >
                    {
                        section1.map((card, i) => {
                            return (
                                <div
                                    key={i}
                                    onDrop={drop}
                                    onDragOver={dragOver}
                                >
                                    <Card
                                        section="section1"
                                        value={card.Value}
                                        suite={card.Suite}
                                        class={card.Value}
                                        color={card.Color}
                                        faceUp={true}
                                        deck={false}
                                        draggable={true}
                                        id={"A" + i}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div
                    className="space"
                    onDrop={drop}
                    onDragOver={dragOver}
                    style={{ display: "flex", flexDirection: "column", width: 125, height: 180, border: "3px solid black", marginBottom: 300, backgroundColor:"grey" }}
                >
                    {
                        section2.map((card, i) => {
                            if (i !== 0) {
                                return (
                                    <div
                                        key={i}
                                        onDrop={drop}
                                        onDragOver={dragOver}
                                    >
                                        <Card
                                            section="section2"
                                            value={card.Value}
                                            suite={card.Suite}
                                            class={card.Value}
                                            color={card.Color}
                                            faceUp={true}
                                            deck={false}
                                            draggable={true}
                                            id={"B" + i}
                                        />
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div
                                        key={i}
                                        onDrop={drop}
                                        onDragOver={dragOver}
                                    >
                                        <Card
                                            section="section2"
                                            value={card.Value}
                                            suite={card.Suite}
                                            class={card.Value}
                                            color={card.Color}
                                            faceUp={false}
                                            deck={false}
                                            draggable={false}
                                            id={"B" + i}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div
                    className="space"
                    onDrop={drop}
                    onDragOver={dragOver}
                    style={{ display: "flex", flexDirection: "column", width: 125, height: 180, border: "3px solid black", margin: 0, backgroundColor:"grey" }}
                >
                    {
                        section3.map((card, i) => {
                            if (i === 2) {
                                return (
                                    <div
                                        key={i}
                                        onDrop={drop}
                                        onDragOver={dragOver}
                                    >
                                        <Card
                                            section="section3"
                                            value={card.Value}
                                            suite={card.Suite}
                                            class={card.Value}
                                            color={card.Color}
                                            faceUp={true}
                                            deck={false}
                                            draggable={true}
                                            id={"C" + i}
                                        />
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div
                                        key={i}
                                        onDrop={drop}
                                        onDragOver={dragOver}
                                    >
                                        <Card
                                            section="section3"
                                            value={card.Value}
                                            suite={card.Suite}
                                            class={card.Value}
                                            color={card.Color}
                                            faceUp={false}
                                            deck={false}
                                            draggable={false}
                                            id={"C" + i}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div
                    className="space"
                    onDrop={drop}
                    onDragOver={dragOver}
                    style={{ display: "flex", flexDirection: "column", width: 125, height: 180, border: "3px solid black", margin: 0, backgroundColor:"grey" }}
                >
                    {
                        section4.map((card, i) => {
                            if (i === 3) {
                                return (
                                    <div
                                        key={i}
                                        onDrop={drop}
                                        onDragOver={dragOver}
                                    >
                                        <Card
                                            section="section4"
                                            value={card.Value}
                                            suite={card.Suite}
                                            color={card.Color}
                                            class={card.Value}
                                            faceUp={true}
                                            deck={false}
                                            draggable={true}
                                            id={"D" + i}
                                        />
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div
                                        key={i}
                                        onDrop={drop}
                                        onDragOver={dragOver}
                                    >
                                        <Card
                                            section="section4"
                                            value={card.Value}
                                            suite={card.Suite}
                                            color={card.Color}
                                            faceUp={false}
                                            class={card.Value}
                                            deck={false}
                                            draggable={false}
                                            id={"D" + i}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div
                    className="space"
                    onDrop={drop}
                    onDragOver={dragOver}
                    style={{ display: "flex", flexDirection: "column", width: 125, height: 180, border: "3px solid black", margin: 0, backgroundColor:"grey" }}
                >
                    {
                        section5.map((card, i) => {
                            if (i === 4) {
                                return (
                                    <div
                                        key={i}
                                        onDrop={drop}
                                        onDragOver={dragOver}
                                    >
                                        <Card
                                            section="section5"
                                            value={card.Value}
                                            suite={card.Suite}
                                            color={card.Color}
                                            class={card.Value}
                                            faceUp={true}
                                            deck={false}
                                            draggable={true}
                                            id={"E" + i}
                                        />
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div
                                        key={i}
                                        onDrop={drop}
                                        onDragOver={dragOver}
                                    >
                                        <Card
                                            section="section5"
                                            value={card.Value}
                                            suite={card.Suite}
                                            color={card.Color}
                                            class={card.Value}
                                            faceUp={false}
                                            deck={false}
                                            draggable={false}
                                            id={"E" + i}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div
                    className="space"
                    onDrop={drop}
                    onDragOver={dragOver}
                    style={{ display: "flex", flexDirection: "column", width: 125, height: 180, border: "3px solid black", margin: 0, backgroundColor:"grey" }}
                >
                    {
                        section6.map((card, i) => {
                            if (i === 5) {
                                return (
                                    <div
                                        key={i}
                                        onDrop={drop}
                                        onDragOver={dragOver}
                                    >
                                        <Card
                                            section="section6"
                                            value={card.Value}
                                            suite={card.Suite}
                                            color={card.Color}
                                            class={card.Value}
                                            faceUp={true}
                                            deck={false}
                                            draggable={true}
                                            id={"F" + i}
                                        />
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div
                                        key={i}
                                        onDrop={drop}
                                        onDragOver={dragOver}
                                    >
                                        <Card
                                            section="section6"
                                            value={card.Value}
                                            suite={card.Suite}
                                            color={card.Color}
                                            class={card.Value}
                                            faceUp={false}
                                            deck={false}
                                            draggable={false}
                                            id={"F" + i}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div
                    className="space"
                    onDrop={drop}
                    onDragOver={dragOver}
                    style={{ display: "flex", flexDirection: "column", width: 125, height: 180, border: "3px solid black", margin: 0, backgroundColor:"grey" }}
                >
                    {
                        section7.map((card, i) => {
                            if (i === 6) {
                                return (
                                    <div
                                        key={i}
                                        onDrop={drop}
                                        onDragOver={dragOver}
                                    >
                                        <Card
                                            section="section7"
                                            value={card.Value}
                                            suite={card.Suite}
                                            color={card.Color}
                                            class={card.Value}
                                            faceUp={true}
                                            deck={false}
                                            draggable={true}
                                            id={"G" + i}
                                        />
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div
                                        key={i}
                                        onDrop={drop}
                                        onDragOver={dragOver}
                                    >
                                        <Card
                                            section="section7"
                                            value={card.Value}
                                            suite={card.Suite}
                                            color={card.Color}
                                            class={card.Value}
                                            faceUp={false}
                                            deck={false}
                                            draggable={false}
                                            id={"G" + i}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div style={{ display: "flex", marginLeft: 1300, marginTop: -250 }}>
                <div
                    style={{
                        height: 210,
                        width: 130,
                        border: "3px solid black",
                        marginTop: -223,
                        display: "flex",
                        alignItems: "flex-end",
                        backgroundColor:"grey"
                    }}
                >
                    <button
                        onClick={clickHandler}
                        style={{
                            height: 20,
                            width: 160,
                            border: "3px solid green"
                        }}
                    >Draw</button>
                </div>
                {
                    props.deck2.map((card, i) => {
                        return (
                            <div
                                key={i}
                                onDrop={drop}
                                onDragOver={dragOver}
                            >
                                <Card
                                    value={card.Value}
                                    suite={card.Suite}
                                    color={card.Color}
                                    class={card.Value}
                                    faceUp={false}
                                    draggable={true}
                                    deck={true}
                                    id={"H" + i}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {
                    youWon ? <div style={{marginLeft:500, display:"flex", flexDirection: "column", height: 200, width: 300, border: "3px dashed blue", backgroundColor: "pink"}}>
                        <h1>You Win</h1>
                        <Link to="/"><h3>Play Again</h3></Link>
                    </div> : null
                }

            </div>
        </div>
    );
}


export default InPlay;