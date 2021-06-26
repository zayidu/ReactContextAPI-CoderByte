import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const languages = ['JavaScript', 'Python'];

const GloablContext = React.createContext(languages);

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  state = {
    language: languages[0]
  };

  onLanguageChange = language => {
    let selLang ;
    switch (language) {
      case 'JavaScript':
        selLang = 'Python'
        break;
      case 'Python':
        selLang = 'JavaScript'
        break;

      default:
        break;
    }
    this.setState({ language: selLang });
    console.log(this.state.language);
  };


  render() {
    return (
      // implement Context here so can be used in child components
      <GloablContext.Provider value={[this.state.language,this.onLanguageChange]}>
        <MainSection onLanguageChange={this.onLanguageChange} />
      </GloablContext.Provider>
    );
  }
}

class MainSection extends React.Component {

  render() {
    return (
        <GloablContext.Consumer>
          {([language, onLanguageChange]) =>
            (
              <div>
                <p id="favoriteLanguage">Favorite programing language: {language}</p>
                <button id="changeFavorite" onClick={e => onLanguageChange(language)}>Toggle language</button>
              </div>
        )}
        </GloablContext.Consumer>
        )
      }
    }
    
    ReactDOM.render(
  <App />,
        document.getElementById('root')
);
