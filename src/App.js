import React from 'react';
import Showcase from './components/Showcase';
import VerticalMenu from './components/VerticalMenu';
import { Container, Grid } from 'semantic-ui-react'
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dataIndex: 0
    }
  }

  onUpdate(param) {
    console.log(param)
    if (typeof (param) === 'number') {
      this.setState({ dataIndex: param })
    } else {
      if (param === 'ford') {
        let dataIndex = 0
        this.setState({ dataIndex: dataIndex })
      } else if(param ==='mazda') {
        let dataIndex = 1
        this.setState({ dataIndex: dataIndex })
      }
    }
  }

  render() {
    return (
      <div>
        <Container style={{ marginTop: "10%" }}>
          <Grid stackable >
            <Grid.Row columns={2}>
              <Grid.Column mobile={16} tablet={5} computer={4}>
                <VerticalMenu onUpdate={this.onUpdate.bind(this)} />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={11} computer={12}>
                <Showcase label={true} dataIndex={this.state.dataIndex} compare={false} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default App;
