/* global $ */
$.ajax({
  type: 'GET',
  url: 'https://jsonplaceholder.typicode.com/users',
  success: function (data) {

    for (var i = 0; i < data.length; i++) {
      var tr = document.createElement('tr');
      var tdUser = document.createElement('td');
      var tdName = document.createElement('td');
      var tdEmail = document.createElement('td');
      var tbody = document.getElementById('user-data');

      tdUser.textContent = data[i].id;
      tdName.textContent = data[i].name;
      tdEmail.textContent = data[i].email;

      tr.appendChild(tdUser);
      tr.appendChild(tdName);
      tr.appendChild(tdEmail);
      tbody.appendChild(tr);

    }
  }
});
