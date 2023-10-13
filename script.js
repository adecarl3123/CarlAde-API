fetch ("https://fakestoreapi.com/products?limit=5").then((data)=>{
    //json format
    //get all product : https://fakestoreapi.com/products
    //get single pro : https://fakestoreapi.com/products/1
    //limit pro : https://fakestoreapi.com/products?limit=5
    //get by specific category https://fakestoreapi.com/products/category/jewelery
 


    return data.json(); //converted to obj
}).then((objectData)=>{
    console.log(objectData[0]);

    let tableData="";
    objectData.map((value)=>{
        tableData+= `<tr>
        <td>${value.title}</td>
        <td>${value.description}</td>
        <td>${value.price}</td>
        <td>${value.category}</td>
        <td><img src="${value.image}"/></td>
      </tr>`;
    });

    document.getElementById("table_body").
    innerHTML=tableData;
}).catch((error)=>{
    console.log(error);
})