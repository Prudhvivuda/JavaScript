async function todo(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data =  await response.json().then(response=>response.json());
    console.log(data)
    com = []
   for (let i = 0; i < data.length; i++) {
    if (data[i].completed == "true" ) {
        com.push(data[i]);
    }
    }
console.log(com);

};

todo();
