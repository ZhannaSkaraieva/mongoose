// Создание схемы и модели

import mongoose from 'mongoose';



//деструктуризация из объекта mongoose
const { Schema, model } = mongoose; 

//ВАЛИДАЦИЯ РАБОТАЕТ ТОЛЬКО С МЕТОДАМИ СОЗДАНИЯ И СОХРАНЕНИЯ 
//явно сообщаю приложению, какие поля и типы данных разрешаю вставлять в определенную коллекцию

const blogSchema = new Schema({ // схема описывает структуру документа
    title:  {
      type: String,
      required: true, // заполнение этого полля обязательно
    },
    slug:  {
      type: String,
      required: true,
      lowercase: true, // строка всегда должна быть в нижнем регистре
    },
    published: {
      type: Boolean,
      default: false,
    },
    // author: {
    //   type: String,
    //   required: true,
    // },
    content: String,
    tags: [String],
    createdAt: {
      type: Date,
      default: () => Date.now(),
      immutable: true,// невозможность изменения даты в будущем
    }
    // updatedAt: Date,
    // comments: [{
    //   user: String,
    //   content: String,
    //   votes: Number
    //}]
});
  

const Blog = model('Blog', blogSchema);

export default Blog;


//когда есть настроенная модель и схема , следующий этам это добавление данных в базу.
// импортируем в файл index.js модель Blog



//как работатет Middleware? 
//pre post Это функции, которые автоматически вызываются до или после выполнения определённых операций с документами

// в модель добавляю функциюю обновления даты и 
// каждый раз при сохранении и обновлеении какого из своиств будет обновляться дата

blogSchema.pre('save', function(next) {
    this.updated = Date.now(); // update the date every time a blog post is saved
    next();//обязательный вызов чтобы процес продолжился
});

blogSchema.post('save', function(doc) {
    console.log('Документ сохранён:', doc);
  }); // next() не вызывается