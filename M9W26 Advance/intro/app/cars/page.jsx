import axios from "axios";

// anything you write here is server
const getDogImage = async () => {
  try {
    // DB
    const {data} = await axios.get("https://dog.ceo/api/breeds/image/random")
    return data
  } catch (err) {
    console.log(err);
  }
}

const Cars =  async () => {

  const {message} = await getDogImage()
  console.log(message);
  return (
    <div>   
      <h1>Welcome to Cars Page!</h1>
      <img src={message} alt="" />
    </div>
  )
};

export default Cars;

/*
app.get('/cars/:id')
*/