// function download(content, fileName, contentType) {
//     content = JSON.stringify(content);
//     var a = document.createElement("a");
//     var file = new Blob([content], { type: contentType });
//     a.href = URL.createObjectURL(file);
//     a.download = fileName;
//     a.click();
// }

// The JSX element for calling the download

{/* <button onClick={() => download(this.state.board, 'json.txt', 'text/plain')}>Download board data</button> */ }