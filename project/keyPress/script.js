const insert = document.getElementById("table1");
window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <table>
    <tr>
    <th>key</th>
    <th>code</th>
    </tr>
        
            <tr>
            <td>${e.key===' '?'Space':e.key}</td> 
            <td>${e.code}</td> 
            </tr>
    
        
    </table>`;
});
