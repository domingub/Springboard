const $gifArea = $("#gif-area");
const $userInput = $("#search");

function addGif(n) {
    let numResults = n.data.length;
    if (numResults) {
      let randomIndex = Math.floor(Math.random() * numResults);
      let $newBox = $("<div>", { class: "col-lg-4 col-12 mb-4" });
      let $newGif = $("<img>", {
        src: n.data[randomIndex].images.original.url,
        class: "w-100"
      });
      $newBox.append($newGif);
      $gifArea.append($newBox);
    }
  }

  
/* handle form submission: clear search box & make ajax call */

$("form").on("submit", async function(evt) {
  evt.preventDefault();

  let gifCharacteristic = $userInput.val();
  $userInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: gifCharacteristic,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  addGif(response.data);
});

/* remove gif */

$("#remove").on("click", function() {
  $gifArea.empty();
});