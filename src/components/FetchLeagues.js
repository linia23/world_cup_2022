import React, { Component } from 'react';
import '../containers/App.css';
import Navbar from '../components/Navbar';
import Footer from "./Footer";
import Row from '../components/Row';
import TableLeagues from '../components/TableLeagues';

// Main component that contains all components this program
class FetchLeagues extends Component {

  // Constructor that have initial state league name and id
  // All leagues name and id and empty array for button league
  constructor(props) {
    super(props)
    this.state = {
      rows: [],
      leagueId: 'WC',
      buttons: []
    }
  }

  // Function getting data standings leagues
  fetchData() {
    const Token = '91f4f7a0c0c14c7fb7acd8b4d865bf9c',
    URL = 'https://api.football-data.org/v2/competitions/WC/standings';
    // Send request
    fetch(URL, { headers: { 'X-Auth-Token': Token } })
      .then((response) => response.json())
      .then((responseJson) => {
        const rows = [];
        responseJson.standings[0].table.map (
          (item) => {
            const { position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points } = item;
            const {id, crestUrl, name} = item.team;
            
            return (
              rows.push(
                <Row key={id} position={position} crestURI={crestUrl} teamName={name} playedGames={playedGames} wins={won} draws={draw} losses={lost} goalsFor={goalsFor} goalsAgainst={goalsAgainst} goalDifference={goalDifference} points={points} />
              )
            ) 
          }
        )
        responseJson.standings[1].table.map (
          (item) => {
            const { position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points } = item;
            const {id, crestUrl, name} = item.team;
            
            return (
              rows.push(
                <Row key={id} position={position} crestURI={crestUrl} teamName={name} playedGames={playedGames} wins={won} draws={draw} losses={lost} goalsFor={goalsFor} goalsAgainst={goalsAgainst} goalDifference={goalDifference} points={points} />
              )
            )
          }
        )
        responseJson.standings[2].table.map (
          (item) => {
            const { position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points } = item;
            const {id, crestUrl, name} = item.team;
            
            return (
              rows.push(
                <Row key={id} position={position} crestURI={crestUrl} teamName={name} playedGames={playedGames} wins={won} draws={draw} losses={lost} goalsFor={goalsFor} goalsAgainst={goalsAgainst} goalDifference={goalDifference} points={points} />
              )
            )
          }
        )
        responseJson.standings[3].table.map (
          (item) => {
            const { position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points } = item;
            const { id, crestUrl, name} = item.team;
            
            return (
              rows.push(
                <Row key={id} position={position} crestURI={crestUrl} teamName={name} playedGames={playedGames} wins={won} draws={draw} losses={lost} goalsFor={goalsFor} goalsAgainst={goalsAgainst} goalDifference={goalDifference} points={points} />
              )
            )
          }
        )
        responseJson.standings[4].table.map (
          (item) => {
            const { position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points } = item;
            const { id, crestUrl, name} = item.team;
            
            return (
              rows.push(
                <Row key={id} position={position} crestURI={crestUrl} teamName={name} playedGames={playedGames} wins={won} draws={draw} losses={lost} goalsFor={goalsFor} goalsAgainst={goalsAgainst} goalDifference={goalDifference} points={points} />
              )
            )
          }
        )
        responseJson.standings[5].table.map (
          (item) => {
            const { position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points } = item;
            const {id, crestUrl, name} = item.team;
            
            return (
              rows.push(
                <Row key={id} position={position} crestURI={crestUrl} teamName={name} playedGames={playedGames} wins={won} draws={draw} losses={lost} goalsFor={goalsFor} goalsAgainst={goalsAgainst} goalDifference={goalDifference} points={points} />
              )
            )
          }
        )
        responseJson.standings[6].table.map (
          (item) => {
            const { position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points } = item;
            const { id, crestUrl, name} = item.team;
            
            return (
              rows.push(
                <Row key={id} position={position} crestURI={crestUrl} teamName={name} playedGames={playedGames} wins={won} draws={draw} losses={lost} goalsFor={goalsFor} goalsAgainst={goalsAgainst} goalDifference={goalDifference} points={points} />
              )
            )
          }
        )
        responseJson.standings[7].table.map (
          (item) => {
            const { position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points } = item;
            const { id, crestUrl, name} = item.team;
            
            return (
              rows.push(
                <Row key={id} position={position} crestURI={crestUrl} teamName={name} playedGames={playedGames} wins={won} draws={draw} losses={lost} goalsFor={goalsFor} goalsAgainst={goalsAgainst} goalDifference={goalDifference} points={points} />
              )
            )
          }
        )
        this.setState({
          // leagueName: responseJson.competition.name,
          rows: rows
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Called when page displayed
  componentDidMount() {
    this.fetchData();
  }

  // Get data from state and display in need components
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className='table'>
          <TableLeagues>
            {this.state.rows}
          </TableLeagues>
          </div>
          <Footer />
      </div>
    );
  }
}

export default FetchLeagues;