import React from 'react'
import { Grid, Image, Icon, Button } from 'semantic-ui-react'

class CompareGrid extends React.Component {
    
    handleClose = (e, {item}) => {
        if(item) {
            this.props.onClose(item)
        }
    }

    createGrid() {
        let gridRow = []
        const items = this.props.compareItems
        if(items.length > 0) {
            for (let i = 0; i <items.length; i++) {
                gridRow.push(
                    <Grid.Row key={i} >
                    <Grid.Column style={{padding: 0}} width={4}>
                      <Image src={items[i].car.smallPhoto} style={{height: 150}} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <h3>{items[i].car.name}</h3>
                        <p>{items[i].car.description}</p>

                    </Grid.Column>
                    <Grid.Column style={{position: 'relative'}} width={4}>
                    <h5>Brand: {items[i].brand}</h5>
                    <p>Model: {items[i].model}</p>
                      <h3>{items[i].car.price}</h3>

                      <Button style={{ position: 'absolute', bottom: 10, right: 10}} color='green' item={items[i]} onClick={this.handleClose} inverted>
                        <Icon name='checkmark' /> Close
                    </Button>
                    </Grid.Column>
                  </Grid.Row>
                )
            }
        }

        return gridRow
    }

    render() {
        return(
            <Grid celled>
                {this.createGrid()}
            </Grid>
        )
    }
}

export default CompareGrid