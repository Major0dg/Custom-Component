import { useState } from "react";
import Button from "./components/ui/Button";

function App() {
  const [isloding, setIsloading] = useState(false);
  const handleClick = () => {
    setIsloading((prev) => !prev);
  };
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Button
        loadingText="Submmiting"
        isloding={isloding}
        disabled={isloding}
        secondary
        onClick={handleClick}
      >
        Custom Button
      </Button>

      {/* assingment */}

      {/* 
      1: create a custom input input to take all properties and input should have, such as a loader, icon, placeholder, label value and so on 
      2: Create a custom card ui component to take header, footer, description and so on, should be able to style anywhere 
      
      */}

      {/* <Input 
label="test"
placehoder=""


/> */}
    </div>
  );
}

export default App;
