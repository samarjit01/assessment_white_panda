var Product=require('../models/product');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
var products=[
  new Product({
  imagePath:'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/slack.svg',
  title:'Blog / Article',
  description:'Typically 450-400 words, an e-book is perfect for your target audience ranging from prospective customers to users',
  price:500
}),
  new Product({
  imagePath:'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/scribd.svg',
  title:'News letter / E-mailer',
  description:'Typically 450-400 words, an e-book is perfect for your target audience ranging from prospective customers to users',
  price:1000
}),
  new Product({
  imagePath:'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/react.svg',
  title:'White Paper',
  description:'Typically 450-400 words, an e-book is perfect for your target audience ranging from prospective customers to users',
  price:2000
}),
  new Product({
  imagePath:'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/quora.svg',
  title:'e-book',
  description:'Typically 450-400 words, an e-book is perfect for your target audience ranging from prospective customers to users',
  price:1000
}),
  new Product({
  imagePath:'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/netflix.svg  ',
  title:'Report / Guide',
  description:'Typically 450-400 words, an e-book is perfect for your target audience ranging from prospective customers to users',
  price:1000
}),
  new Product({
  imagePath:'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/github.svg',
  title:'Product Description',
  description:'Typically 450-400 words, an e-book is perfect for your target audience ranging from prospective customers to users',
  price:500
}),
  new Product({
  imagePath:'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/ubuntu.svg',
  title:'Website Content',
  description:'Typically 450-400 words, an e-book is perfect for your target audience ranging from prospective customers to users',
  price:1000
}),
  new Product({
  imagePath:'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/youtube.svg',
  title:'Video Script',
  description:'Typically 450-400 words, an e-book is perfect for your target audience ranging from prospective customers to users',
  price:1000
}),
   new Product({
  imagePath:'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/wikipedia.svg',
  title:'CompanyProfile / Broucher',
  description:'Typically 450-400 words, an e-book is perfect for your target audience ranging from prospective customers to users',
  price:2000
}),
    new Product({
  imagePath:'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/wix.svg',
  title:'Press Release',
  description:'Typically 450-400 words, an e-book is perfect for your target audience ranging from prospective customers to users',
  price:2000
})
];
var done=0;
for(var i=0;i<products.length;i++)
{
  products[i].save(function(err,result){
    done++;
    if(done===products.length){
      exit();
    }
  });
}
function exit(){
  mongoose.disconnect();
}
