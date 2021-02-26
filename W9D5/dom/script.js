document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!

  const lis = document.getElementById("list")
  lis.addEventListener("submit", event => {
    event.preventDefault();
    const resName = document.getElementsByClassName("favorite-input")[0]
    const resN = resName.value;
    debugger
    resName.value = "";

    const ul = document.getElementById("restaurants");
    const li = document.createElement("li");
    li.textContent = resN;
    ul.appendChild(li);
  })
  // adding new photos

  // --- your code here!

  const btn = document.getElementsByClassName("photo-show-button")[0];
  btn.addEventListener("click", event => {
    
    const div =  document.getElementsByClassName("photo-form-container")[0]
    div.style.display = 'block';
    // console.log(div)
    
    const sub = document.getElementById("picture");
    sub.addEventListener("submit", event => {
      event.preventDefault();
      
      const ul = document.getElementsByClassName("dog-photos")[0]
      const li = document.createElement("li")
      
      const image = document.createElement('img');
      const urlV = document.getElementsByClassName("photo-url-input")[0]
      image.src = urlV.value;
      urlV.value = "";
      // debugger
      console.log(image)
      li.appendChild(image)
      ul.appendChild(li)
      div.style.display = 'none';
    })
  })

});
