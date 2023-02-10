import React from 'react'
import { Card } from 'semantic-ui-react'
import DetailsSection from './DetailsSection'
import RevealHidden from './RevealHidden'
import data from '../cars.js'

class Showcase extends React.Component {

    render() {
        const index = this.props.dataIndex
        const brand = data[index].brand
        const color = data[index].color
        const compare = this.props.compare

        return (
            <Card.Group itemsPerRow={6}>
                {
                    data[index].models.map(model => {
                        const attModel = model.model
                        return (
                            model.cars.map((car) => {
                                return (
                                    <Card color={color} key={car.id} >
                                        {
                                            !compare ? (
                                                <DetailsSection
                                                    label={this.props.label}
                                                    model={attModel}
                                                    brand={brand}
                                                    color={color}
                                                    car={car}
                                                />
                                            ) : (
                                                    <RevealHidden
                                                        update={this.props.onUpdate.bind(this)}
                                                        label={this.props.label}
                                                        model={attModel}
                                                        brand={brand}
                                                        color={color}
                                                        car={car}
                                                        compare={true}
                                                    />
                                                )
                                        }
                                    </Card>
                                )
                            })
                        )
                    })
                }
            </Card.Group>
        )
    }
}

export default Showcase