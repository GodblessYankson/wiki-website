import { students } from "./constant"
import Counter from "./Counter"


function App() {

  return (
    
    <div>
       <h1 className="text-4xl text-red-700">I am to work on a project </h1>
       {students.map((student) => (
        <h1 key={student.id} className="text-4xl text-[#1a1a1a]">{student.studentName}</h1>
))}
  <Counter />
    </div>
  )
}

export default App
