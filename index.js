import mongoose from 'mongoose'
import Blog from './model/Blog.js'; //импорт модели 
import dotenv from 'dotenv';

dotenv.config();
//используем Mongoose для подключения к MongoDB.
mongoose.connect(process.env.DATABASE_URL);



// //ПЕРВЫЙ ВАРИАНТ СОЗДАНИЯ ОБЬЕКТА

// После импорта создаем  ноовый blog обьект
const article = new Blog({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
});
  // Вставляем статью в базу данных
await article.save();

// //ВТОРОЙ ВАРИАНТ СОХРАНЕНИЯ ОБЬЕКТА
// const article1 = await Blog.create({
//     title: 'Awesome Post!',
//     slug: 'awesome-post',
//     published: true,
//     content: 'This is the best post ever',
//     tags: ['featured', 'announcement'],
//   });
// console.log(article1);
  

// // для поиска документа который добавила используем метод findOne
// const firstArticle = await Blog.findOne({});
// console.log(firstArticle);

// //Обновить данные
// article.title = "The Most Awesomest Post!!";
// await article.save();
// console.log(article);

// //Поиск данных
// const article2 = await Blog.findById("68432a1759dd494e910bf6a5").exec();
// console.log(article2);

// //Проецирование полей документа
// const article3 = await Blog.findById("68432a1759dd494e910bf6a5", "title slug content").exec();
// console.log(article3);

// //Удаление данных

// const blog1 = await Blog.deleteOne({ author: "Jesse Hall" })
// console.log(blog1)

// const blog2 = await Blog.deleteMany({ title:"The Most Awesomest Post!!" })
// console.log(blog2)


//работа с Middleware
const article4 = await Blog.findById("6843ad61460250948256150a").exec(); // нахожу статью по id
article4.title = "Updated Title";// обновляю заголовок
await article4.save(); //сохраняю
console.log(article4);

//.exec() — это способ явно запустить Mongoose-запрос и получить чистый Promise. критроль, TS, явный зпрос.

