import React, { useEffect, useState } from 'react'
import './App.css';
import EndPoint from './Components/EndPoint';
import Loader from './Components/Loader';
import TourList from './TourList';
const url = "https://course-api.com/react-tours-project";
export default function App() {

  const [isLoading,setLoader] = useState(true) // setting to true to make it load
  const [tourList,setTourList] = useState([]) // empty array to insert a the object and make it iteretable


  async function fetchData(){
    setLoader(true) // making the state of the loader is state of loading
      try{
          const response = await fetch(url) // getting the API thru the url
          const data = await response.json() // converting the response into a json data
          setTourList(data) // putting that data to the tourList variable
          setLoader(false) // disbling the loader coz the loading is finished
      }catch(e){
        setLoader(false) // once there is a n error it will return to normal page
        console.error(e) // report the error due such as newtwork error or spelling errors
      }
  }

      useEffect(() =>{
          fetchData() // calling the data inside the effect
      }, [])

      function removeCard(id){ // getting the id of the copoent and remove it
        return setTourList(tourList.filter(e => e.id !== id))

        // the filter will loop turh the tourList object and if its not equal tot he param id
        // dont filter it else filter it, then it will be removed
      }

   

  // if the loading state is true display the loader else display the App

  return isLoading ? ( <main> <Loader /> </main> ) : (

      <main className="App">
          {tourList.length  > 0 
          
          ?
          <TourList
                tourList = {tourList}
              removeCard = {removeCard}
            />
          :
              <EndPoint
                refresh = {() => fetchData()}
              />
            }
      </main>
  )
 
}
