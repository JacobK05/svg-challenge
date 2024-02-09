const { Circle } = require('../circle.js')

describe('circle', () =>{
    it('Circle should render the correct user inputs', () =>{
    const circle = new Circle()
    circle.setColor('green')

    const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect cx="150" cy="100" r="80" style="fill: green" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">svg</text> 
    
    </svg>`
    const actual = circle.render()
    expect(actual).toEqual(expected)

    })

})