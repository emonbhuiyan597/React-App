import React from 'react';

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

function Content() {
  const [displayText, setDisplayText] = React.useState('');

  const handleButtonClick = () => {
    const text = document.getElementById('inputText').value;
    setDisplayText(text);
  };

  return (
    <main>
      <textarea id="inputText" placeholder="Enter some text..."></textarea>
      <button onClick={handleButtonClick}>Display Text</button>
      {displayText && <p>{displayText}</p>}
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>About Me - Opportunities don't happen, you create them. </p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header title="Simple React Application" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
