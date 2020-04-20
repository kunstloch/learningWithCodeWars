// Extract the domain name from a URL

function domainName (url) {
  //your code here

  for (let i = 0; i < url.length; i++) {
    if (url[i] == "/" && url[i + 1] == "/") {
      url = url.substring(i + 2);
    }

  }

  for (let i = 0; i < url.length; i++) {
    if (url[i] == "w" && url[i + 1] == "w" && url[i + 2] == "w" && url[i + 3] == ".") {
      url = url.substring(i + 4);
    }

  }

  for (let i = 0; i < url.length; i++) {
    if (url[i] == ".") {
      url = url.substring(0, i);
    }
  }

  console.log("url: ", url);
  return url;
}


/*
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};
*/
