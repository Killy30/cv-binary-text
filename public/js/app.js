const text = document.getElementById('text')
const card_binary = document.querySelector('.card_binary')
const btn_compilar = document.getElementById('btn_compilar')


btn_compilar.addEventListener('click', async(e) => {
    console.log(text.value);

    try {
        let data = {text: text.value}
        let req = await fetch('/text', {
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        let res = await req.json()
        print_result(res)
    } catch (error) {
        console.log(error);
    }
})

const print_result = (res) => {
    card_binary.innerHTML = `<p class="w-100  " style="word-break: break-all;">${res.data}</p>`
}