const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};


// Progression 1: create a function to get all the cookies

function getCookies(){

  setTimeout(()=>{
    // Progression 2: using setTimeout()
    let output="";
    cookies.forEach((cookie)=>{
    output+=`<li>${cookie.name}</li>`
  });
  
  document.body.innerHTML=output;

  },1000);
}


//Progression 3: Create a function to creat cookies

function createCookie(getCookies){

  setTimeout(()=>{

    cookies.push(newCookie)
    console.log(cookies);
    getCookies();
  },2000);
}

// Progression 4: calling function

createCookie(getCookies);
