import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import Toast from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<Toast />', () => {
  it('should set isVisible state to false by default', () => {
    const sut = shallow(<Toast />)
    expect(sut.state('isVisible')).to.equal(false)
  })

  describe('When message prop is not specified', () => {
    it('isVisible state should remain false', () => {
      const sut = shallow(<Toast />)
      expect(sut.state('isVisible')).to.equal(false)
    })
  })

  describe('When message prop is specified', () => {
    it('isVisible state should be set to true', () => {
      const sut = shallow(<Toast message="ellowurld" />)
      expect(sut.state('isVisible')).to.equal(true)
    })
  })

  describe('When isVisible state is set to true', () => {
    it('should render the message passed in as prop', () => {
      const sut = shallow(<Toast message="Fancy Message" />)
      expect(sut).to.have.text('Fancy Message')
    })

    it('should adopt the className passed in as prop', () => {
      const sut = shallow(<Toast message="Message" className="I-AM-GROOT" />)
      expect(sut).to.have.className('I-AM-GROOT')
    })
  })

  describe('When timeout prop is not specified', () => {
    it('should set timeout prop to 3000ms by default', () => {
      const sut = mount(<Toast message="msg" />)
      expect(sut.prop('timeout')).to.equal(3000)
    })
  })

  describe('When timeout prop is specified', () => {
    it('should set isVisible state to false after set timeout', () => {
      const clock = sinon.useFakeTimers()
      const sut = mount(<Toast message="msg" timeout={1000} />)

      clock.tick(1000)

      expect(sut.state('isVisible')).to.equal(false)

      clock.restore()
    })
  })
})
