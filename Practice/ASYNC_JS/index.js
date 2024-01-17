// asynxc await

const getTodos = async()=>{

    const response = await fetch('todos/dev.json');

    if(response.status !== 200){
        throw new Error('Can not fetch the data');
    }

    const data1 = await response.json();
 
    
    return data1;
    
};



getTodos().then(data=>
    console.log('resolved data: ',data)
).catch(err=> console.log('rejected: ', err.message));
 

// console.log(test);





// fetch api
// newer way to fetch api

// fetch('todos/dev.json').then((response)=>{
//     console.log('resolved:',response);

//     return response.json();
    
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log('rejected: ',err);
// })














































// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log('callback fired');
// },2000);
// console.log(4);
// console.log(5);

// make HTTP requests to get data from another server
// -we make these request to API endpoints 


// older way :-

// const getTodos = (resource)=>{

//     return new Promise((resolve, reject)=>{
//                 const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange',()=>{
//             // console.log(request, request.readyState);
//             if(request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText)
//                 // console.log(request, request.responseText);
//                 resolve(data);
//             }else if(request.readyState == 4){
//                 // console.log('could not fetch the data');
//                 // callback('could not fetch data',undefined)
//                 reject('error getting resolve')
//             }
//         });

//         request.open('GET',resource)
//         request.send()
//     })
   
// };

// getTodos('todos/dev.json').then((data)=>{
//     console.log('promis resolved: ', data);
//     return getTodos('todos/devanshu.json')
// }).then((data)=>{
//     console.log('promise two resolved: ', data);
//     return getTodos('todos/todos.json')
// }).then((data)=>{
//     console.log('Promise three resolved: ', data);
// }).catch((err)=>{
//     console.log('promise rejected:',err);
// });






// promise example

// const getSomething = () =>{

    
//     return new Promise((resolve, reject)=>{
        // fetch something
//         resolve('some data');
        // reject('error is there');

//     });

// }

// getSomething().then((data)=>{
//     console.log(data);
// },(err)=>{
//     console.log(err);
// });

// getSomething().then(data=>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err);
// })