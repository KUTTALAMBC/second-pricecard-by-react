import logo from "./logo.svg";
import "./App.css";

import Heading from "./Heading";


function App() {
  let types = [
    {
      plan: "BASIC",
      members: "For Team of 3-5 Members",
      amountmonth: "28",
      amountyear: "240",
      save: "20",
      color:"btn btn-success-gradiant btn-md text-white btn-block",
      fed :[
          {
            a:"Perfect of Small Team",
        },
              
        { 
           a:"Unlimited Invoices",
        },
        {
            a:"Perfect of Small Team",
         },
         {
            a :"",
         },
        {
           a:"",
         },
        
          
      ]
    },
    {
      pop :"POPULAR"  ,
      plan: "INTERMEDIATE",
      members: "For Team of 5-10 Members",
      amountmonth: "39",
      amountyear: "400",
      save: "30",
      color :"btn btn-danger-gradiant btn-md text-white btn-block",
      fed :[
        
            {
                a:"Perfect of Small Team",
            },
            {
                
            a:"Unlimited Invoices",
            },
            {
                
              a:"Perfect of Small Team",
            },
            {
                
              a:"Team Management",
            },
            {
                a:"",
            },     
    ]
    },
    {
      plan: "HIGH CLASS",
      members: "For Team of 10-25 Members",
      amountmonth: "58",
      amountyear: "600",
      save: "50",
      color:"btn btn-success-gradiant btn-md text-white btn-block",
      fed :[
        
            {
                a:"Perfect of Small Team",
            },
            {
                a:"Unlimited Invoices",
            },
            {
                a:"Perfect of Small Team",
            },
            {
                a:"Team Management",
            },
            {
                a:"Time Tracking",
            },
           
            
            
            
        
        
    ]
    },
    {
      plan: "SUPREME",
      members: "For Team of 25-100 Members",
      amountmonth: "98",
      amountyear: "1000",
      save: "80",
      color:"btn btn-success-gradiant btn-md text-white btn-block",
      fed :[
        
        {
            a:"Perfect of Small Team",
        },
        {
            a:"Unlimited Invoices",
        },
        {
            a:"Perfect of Small Team",
        },
        {
            a:"Team Management",
        },
        {
            a:"Time Tracking",
        },
         
    ]
    },
  ];

  return (
    <div class="pricing1 py-5 bg-light">
      <div class="container">
      <div class="row mt-5">
        
              {
                  types.map((pro) => <Heading data={pro}></Heading>)    
              }
           
          </div>
        </div>
        </div>
     
  );
}

export default App;
