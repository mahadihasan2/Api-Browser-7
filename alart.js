alart = () => {
    alert('Plase Show the Perfomance')
}

const confirms = () => {
    const response = confirm('Enter Your Name')
    console.log(response)
    if (response === true) {
        alert('Confirm successful')
    } else {
        console.log('ma astece')
    }
}

const prompts = () => {
    const name = prompt('What is your Name')
    console.log(name)
    if (name === true) {
        alert('Name is Successfully Done')
    } else {
        alert('thik name Den')
    }
}