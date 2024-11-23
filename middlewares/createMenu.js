var Winx = require("../models/winx").Winx

module.exports = async function(req,res,next){
    res.locals.nav = []

   var menu =  await Winx.find(null,{_id:0,title:1,nick:1});
   console.log(menu);
   if (menu.length) {
    res.locals.nav = menu;
   }
   next();
}