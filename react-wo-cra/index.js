


const HelloButton = () => {
  const message = "Hello React!"

  return React.createElement('button', null, message)
}

const domContainer = document.querySelector('#main')

ReactDOM.render(React.createElement(HelloButton), domContainer)