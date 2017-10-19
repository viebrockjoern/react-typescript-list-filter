import * as React from 'react';
import './App.css';

const cities = [
    {'title': 'Berlin', 'population': 3520031},
    {'title': 'Hamburg', 'population': 1787408},
    {'title': 'München', 'population': 1450381},
    {'title': 'Köln', 'population': 1060582},
    {'title': 'Frankfurt', 'population': 732688},
    {'title': 'Stuttgart', 'population': 623738},
    {'title': 'Düsseldorf', 'population': 612178},
    {'title': 'Dortmung', 'population': 586181},
    {'title': 'Leipzig', 'population': 582624},
    {'title': 'Essen', 'population': 560472},
    {'title': 'Bremen', 'population': 557464},
    {'title': 'Dresden', 'population': 543825},
    {'title': 'Hannover', 'population': 532163}
];

class App extends React.Component {

    public state: {letter: string};
    private alphabet: string[];

    constructor(props: {}) {

        super(props);
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

        this.state = {
            letter: ''
        };
    }

    letterChange = (e: any) => {

        let letter = e.target.value;

        this.setState({letter: letter});
    }

    render() {

        let currentLetter = this.state.letter;

        return (
          <div className="App">
            <div className="App-header">
              <h2>simple listing filter</h2>
            </div>

              <div className="filters">

                  <div className="filter letter">
                      City starts with
                      <select onChange={this.letterChange}>
                          <option value="">-</option>
                          {this.alphabet.map(function(letter: string, key: number) {

                              return (
                                  <option key={key} value={letter}>{letter}</option>
                              );
                          })}
                      </select>
                  </div>

              </div>

              <div className="listing">
                  {cities.map(function(city: {title: string, population: number}, key: number) {

                        let firstLetter: string = city.title.substr(0, 1).toLowerCase();
                        if (currentLetter === '' || currentLetter === firstLetter) {

                            return (
                                <div key={key} className="entry">
                                    <div className="title">{city.title}</div>
                                    <div className="population">{city.population}</div>
                                </div>
                            );
                        } else {
                            return '';
                        }

                  })}
              </div>

          </div>
        );
    }

}

export default App;
