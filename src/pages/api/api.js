import axios from 'axios';

// ----------------------------------------------------------------------
// Productos                                                            -
// ----------------------------------------------------------------------

// Fetch Productos
axios.get('http://localhost:8000/api/producto', {
  headers: {
    'Authorization': `Bearer ${your-token}`
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error);
});

// Add new Producto
axios.post('http://localhost:8000/api/producto', {
  // your new product data here
}, {
  headers: {
    'Authorization': `Bearer ${your-token}`
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error);
});

// And similarly for updates (axios.put) and deletions (axios.delete)

// ----------------------------------------------------------------------
// Usuarios                                                             -
// ----------------------------------------------------------------------

// Fetch Usuarios
axios.get('http://localhost:8000/api/usuario', {
  headers: {
    'Authorization': `Bearer ${your-token}`
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error);
});

// Add new Usuario
axios.post('http://localhost:8000/api/usuario', {
  // your new usuario data here
}, {
  headers: {
    'Authorization': `Bearer ${your-token}`
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error);
});
