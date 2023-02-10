import React from 'react'
import { Header, Image, Modal, Divider, Button, Icon } from 'semantic-ui-react'
import RevealHidden from './RevealHidden'
import './DetailsSection.css'


class DetailsSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false
        }
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })
    render() {
        return (
            <Modal
                trigger={
                    <div onClick={this.handleOpen}>
                        <RevealHidden label={this.props.label} car={this.props.car} />
                    </div>
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}
            >
                <Modal.Header>Details</Modal.Header>
                <Modal.Content>
                    <Image wrapped src={this.props.car.bigPhoto} fluid />
                    <Divider hidden />
                    <Modal.Description>
                        <Header>{this.props.car.name}</Header>
                        <div>
                            <h3 style={{ position: 'fixed', right: 21 }}>Model: {this.props.model}</h3>

                            <h3 >Brand: {this.props.brand}  </h3>
                        </div>
                        <br />
                        <br />
                        <p>{this.props.car.description}</p>
                        <Button style={{ position: 'fixed', right: 21 }} color='green' onClick={this.handleClose} inverted>
                            <Icon name='checkmark' /> Got it
                        </Button>
                        <h3>Price: {this.props.car.price}</h3>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}

export default DetailsSection