const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000

//menggunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
    // res.sendFile('./index.html', {root: __dirname});
    const mahasiswa = [
        {
            nama: 'Restu',
            email: 'restu@gmail.com'
        },
        {
            nama: 'Pati',
            email: 'pati@gmail.com'
        },
        {
            nama: 'Zoya',
            email: 'zoya@gmail.com'
        },
    ]
    res.render('index', 
    {nama: 'Ringin Restu Pati', 
    title: 'Halaman HOME',
    mahasiswa,
    layout: 'layouts/main-layout',
});
});

app.get('/about', (req, res) => {
//     res.send('Ini adalah halaman about')
// res.sendFile('./about.html', {root: __dirname});
res.render('about', {
    layout: 'layouts/main-layout',
    title: ' Halaman About'});
})
app.get('/contact', (req, res) => {
    // res.send('Ini adalah halaman contact')
    // res.sendFile('./contact.html', {root: __dirname});
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: ' Halaman Contact'});
})

app.get('/product/:id', (req,res)=>{
    // res.send(`Product ID :  ${req.params.id} <br> Category : ${req.query.category}`)
    res.render(`Product ID :  ${req.params.id} <br> Category : ${req.query.category}`);
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

