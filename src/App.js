import React, { Component } from 'react';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
			  <Layout>
					<p>Is this thing on?</p>
				</Layout>
      </div>
    );
  }
}

export default App;
