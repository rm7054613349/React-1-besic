
import logo from './logo.svg';
import './App.css';


// first kon se file ka code ap import kra rhe hai
import Item from './component/First';

const m ="radhey karn";
function App(){
  return (
    // return ke ander jo code hoga uska single parent hona chahiye syntax hai ye nhi follow kiya to error dega

      <div> 

      {/* yha ham uss function ko jo code me likha hai use as element use krte hAi */}
      {/* <Item></Item> */}



      {/* using promps - har fn ke sath jo name denge vhi sho hoga*/}
        {/* <Item name="ram"></Item>
        <Item name="syam"></Item> */}



        {/* or  jadatar ham yahi use krenge*/}
        {/* <Item name={m}></Item> */}




        {/* component item ke ander yadi apne kuchh content likha then vo invisible hota  yadi use ui per show krna hai then apko component ki js file me return ke ander {props.children likhoge tab value show hoga return ke ander single parent hona chahiye}  */}
        <Item name={m}>
          My name is khan
        </Item>


        <div className="App">Hare Krishna</div>
      </div>
    
  );
}

export default App;
