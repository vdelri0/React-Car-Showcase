import React from 'react'
import { Image, Reveal, Label } from 'semantic-ui-react'
import showMore from '../images/show-more.png'
import './RevealHidden.css'

class RevealHidden extends React.Component {

    update() {
        if (this.props.compare) {
            const item = {
                model: this.props.model,
                brand: this.props.brand,
                color: this.props.color,
                car: this.props.car
            }
            this.props.update(item)
        }
    }

    render() {
        return (
            <Reveal animated='small fade'
                onClick={() => { this.update() }}
            >
                {
                    this.props.label &&
                    <Label style={{ left: 'calc(-0.9rem - 0.2em)' }} as='p' color='blue' ribbon>
                        {this.props.car.name}
                    </Label>
                }

                <Reveal.Content visible>

                    <Image src={this.props.car.smallPhoto} size='small' />

                </Reveal.Content>
                <Reveal.Content hidden>
                    <Image src={showMore} size='small' />
                </Reveal.Content>
            </Reveal>
        )
    }
}

export default RevealHidden