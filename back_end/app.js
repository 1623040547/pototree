var imagesRouter = require('./routes/images');
var path = require('path');
var fs = require('fs');

var createError = require('http-errors');
const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json()); // 用于处理JSON数据
app.use(express.urlencoded({ extended: true })); // 用于处理URL编码的数据


// 图片存储
const multer = require('multer');
// 配置multer中间件
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      folder_name = '../src/assets/'+ req.headers['app'].toString() +'/'
      fs.access(folder_name, fs.constants.F_OK, (err) => {
        if (err) {
          fs.mkdir(folder_name, { recursive: true }, (err) => {
            if (err) {
              cb(err, null); // 如果创建文件夹失败，则返回错误
            } else {
              cb(null, folder_name); // 否则，返回文件夹路径
            }
          });
        } else { 
          cb(null, folder_name); // 如果文件夹已存在，则返回文件夹路径
        }
      });
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) 
    }
}); 
const upload = multer({ storage: storage });
app.use('/images', upload.any(), imagesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;