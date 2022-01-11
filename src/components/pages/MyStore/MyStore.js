import React from "react";
import LinkHome from "../../LinkHome/LinkHome";
import General from "./General";
import "./MyStore.scss";

const listMenu = ['General', 'Access', 'Product', 'Revenue', 'Maketing', 'Chat', 'Assists']
export default function MyStore() {
  const [menu, setMenu ] = React.useState('General')
  return (
    <>
      <LinkHome title='My Store' />
      <div className="ms">
        <ul>
          {
            listMenu.map((item,index)=>{
              return(
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
      {
        
      }
    </>
  );
}
