let list = $('.task-list');
let inpedit1 = $('.edit-inp1');
let inpedit2 = $('.edit-inp2');
let inpedit3 = $('.edit-inp3');
let inpedit4 = $('.edit-inp4');
let mainModal = $('.main-modal')
let home = $('.home')
let admin = $('.admin')
let bush = $('.bush')
let page = 1
let itemCount = 1
let pageCount = 1
let seachValue = ''

bush.on('click', function () {
  $('.wrapper').html('')
  render4()
})

$('body').on('click', '.btn-buy', function (event) {
  event.preventDefault()
  let id = this.id
  fetch(`http://localhost:8001/todos/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let obj = {
        name: name2 = data.name,
        price: price2 = data.surename,
        num: desc = data.number,
        num2: img = data.photo
      }
      setItemToStorage(obj)
    })
})

function render4() {
  if (!localStorage.getItem('contacts-data')) {
    localStorage.setItem('contacts-data', '[]');
  }
  let newData = JSON.parse(localStorage.getItem('contacts-data'));
  list.html('');
  newData.forEach(item => {
    list.append(`
    <div id="${item.id}" class="card mb-4" style="width: 18rem;">
    <img class="card-img-top " src="${item.num2}">
    <div class="card-body">
      <h5 class="card-title"> ${item.name}</h5>
      <p class="card-text"> ${item.price}...</p>
      <li class="mb-4">Цена: ${item.num} сом</li>
      <a class="btn btn-dark btn-delete id="${item.id}">Удалить
          <path fill-rule="evenodd"
            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        </svg>
      </a>
      </li>
    `);
  });
}

function setItemToStorage(contacts) {
  if (!localStorage.getItem('contacts-data')) {
    localStorage.setItem('contacts-data', '[]');
  }
  let data = JSON.parse(localStorage.getItem('contacts-data'));
  data.push(contacts);
  localStorage.setItem('contacts-data', JSON.stringify(data));

}

$('body').on('click', '.btn-delete', function () {
  let data = JSON.parse(localStorage.getItem('contacts-data'));
  let index = $(this).index();
  console.log(index)
  data.splice(index, 1);
  localStorage.setItem('contacts-data', JSON.stringify(data));

  render4();
});

home.on('click', function () {
  $('.wrapper').html('')
  render()
})

admin.on('click', function () {
  render3()
  render2()
})

function render2() {
  fetch(`http://localhost:8001/todos?_page=${page}&_limit=6&q=${seachValue}`)
    .then(response => response.json())
    .then(data => {
      getPaginapion()
      list.html('')
      data.forEach(item => {
        list.append(`
        <div id="${item.id}" class="card mb-4" style="width: 18rem;">
        <img class="card-img-top " src="${item.photo}">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.surename}...</p>
          <li class="mb-4">Цена: ${item.number} сом</li>
          <a class="btn btn-dark">Купить
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </a>
          </li>
      
          <button type="button" class="btn-edit btn-edit1" id="${item.id}">
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="btn-edit" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z">
              </path>
            </svg>
          </button>
      
          <button type="button" class=" btn-delete btn-delete1" id="${item.id}">
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="btn-delete" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z">
              </path>
              <path fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z">
              </path>
            </svg>
          </button>
      
          </ul>
        </div>
      </div>
        `)
      });
    })
}

function render3() {
  $('.wrapper').html('')
  $('.wrapper').append(`
        <div class="container">
        <div class="auth-form ">
          <div class="field">
            <span class="title">Contact list: </span>
            <p><input placeholder="Название" type="text" class="task-input1"><br></p>
            <p><input placeholder="Описание" type="text" class="task-input2"><br></p>
            <p><input placeholder="Цена" type="text" class="task-input3"><br></p>
            <p><input placeholder="Фото" type="text" class="task-input4"><br></p>
          </div>
  
          <div class="field">
            <button class="btn">Добавить товар</button><br>
          </div>
  
        </div>
      </div>
        `)
}

$('.search-inp').on('input', function (e) {
  seachValue = e.target.value
  render()
})

function getPaginapion() {
  fetch(`http://localhost:8001/todos`)
    .then(res => res.json())
    .then(data => {
      pageCount = Math.ceil(data.length / 6)
      $('.pagination-page').remove()
      for (let i = pageCount; i >= 1; i--) {
        $('.previous-btn').after(`
      <span class="pagination-page">
      <a href="#" alt="...">
      ${i}
      </span> 
      `)
      }
    })
}
$('body').on('click', ".pagination-page", function (event) {
  page = event.target.innerText
  render()
})

$('body').on('click', '.btn', function (e) {
  if (!$('.task-input1').val() || !$('.task-input2').val() || !$('.task-input3').val() || !$('.task-input4').val()) {
    return
  }
  let newTask = {
    name: $('.task-input1').val(),
    surename: $('.task-input2').val(),
    number: $('.task-input3').val(),
    photo: $('.task-input4').val()
  }
  postNewTask(newTask)
  $('.task-input1').html('')
  $('.task-input2').html('')
  $('.task-input3').html('')
  $('.task-input4').html('')
})

function postNewTask(newTask) {

  fetch('http://localhost:8001/todos', {
    method: 'POST',
    body: JSON.stringify(newTask),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
    .then(() => render2())
}

function render() {
  fetch(`http://localhost:8001/todos?_page=${page}&_limit=6&q=${seachValue}`)
    .then(response => response.json())
    .then(data => {
      getPaginapion()
      list.html('')


      list.append(`
      <div id="carouselExampleInterval" class="carousel slide mb-5 " data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="10000">
          <img src="https://images.wbstatic.net/bners1/big_bf_electro_2011.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-interval="2000">
          <img src="https://images.wbstatic.net/bners1/big_bf_electro_2011.jpg\" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://images.wbstatic.net/bners1/big_bf_sport_2011.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div> 
      `)
      data.forEach(item => {
        $('.wrapper').html('')
        list.append(`
        <div id="${item.id}" class="card mb-4 col-sm-6 col-12 col-md-4 col-lg-4 " style="width: 18rem; ">
        <img class="card-img-top " src="${item.photo}">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.surename}...</p>
          <li class="mb-4">Цена: ${item.number} сом</li>
          <a href="#" class="btn btn-buy btn-dark" id="${item.id}">Купить 
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
          </svg>
          </a>
            </li>
          </ul>
          </div>
          </div>
        `)
        $('.page-footer').css('position', 'relative')
      });
    })
}

$('body').on('click', '.btn-delete1', function (event) {
  event.preventDefault();
  let id = this.id
  fetch(`http://localhost:8001/todos/${id}`, {
    method: 'DELETE'
  })
    .then(() => render2())

})

$('body').on('click', '.btn-edit1', function (event) {
  event.preventDefault()
  let id = event.target.parentNode.id
  fetch(`http://localhost:8001/todos/${id}`)
    .then(res => res.json())
    .then(data => {
      $('.edit-inp1').val(data.name)
      $('.edit-inp2').val(data.surename)
      $('.edit-inp3').val(data.number)
      $('.edit-inp4').val(data.photo)
      $('.btn-save').attr('id', id)
      $('.main-modal').css('display', 'block')
    })
})

$('.btn-save').on('click', function (event) {
  if (!inpedit1.val().trim() || !inpedit2.val().trim() || !inpedit3.val().trim() || !inpedit4.val().trim()) {
    return
  }
  let id = event.target.id
  let editValue1 = $('.edit-inp1').val()
  let editValue2 = $('.edit-inp2').val()
  let editValue3 = $('.edit-inp3').val()
  let editValue4 = $('.edit-inp4').val()
  let obj = {
    name: editValue1,
    surename: editValue2,
    number: editValue3,
    photo: editValue4
  }
  fetch(`http://localhost:8001/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(obj),
    headers: { 'content-type': 'application/json' }
  })
    .then(() => {
      render2()
      $('.edit-inp1').html('')
      $('.edit-inp2').html('')
      $('.edit-inp3').html('')
      $('.edit-inp4').html('')
      $('.main-modal').css('display', 'none')
    })
})

$('.btn-close').on('click', function () {
  if (!inpedit1.val().trim() || !inpedit2.val().trim() || !inpedit3.val().trim() || !inpedit4.val().trim()) {
    return
  }
  mainModal.css('display', 'none')
})

$('.next-btn').on('click', function () {
  if (page >= pageCount) return
  page++
  render()
})
$('.previous-btn').on('click', function () {
  if (page <= 1) return
  page--
  render()
})

$('.next-btn2').on('click', function () {
  if (page >= pageCount) return
  page++
  render()
})
$('.previous-btn2').on('click', function () {
  if (page <= 1) return
  page--
  render()

})

$('.carousel').carousel({
  interval: 1000
})

render()