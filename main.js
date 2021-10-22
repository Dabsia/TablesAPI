function getMyApi(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => {
        let myAPI = '<tr>';
        data.forEach((post =>{
            myAPI += `<tr>
            <td>${post.userId}</td>
            <td>${post.id}</td>
            <td>${post.title}<td/>
            <td>${post.completed}</td>
            </tr>`
        }));
        output.innerHTML += myAPI
    })

}
getMyApi()