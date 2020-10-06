

import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'

import exampleDailyBotProbabilities from "./bot_probabilities_histogram_20200201.png"

export default function AboutPage(props) {
    return (
        <Container>
            <h2>About</h2>

            <p>
                This project builds upon the research of Tauhid Zaman, Nicolas Guenon Des Mesnards, et. al., as described by the paper: <a href="https://arxiv.org/abs/1810.12398">"Detecting Bots and Assessing Their Impact in Social Networks"</a> (2018).
                For this project, we analyzed tweets about the Trump Impeachment proceedings,
                with the aim of identifying automated Twitter accounts known as "bots", analyzing their behaviors, and assessing their impact on the conversation.
            </p>

            <h3>Team</h3>
            <ul>
                <li><a href="https://www.zlisto.com/">Dr. Tauhid Zaman</a> (Yale University)</li>
                <li><a href="http://data-creative.info/team/">Michael J Rossetti</a> (Georgetown University, New York University)</li>
                <li>Special thanks to <a href="https://github.com/axpart">Mohammad Sami</a> for front-end development contributions!</li>
            </ul>

            <h3>Source Code</h3>
            <ul>
                <li><a href="https://github.com/zaman-lab/tweet-analyzer-py">Tweet Collection and Analysis (Python)</a></li>
                <li><a href="https://github.com/zaman-lab/impeachment-web-react">Tweet Analysis Website (React)</a></li>
            </ul>

            <h3>Methods</h3>

            <section>
                <h4>I. Tweet Collection</h4>
                <p>From December 20, 2019 to March 24, 2020, we collected tweets about the Trump Impeachment proceedings,
                    specifically collecting any tweet which case-insensitively included any of the terms below:
                </p>
                <table>
                    <thead>
                        <tr><th>Topic</th><th>Date Added</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><i>	#FactsMatter	</i></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><i>	#IGHearing	</i></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><i>	#IGReport	</i></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><i>	#ImpeachAndConvict	</i></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><i>	#ImpeachAndConvictTrump	</i></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><i>	#SenateHearing	</i></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><i>	#TrumpImpeachment	</i></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><i>	impeach	</i></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><i>	impeached	</i></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><i>	impeachment	</i></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><i>	Trump to Pelosi	</i></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><i>	#25thAmendmentNow	</i></td>	<td>	2019-12-18	</td></tr>
                        <tr><td><i>	#ImpeachAndRemove	</i></td>	<td>	2019-12-18	</td></tr>
                        <tr><td><i>	#ImpeachmentEve	</i></td>	<td>	2019-12-18	</td></tr>
                        <tr><td><i>	#ImpeachmentRally	</i></td>	<td>	2019-12-18	</td></tr>
                        <tr><td><i>	#NotAboveTheLaw	</i></td>	<td>	2019-12-18	</td></tr>
                        <tr><td><i>	#trumpletter	</i></td>	<td>	2019-12-18	</td></tr>
                        <tr><td><i>	#GOPCoverup	</i></td>	<td>	2020-01-22	</td></tr>
                        <tr><td><i>	#ShamTrial	</i></td>	<td>	2020-01-22	</td></tr>
                        <tr><td><i>	#AquittedForever	</i></td>	<td>	2020-02-06	</td></tr>
                        <tr><td><i>	#CountryOverParty	</i></td>	<td>	2020-02-06	</td></tr>
                        <tr><td><i>	#CoverUpGOP	</i></td>	<td>	2020-02-06	</td></tr>
                        <tr><td><i>	#MitchMcCoverup	</i></td>	<td>	2020-02-06	</td></tr>
                        <tr><td><i>	#MoscowMitch	</i></td>	<td>	2020-02-06	</td></tr>
                    </tbody>
                </table>
                <p>
                    In total, we collected 67.6 million tweets from 3.6 million unique users.
                    Of these, 55.9 million (82.6%) were retweets, from 2.7 million unique users.
                </p>
                <p>
                    NOTE: despite collecting tweets continuously, the dataset is not comprehensive due to Twitter API rate limits which caused our collector to sleep intermittently when it was being rate-limited.
                </p>
                {/* TODO: bar graph of tweets per day */ }
                {/* TODO: bar graph of top retweeted users */ }
            </section>

            <section>
                <h4>II. Bot Classification</h4>
                <p>
                    The previous research provides a method for identifying which Twitter users are bots, based on their retweet behavior.
                    It suggests bots exhibit the behavior of retweeting humans at significant quantities.
                </p>
                <p>
                    So for each day in our collection period, we examined that day's retweets to identify
                    which users retweeted with sufficient frequency to differentiate them from normal users,
                    and our model assigned each user a daily bot probability score from 0 (not bot) to 1 (bot).
                    An example daily distribution of bot scores is below. Most scores are around 0.5, and only a few are closer to 1.
                </p>
                <img src={exampleDailyBotProbabilities}/>
                <p>
                    After assigning daily bot scores to all users, we identified which users had at least one daily probability greater than 80%,
                    and labeled these users as bots.
                    In total, this method yielded 24,150 bots, which is 0.67% of the total users and 0.87% of the total retweeters in our dataset.
                    Despite only representing under 1% of all users, these bots were
                    responsible for 20.9 million tweets (31% of the total tweets) and 20.1 million retweets (36% of the total tweets).
                </p>
            </section>

            <section>
                <h4>III. Bot Community Clustering</h4>
                <p></p>
            </section>

            <section>
                <h4>IV. Bot Community Analysis</h4>
                <p></p>
            </section>

            <section>
                <h4>V. Sentiment Analysis</h4>
                <p></p>
            </section>

        </Container>
    )
}
