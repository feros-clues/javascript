

fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
     

       let usern= "userImage";
       let profile="profileName";
       let linkn="link";
    
      for (let i = 0; i<=23 ;i++) {
      
        document.getElementById(usern+i).setAttribute("src",data[i].avatar_url);
       
        document.getElementById(profile+i).innerHTML=data[i].login;
        document.getElementById(linkn+i).setAttribute("href",data[i].html_url);
       
      }
    })
    .catch((err) => console.error(err));

    

    