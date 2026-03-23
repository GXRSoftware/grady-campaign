const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'));
app.get('/posters', (req, res) => res.render('posters'));

app.listen(PORT, () => {
  console.log(`Grady Rueffer campaign site running at http://localhost:${PORT}`);
});

app.use((req, res, next) => {
  // Skip static assets
  if (req.path.startsWith('/css') || req.path.startsWith('/js') || req.path.startsWith('/images')) {
    return next();
  }
  const timestamp = new Date().toISOString();
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(`[${timestamp}] ${req.method} ${req.path} — IP: ${ip}`);
  next();
});
