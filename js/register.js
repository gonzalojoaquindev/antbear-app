const myContent = document.getElementById('my-content')

//leer en firebase

db.collection("register")
  .get()
  .then((querySnapshot) => {
    const container = document.createElement("div");
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().amount}`)
      const newRegister = `
          <div class="divider"></div> 
          <div class="register section grey lighten-5" >
          <div class="r-icon">
            <a class="btn-floating btn-large red">
              <i class="material-icons">local_gas_station</i>
            </a>
          </div>
          <div class="r-category">${doc.data().category}</div> 
          <div class="r-amount">${doc.data().amount}</div>
          <div class="r-account">${doc.data().account}</div>
          <div class="r-total">${doc.data().total}</div>
          <div class="r-note">${doc.data().note}</div>
          <div class="r-date">${doc.data().date}</div>
          <div class="r-tag">${doc.data().tag}</div>`;

    container.insertAdjacentHTML("afterbegin", newRegister);
    });
    myContent.appendChild(container);
  });

/*
//con template string
const draw = (data) => {
  const container = document.createElement("div");
  data.forEach((register) => {
    const newRegister = `
        <div class="registers">
          <div class="divider"></div> 
          <div class="register section grey lighten-5" >
          <div class="r-icon">
            <a class="btn-floating btn-large red">
              <i class="material-icons">local_gas_station</i>
            </a>
          </div>
          <div class="r-category">${register.category}</div> 
          <div class="r-amount">${register.amount}</div>
          <div class="r-account">${register.account}</div>
          <div class="r-total">${register.total}</div>
          <div class="r-note">${register.note}</div>
          <div class="r-date">${register.date}</div>
          <div class="r-tag">${register.tag}</div>
        </div>`;

    container.insertAdjacentHTML("beforeend", newRegister);
  });

  myContent.appendChild(container);
};


*/