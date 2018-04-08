import React from 'react';
import ReactDOM from 'react-dom';
import ImagesList from './components/images_list';
import axios from 'axios'

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <ImagesList />
    </div>
  )
}

Meteor.startup(() => {      // Meteor.startup actually tells the react to stop rendering because the area or the html file is still being loaded.
  ReactDOM.render(<App />, document.querySelector('#my-render-area'))
  axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
        .then(res => {
          console.log(res)
        }).catch(e => console.log(e))
})

// If we dont use this method , then react will render all of the components but , nothing will happen, as the html is not yet loaded.
