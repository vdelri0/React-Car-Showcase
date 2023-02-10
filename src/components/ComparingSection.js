import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Menu } from 'semantic-ui-react'
import Showcase from './Showcase'
import data from '../cars.js'
import CompareGrid from './CompareGrid'
import './ComparingSection.css'

class ComparingSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            compareItems: []
        }
    }

    onUpdate(item) {

        const items = this.state.compareItems
        if (items.length < 3) {
            items.push(item)
            this.setState({ compareItems: items })
        }
    }

    onCloseCompare(item) {
        const items = this.state.compareItems
        if (items.length > 0) {
            var index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
                this.setState({ compareItems: items })
            }
        }
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    createShowcase() {
        let generalShowcase = []
        for (let i = 0; i < data.length; i++) {
            generalShowcase.push(
                <Showcase
                    key={i}
                    label={false}
                    dataIndex={i}
                    compare={true}
                    onUpdate={this.onUpdate.bind(this)}
                />
            )
        }
        return generalShowcase
    }

    render() {
        return (
            <Modal
                trigger={
                    <Menu.Item
                        style={{ textAlign: 'center' }}
                        name='Compare'
                        onClick={this.handleOpen}>
                        {this.props.sectionName}
                    </Menu.Item>
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
            >
                <Header icon='browser' content='Comparing Section' />
                <Modal.Content>
                    {
                        this.createShowcase()
                    }
                    <br />
                    <CompareGrid compareItems={this.state.compareItems} onClose={this.onCloseCompare.bind(this)} />
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={this.handleClose} inverted>
                        <Icon name='checkmark' /> Close
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ComparingSection