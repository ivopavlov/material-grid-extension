var toggled = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggled = !toggled;
  if (toggled) {
    chrome.tabs.executeScript({
      code: `
      var div=document.createElement("div");
      div.id = "material-grid-overlay-ext";
      document.body.appendChild(div);
      div.classList.add("overlay");

      var margin = document.createElement("div");
      margin.classList.add("margin");
      div.appendChild(margin);

      for(var i = 1; i <= 12; i++) {
        var colContainer = document.createElement("div");
        colContainer.id = "col-container-" + i;

        var column = document.createElement("div");
        column.classList.add("column");
        colContainer.appendChild(column);

        var gutter = document.createElement("div");
        gutter.classList.add("gutter", "gutter-"+i);
        colContainer.appendChild(gutter);

        div.appendChild(colContainer);
      }

      var margin = document.createElement("div");
      margin.classList.add("margin");
      div.appendChild(margin);
      `
    });
  } else {
    chrome.tabs.executeScript({
      code: `document.getElementById("material-grid-overlay-ext").remove();`
    });
  }
});
