import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'
import ComparingSection from './ComparingSection'

class VerticalMenu extends Component {
  state = {
    activeItem: 'inbox',
    modalOpen: false,
    value: ''
  }

  handleSearch = (e, { value }) => {
    this.setState({value: value});
    this.props.onUpdate(value)
  }

  update = (e, { name, value }) => {
    this.setState({
      activeItem: name,
    })
    if(name !== 'compare')
      this.props.onUpdate(value)
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu fluid vertical>
        <Menu.Item
          style={{textAlign: 'center'}}
          name='Ford'
          active={activeItem === 'Ford'}
          onClick={this.update.bind(this)}

          value={0}
        >
          Ford
        </Menu.Item>

        <Menu.Item
          style={{textAlign: 'center'}}
          name='Mazda'
          active={activeItem === 'Mazda'}
          onClick={this.update.bind(this)}
          value={1}
        >
          Mazda
        </Menu.Item>

        <ComparingSection sectionName='Compare'/>
        <Menu.Item>
          <Input icon='search'  placeholder='Search' value={this.state.value} onChange={this.handleSearch} />
        </Menu.Item>
      </Menu>
    )
  }
}

export default VerticalMenu