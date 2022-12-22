import React, { Component } from 'react';
import '../containers/App.css';
import Navbar from '../components/Navbar';
import ListMatches from '../components/ListMatches';
import TableMatches from '../components/TableMatches';
import LeagueInfo from '../components/LeagueInfo';
import Footer from '../components/Footer'

// Main component that contains all components this program
class FetchMatches extends Component {

  constructor(props) {
    super(props)
    this.state = {
      matchName: '',
      packs: [],
      rows: [],
      value: 'Все про ЧС-2022',
      leagueId: 'WC',
      buttons: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  // Getting info about matches
  fetchM() {
    const Token = '91f4f7a0c0c14c7fb7acd8b4d865bf9c',
    URL = 'https://api.football-data.org/v2/competitions/WC/matches';
    // ?lang=ua-ua
    // Send request
    fetch(URL, { headers: { 'X-Auth-Token': Token } })
      .then((response) => response.json())
      .then((responseJson) => {
        const packs = [];
        responseJson.matches.map(
          (item, index) => {
            const { group, matchday, utcDate } = item;
            let names = item.awayTeam.name;
            const { name } = item.homeTeam;
            const { homeTeam, awayTeam } = item.score.fullTime;
            return (
              packs.push(
                <ListMatches key={index} matchDay={matchday} group={group} utcDate={utcDate}
                nameAway={names} nameHome={name} homeScore={homeTeam} awayScore={awayTeam}
                />
              )
            )
          }
        )
        this.setState({
          packs: packs
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Called when page displayed first time
  componentDidMount() {
    this.fetchM();
  }

  // Get data from state and display in need components
  render() {
    return (
      <div className="app">
        <Navbar />
        <LeagueInfo />
        <div className='info-matches'>
        <TableMatches>{this.state.packs}</TableMatches>
        </div>
        </div>
    );
  }
}

{/* <div className="app">
        <Navbar />
        <div className='table'>
          <TableLeagues>
            {this.state.rows}
          </TableLeagues>
          </div>
          <Footer />
      </div> */}

export default FetchMatches;