import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  //JAVASCRIPT STARTS
    let card1content = [
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"Single User"
      },
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"50GB Storage"
      },
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"Unlimited Public Projects"
      },
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"Conmunity Access"
      },
      {
        icon:"fa-solid fa-xmark fa-2xs",
        text:"Unlimited Private Projects"
      },
      {
        icon:"fa-solid fa-xmark fa-2xs",
        text:"Dedicated Phone Support"
      },
      {
        icon:"fa-solid fa-xmark fa-2xs",
        text:"Free Subdomian"
      },
      {
        icon:"fa-solid fa-xmark fa-2xs",
        text:"Monthly Status Report"
      }
    ]
    let card2content = [
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"5 User"
      },
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"50GB Storage"
      },
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"Unlimited Public Projects"
      },
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"Conmunity Access"
      },
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"Unlimited Private Projects"
      },
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"Dedicated Phone Support"
      },
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"Free Subdomian"
      },
      {
        icon:"fa-solid fa-xmark fa-2xs",
        text:"Monthly Status Report"
      }
    ]
    let card3content = [
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"5 User"
      },
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"50GB Storage"
      },
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"Unlimited Public Projects"
      },
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"Conmunity Access"
      },
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"Unlimited Private Projects"
      },
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"Dedicated Phone Support"
      },
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"Free Subdomian"
      },
      {
        icon:"fa-solid fa-check fa-2xs",
        text:"Monthly Status Report"
      }
    ]
 //JAVASCRIPT ENDs

  //JSX Starts
  return (
    <div className="App">
      <Card1 content1={card1content} content2={card2content} content3={card3content}/>

      
    </div>
  );
   //JSX ENDS
}


function Card1({content1,content2,content3}){
    return(
      <div className='container-fluid'>
        <div className='container p-5'>
          <div className='row'>
            <div className='col-lg-4 col-md-12 mb-4'>
              <div className='card h-100 shadow-lg'>
                <div className='card-body'> 
                  <div className='text-center p-3'>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h5 className='card-title'>Free</h5>
                      <h1>$0/month</h1>
                    </li>
                    <li className="list-group-item"></li>
                  </ul>
                  <div className='icontext'>
                    {content1.map((item, index) => (
                      <div key={index}>
                        <i className={`fas ${item.icon}`}></i> <nsbr></nsbr>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div><br></br>
                  <button className='btn btn-primary btn-lg col-md-12' >Button</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 mb-4'>
              <div className='card h-100 shadow-lg'>
                <div className='card-body'> 
                  <div className='text-center p-3'>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h5 className='card-title'>Plus</h5>
                      <h1>$9/month</h1>
                    </li>
                    <li className="list-group-item"></li>
                  </ul>
                  <div className='icontext'>
                    {content2.map((item, index) => (
                      <div key={index}>
                        <i className={`fas ${item.icon}`}></i> <nsbr></nsbr>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div><br></br>
                  <button className='btn btn-primary btn-lg col-md-12' >Button</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 mb-4'>
              <div className='card h-100 shadow-lg'>
                <div className='card-body'> 
                  <div className='text-center p-3'>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h5 className='card-title'>Pro</h5>
                      <h1>$49/month</h1>
                    </li>
                    <li className="list-group-item"></li>
                  </ul>
                  <div className='icontext'>
                    {content3.map((item, index) => (
                      <div key={index}>
                        <i className={`fas ${item.icon}`}></i> <nsbr></nsbr>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div><br></br>
                  <button className='btn btn-primary btn-lg col-md-12' >Button</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
    )
}

export default App;


