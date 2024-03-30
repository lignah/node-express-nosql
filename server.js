/* import expressing from 'express'            *
 * package.json=> {"type": "module"}==> import */ 
let expressing= require('express');
let app= expressing();
let port= 1026



/* middleware */
app.use(expressing.static('./'));

/* portopen */
app.listen(port, ()=> {
  console.log(`http:localhost:${port} server on`);
});

app.get(`/`, (a, i)=> {
  i.sendFile(__dirname+ `/index.js`)
});

app.get(`/1`, (req, res) => {
  res.send(`<body><script src="/index.js"></script></body>`);
});

app.get(`/2`, (a, i)=> {
  i.send(`2`);
});

let sending= function(a, i) {
  i.send(a);
}

app.get(`/3`, (a, i)=> sending('page3', i));



