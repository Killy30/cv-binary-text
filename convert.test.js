const convert = require('./app')

test('convert text', ()=>{
    expect(convert('H')).toBe('01001000')
})