import React, { useState, useContext, useEffect } from 'react';
import '../App.css';
import Value from './value';
import CardContext from '../contexts/cardContext';
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



const Card = props => {
    const { value, className, suite, color, id, faceUp, deck, draggable } = props;
    const { setCardVal, setCardSuite, setCardColor, prevCard, setPrevCard, setPrevDiv, deckCard, setDeckCard, deckSuite, setDeckSuite } = useContext(CardContext);

    const [backGround, setBackGround] = useState();



    useEffect(() => {
        setBackGround(null);
        if (value === "A") {
            if (suite === "Heart") {
                setBackGround(AceH);
            }
            else if (suite === "Spade") {
                setBackGround(AceS);
            }
            else if (suite === "Clover") {
                setBackGround(AceC);
            }
            else if (suite === "Diamond") {
                setBackGround(AceD);
            }
        }
        else if (value === "K") {
            if (suite === "Heart") {
                setBackGround(KingH);
            }
            else if (suite === "Spade") {
                setBackGround(KingS);
            }
            else if (suite === "Clover") {
                setBackGround(KingC);
            }
            else if (suite === "Diamond") {
                setBackGround(KingD);
            }
        }
        else if (value === "Q") {
            if (suite === "Heart") {
                setBackGround(QueenH);
            }
            else if (suite === "Spade") {
                setBackGround(QueenS);
            }
            else if (suite === "Clover") {
                setBackGround(QueenC);
            }
            else if (suite === "Diamond") {
                setBackGround(QueenD);
            }
        }
        if (value === "J") {
            if (suite === "Heart") {
                setBackGround(JackH);
            }
            else if (suite === "Spade") {
                setBackGround(JackS);
            }
            else if (suite === "Clover") {
                setBackGround(JackC);
            }
            else if (suite === "Diamond") {
                setBackGround(JackD);
            }
        }
        if (value === "2") {
            if (suite === "Heart") {
                setBackGround(TwoH);
            
            }
            else if (suite === "Spade") {
                setBackGround(TwoS);
            
            }
            else if (suite === "Clover") {
                setBackGround(TwoC);
            
            }
            else if (suite === "Diamond") {
                setBackGround(TwoD);
            
            }
        }
        else if (value === "3") {
            if (suite === "Heart") {
                setBackGround(ThreeH);
            
            }
            else if (suite === "Spade") {
                setBackGround(ThreeS);
            
            }
            else if (suite === "Clover") {
                setBackGround(ThreeC);
            
            }
            else if (suite === "Diamond") {
                setBackGround(ThreeD);
            
            }
        }
        else if (value === "4") {
            if (suite === "Heart") {
                setBackGround(FourH);
            
            }
            else if (suite === "Spade") {
                setBackGround(FourS);
            
            }
            else if (suite === "Clover") {
                setBackGround(FourC);
            
            }
            else if (suite === "Diamond") {
                setBackGround(FourD);
            
            }
        }
        else if (value === "5") {
            if (suite === "Heart") {
                setBackGround(FiveH);
            
            }
            else if (suite === "Spade") {
                setBackGround(FiveS);
            
            }
            else if (suite === "Clover") {
                setBackGround(FiveC);
            
            }
            else if (suite === "Diamond") {
                setBackGround(FiveD);
            
            }
        }
        else if (value === "6") {
            if (suite === "Heart") {
                setBackGround(SixH);
            
            }
            else if (suite === "Spade") {
                setBackGround(SixS);
            
            }
            else if (suite === "Clover") {
                setBackGround(SixC);
            
            }
            else if (suite === "Diamond") {
                setBackGround(SixD);
            
            }
        }
        else if (value === "7") {
            if (suite === "Heart") {
                setBackGround(SevenH);
            
            }
            else if (suite === "Spade") {
                setBackGround(SevenS);
            
            }
            else if (suite === "Clover") {
                setBackGround(SevenC);
            
            }
            else if (suite === "Diamond") {
                setBackGround(SevenD);
            
            }
        }
        else if (value === "8") {
            if (suite === "Heart") {
                setBackGround(EightH);
            
            }
            else if (suite === "Spade") {
                setBackGround(EightS);
            
            }
            else if (suite === "Clover") {
                setBackGround(EightC);
            
            }
            else if (suite === "Diamond") {
                setBackGround(EightD);
            
            }
        }
        else if (value === "9") {
            if (suite === "Heart") {
                setBackGround(NineH);
            
            }
            else if (suite === "Spade") {
                setBackGround(NineS);
            
            }
            else if (suite === "Clover") {
                setBackGround(NineC);
            
            }
            else if (suite === "Diamond") {
                setBackGround(NineD);
            
            }
        }
        else if (value === "10") {
            if (suite === "Heart") {
                setBackGround(TenH);
            
            }
            else if (suite === "Spade") {
                setBackGround(TenS);
            
            }
            else if (suite === "Clover") {
                setBackGround(TenC);
            
            }
            else if (suite === "Diamond") {
                setBackGround(TenD);
            
            }
        }
    }, [])



    const dragStart = e => {
        // e.preventDefault();
        console.log("in dragStart");
        const target = e.target;
        setCardVal(value);
        setCardSuite(suite);
        setCardColor(color);

        e.dataTransfer.setData('card_id', target.id);
        console.log("target_Id", target.id);
        var prev = target.id.slice(1, 2);
        console.log("prev", prev);
        var newPrev = parseInt(prev) - 1;
        if (newPrev >= 0) {
            console.log("newPrev", newPrev);
            if (newPrev >= 0) {
                var newTId = target.id.slice(0, 1);
                console.log("newTId", newTId);
                newTId += newPrev;
                console.log("After Add", newTId);
            }
            const PrevCard = document.getElementById(newTId);
            setPrevCard(PrevCard);
            var divId = newTId + newTId;
            console.log("Div Id: ", divId);
            const PrevDiv = document.getElementById(divId);
            console.log("Prev Div: ", PrevDiv);
            setPrevDiv(PrevDiv);
        }
        else if (newPrev < 0) {
            setPrevCard(null);
        }

        const cardId = e.dataTransfer.getData('card_id');
        const card = document.getElementById(cardId);
        console.log("deck val: ", card);



        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    // const clickHandler = e => {
    //     const target = e.target;
    //     const dCard = document.getElementById(target.id);
    //     console.log("Target id here: ",target.id);
    //     setDeckCard(dCard);
    //     console.log("In card deckCard: ", deckCard);
    // }

    const dragOver = e => {
        e.stopPropagation();
    }


    if (deck == true) {
        // setUsedCards(usedCards => [...usedCards, card.id]);
        return (
            <div
            id={id+id}
            className={suite}
            >
            <div
                id={id}
                className={value}
                title={color}
                suite={suite}
                value={id}
                style={{
                    height: 190,
                    width: 125,
                    // border: "1px solid red",
                    // backgroundColor: "black",
                    backgroundImage: `url(${backCard})`,
                    backgroundSize: 125,
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    zIndex: props.id,
                    position: "absolute",
                    marginTop: -220,
                    color: "clear"
                }}
                onDragStart={dragStart}
                // onDragOver={dragOver}
                draggable={draggable}
                deck={deck}
                faceUp={faceUp}
            // onClick={clickHandler}
            >
                <h3
                    style={{
                        opacity: 0
                    }}
                >
                    val={value}
                </h3>
                {/* <h3
                    // onClick={clickHandler}
                    id={id}
                    style={{
                        opacity: 0
                    }}
                >{suite}</h3>
                <h3
                    // onClick={clickHandler}
                    id={id}
                    style={{
                        opacity: 0
                    }}
                >{color}</h3> */}
            </div>
            </div>
        );
    }
    else {
        if (faceUp == true) {
            return (
                <div
                id={id+id}
                className={suite}
                >
                    <div
                        id={id}
                        className={value}
                        value={value}
                        title={color}
                        style={{
                            height: 190,
                            width: 125,
                            // backgroundColor: "blue",
                            backgroundImage: `url(${backGround})`,
                            backgroundSize: 125,
                            backgroundRepeat: "no-repeat",
                            cursor: "pointer",
                            marginTop: -20
                        }}
                        onDragStart={dragStart}
                        // onDragOver={dragOver}
                        deck={deck}
                        draggable={draggable}
                        faceUp={true}
                    >
                        <h3
                        style={{
                            opacity: 0
                        }}
                        >
                            val={value}
                        </h3>
                        {/* <h3
                        style={{
                            opacity: 0
                        }}
                        className="suite">{suite}</h3>
                        <h3 
                        style={{
                            opacity: 0
                        }}
                        className="color">{color}</h3> */}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div
                    id={id + id}
                    className={suite}
                >
                    <div
                        id={id}
                        className={value}
                        value={suite}
                        title={color}
                        style={{
                            height: 180,
                            width: 125,
                            marginBottom: -140,
                            marginTop: -20,
                            // border: "1px solid red",
                            backgroundImage: `url(${backCard})`,
                            backgroundSize: 125,
                            backgroundRepeat: "no-repeat"
                        }}
                        deck={deck}
                        onDragStart={dragStart}
                        // onDragOver={dragOver}
                        draggable={draggable}
                        faceUp={false}
                    >
                        <h3
                            style={{
                                opacity: 0
                            }}
                        >{value}</h3>
                        {/* <h3
                            style={{
                                opacity: 0
                            }}
                        >{suite}</h3>
                        <h3
                            style={{
                                opacity: 0
                            }}
                        >{color}</h3> */}
                    </div>
                </div>
            );
        }
    }
}


export default Card;