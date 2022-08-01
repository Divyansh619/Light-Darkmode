import React from "react";
import classes from './Content.module.css'
const Content = (props) => {
    return (
        <div className={props.dark ? classes.divDark : classes.div} >
            <div  >
                Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a
                Spanish professional football club based in Madrid. Founded in 1902 as
                Madrid Football Club, the club has traditionally worn a white home kit
                since its inception.
            </div>
            <p >
                The club was estimated to be worth $5.1 billion in 2022, the world's
                most valuable football team.[7] In 2021, it was the second
                highest-earning football club in the world, with an annual revenue of
                €640.7 million.[8] Real Madrid is one of the most widely supported teams
                internationally.[9] Being one of the three founding members of La Liga
                that have never been relegated from the top division since its inception
                in 1929 (along with Athletic Bilbao and Barcelona), Real Madrid holds
                many long-standing rivalries, most notably El Clásico with Barcelona and
                El Derbi Madrileño with Atlético Madrid. The club established itself as
                a major force in both Spanish and European football during the 1950s and
                60s, winning five consecutive and six overall European Cups and reaching
                a further two finals. This success was replicated on the domestic front,
                with Madrid winning twelve league titles in the span of 16 years. This
                team, which included Alfredo Di Stéfano, Ferenc Puskás, Francisco Gento,
                and Raymond Kopa, is considered by some in the sport to be the greatest
                of all time.[10][11][12] In domestic football, the club has won 68
                trophies; a record 35 La Liga titles, 19 Copa del Rey, 12 Supercopa de
                España, a Copa Eva Duarte, and a Copa de la Liga.[13] In European
                football, Real Madrid have won a record 20 trophies;[note 1] a record 14
                European Cup/UEFA Champions League titles, two UEFA Cups and four UEFA
                Super Cups. In worldwide competitions, they have achieved a record seven
                club world championships.[note 2] Real Madrid was recognised as the FIFA
                Club of the 20th Century on 11 December 2000 with 42.35% of the
                vote,[15] and received the FIFA Centennial Order of Merit on 20 May
                2004.[16] The club was also named Best European Club of the 20th Century
                by the IFFHS on 11 May 2010. In June 2017, Madrid succeeded in becoming
                the first club to win consecutive titles in the Champions League era. In
                May 2022, they won a record-extending fourteenth European Cup, making it
                five titles in the last nine seasons. As of May 2022, Real Madrid are
                ranked fourth behind Bayern Munich, Manchester City and Liverpool in the
                UEFA club rankings.
            </p>
        </div>
    );
};

export default Content;
