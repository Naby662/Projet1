 import Sidebar from "../components/";
import Todo from "../feacture/todo";

 



export default function Admin() {
  return (
    <div className="flex">
        <div className="w-56 min-h-screen bg-gray-700">
            <Sidebar />
        </div>
       <div>
       <Todo />
       </div>
       
    </div>
  )
}



