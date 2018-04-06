function notEmpty() {
    const itemsToInspect = ['txf1', 'txf2', 'txf3', 'txf4', 'txf5'];
    let values = itemsToInspect
        .map(item => {
        const current = document.getElementById(item);
    return (current && current.value) || ''
})
.filter(item => item !== '');

    return values.length === itemsToInspect.length ?
        document.write("User data generated: <br /> " + values.join(' ')) :
        window.alert('Error: Please fill all the fields');
}


