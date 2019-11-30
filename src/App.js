import React from 'react';
import Blog from './components/Blog';
import './App.css';

function App() {
  return (
    <div className="App">
        <header>
            Show Blog Posts
        </header>
        <div className={'content'}>
            <Blog />
        </div>
    </div>
  );
}

export default App;
