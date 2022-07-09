const convert = require('./app')

test('convert uppercase', ()=>{
    expect(convert('A')).toBe('01000001')
})

test('convert lowercase', ()=>{
    expect(convert('a')).toBe('01100001')
})

test('convert special characters', ()=>{
    expect(convert('?')).toBe('00111111')
})

test('convert number', ()=>{
    expect(convert('1')).toBe('00110001')
})