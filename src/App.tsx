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

    render() {
        return (
          <div className="App">
            <div className="App-header">
              <h2>simple listing filter</h2>
            </div>


              <div className="listing">
                  {cities.map(function(city: any) {

                      return (
                          <div className="entry">
                              <div className="title">{city.title}</div>
                              <div className="population">{city.population}</div>
                          </div>
                      );
                  })}
              </div>

          </div>
        );
    }


}

export default App;
