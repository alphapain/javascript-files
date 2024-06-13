// // taking reference of insert
// const insert = document.getElementById('insert');
// // applying event on complete window


// window.addEventListener('keydown', (e) => {
//     insert.innerHTML = `
//       <div class='color'>
//       <table>
//       <tr>
//         <th>Key</th>
//         <th>Keycode</th> 
//         <th>Code</th>
//       </tr>
//       <tr>
      
//       <td>${e.key}</td>
//       <td>${e.keyCode}</td>
//       <td>${e.code}</td>
//       </tr>
// </table>
//     </div>
//     `;
// });



// // +++++++++++++++++++++++++original code++++++++++++++++++++++++++
// const insert = document.getElementById('insert');

// window.addEventListener('keydown', (e) => {
//   insert.innerHTML = `
//     <div class='color'>
//     <table>
//     <tr>
//       <th>Key</th>
//       <th>Keycode</th> 
//       <th>Code</th>
//     </tr>
//     <tr>
//       <td>${e.key === ' ' ? 'Space' : e.key}</td>
//       <td>${e.keyCode}</td> 
//       <td>${e.code}</td>
//     </tr>
    
//   </table>
//     </div>
//   `;
// });


const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  </div class = 'color'>
          <table>
      <tr>
        <th>Key</th>
        <th>Keycode</th> 
        <th>Code</th>
      </tr>
      <tr>
      <td>${e.key === " " ? "space" : e.key}</td> 
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
      </tr>
</table>  
  
  </div>
  `;
});