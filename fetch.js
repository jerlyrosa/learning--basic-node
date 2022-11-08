// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(json => console.log(json))

// const LoadData = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// LoadData()





//EMACScript22
try {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
} catch (error) {
  console.log(error);
}

LoadData();
