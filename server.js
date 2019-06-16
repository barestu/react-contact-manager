const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({
    title: 'Contact Manager',
    version: '0.0.1',
  });
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/users', require('./routes/users'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
