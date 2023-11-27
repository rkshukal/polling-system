const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/polling-system')
    .then(() => console.log("connected to database"))
    .catch((err) => console.log("error", err));

const db = mongoose.connection;
module.exports = db;
//echo "# polling-system" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/rkshukal/polling-system.git
// git push -u origin main