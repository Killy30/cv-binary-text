const text = document.getElementById('text')
const card_binary = document.querySelector('.card_binary')
const btn_compilar = document.getElementById('btn_compilar')

let compiled_characters = ""

//
const compiled_a_z = (_az) => {
    let allCodes = [
        {id:'a', code:97},
        {id:'b', code:98},
        {id:'c', code:99},
        {id:'d', code:100},
        {id:'e', code:101},
        {id:'f', code:102},
        {id:'g', code:103},
        {id:'h', code:104},
        {id:'i', code:105},
        {id:'j', code:106},
        {id:'k', code:107},
        {id:'l', code:108},
        {id:'m', code:109},
        {id:'n', code:110},
        {id:'o', code:111},
        {id:'p', code:112},
        {id:'q', code:113},
        {id:'r', code:114},
        {id:'s', code:115},
        {id:'t', code:116},
        {id:'u', code:117},
        {id:'v', code:118},
        {id:'w', code:119},
        {id:'x', code:120},
        {id:'y', code:121},
        {id:'z', code:122}
    ]
    return convert_binary(_az)
}

//
const compiled_A_Z = (_AZ) => {
    let allCodes = [
        {id:'A', code:65},
        {id:'B', code:66},
        {id:'C', code:67},
        {id:'D', code:68},
        {id:'E', code:69},
        {id:'F', code:70},
        {id:'G', code:71},
        {id:'H', code:72},
        {id:'I', code:73},
        {id:'J', code:74},
        {id:'K', code:75},
        {id:'L', code:76},
        {id:'M', code:77},
        {id:'N', code:78},
        {id:'O', code:79},
        {id:'P', code:80},
        {id:'Q', code:81},
        {id:'R', code:82},
        {id:'S', code:83},
        {id:'T', code:84},
        {id:'U', code:85},
        {id:'V', code:86},
        {id:'W', code:87},
        {id:'X', code:88},
        {id:'Y', code:89},
        {id:'Z', code:90}
    ]
    return convert_binary(_AZ, allCodes)
}

//
const compiled_num = (num) => {
    
    let allCodes = [
        { id: '0', code: 48 },
        { id: '1', code: 49 },
        { id: '2', code: 50 },
        { id: '3', code: 51 },
        { id: '4', code: 52 },
        { id: '5', code: 53 },
        { id: '6', code: 54 },
        { id: '7', code: 55 },
        { id: '8', code: 56 },
        { id: '9', code: 57 }
    ]

    return convert_binary(num, allCodes)
}

//
const compiled_spe_char = (xx) => {
    let allCodes = [
        {id:'[', code:91},
        {id:']', code:93},
        {id:'{', code:123},
        {id:'}', code:125},
        {id:'s', code:32},
        {id:'.', code:46},
        {id:'(', code:40},
        {id:')', code:41},
        {id:'/', code:47},
        {id:'"', code:34},
        {id:"'", code:39},
        {id:'@', code:64},
        {id:'#', code:35},
        {id:'$', code:36},
        {id:'%', code:37},
        {id:'^', code:94},
        {id:'&', code:38},
        {id:'*', code:42},
        {id:'=', code:61},
        {id:'+', code:43},
        {id:'-', code:45},
        {id:'_', code:95},
        {id:';', code:59},
        {id:':', code:58},
        {id:'<', code:60},
        {id:'>', code:62},
        {id:',', code:44},
        {id:'?', code:63},
        {id:'~', code:126},
    ]
    return convert_binary(xx, allCodes)
}

//
const verify_characters = (text) => {
    let characters = text.split('')
    let num_x = /[0-9]/
    let string_a = /[a-z]/
    let string_A = /[A-Z]/
    let spe_char_x = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    compiled_characters = ""

    characters.forEach(element => {
        if (string_a.test(element)) {
            let binary_az = compiled_a_z(element)
            compiled_characters += binary_az
        }
        if (string_A.test(element)) {
            let binary_AZ = compiled_A_Z(element)
            compiled_characters += binary_AZ
        }
        if (num_x.test(element)) {
            let binary_num = compiled_num(element)
            compiled_characters += binary_num
        }
        if (spe_char_x.test(element)) {
            (element == ' ')? element = 's' : element
            let benary_sc = compiled_spe_char(element)
            compiled_characters += benary_sc
        }
    });
}

//
function convert_binary(x, allCodes){
    let table_num = [128, 64, 32, 16, 8, 4, 2, 1]
    let output = []
    let indexCode = allCodes.find(code => code.id == x)
    
    for (let i = 0; i <= 7; i++) {
        let code = indexCode.code
        let p = table_num[i]

        if (p > code) {
            output.push('0')
        } else {
            indexCode.code = indexCode.code - p
            output.push('1')
        }
    }
    return output.join('')
}


btn_compilar.addEventListener('click', (e) => {
    verify_characters(text.value)
})

const print_result = () => {
    card_binary.innerHTML = `<p class="w-100  " style="word-break: break-all;">${compiled_characters}</p>`
}