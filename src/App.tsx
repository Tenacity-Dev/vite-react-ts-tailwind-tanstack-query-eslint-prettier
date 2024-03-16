import {useQuery} from "@tanstack/react-query";
import axios from "axios";

function App() {
    const { data: todos } = useQuery({
        queryKey: ['todos'],
        queryFn: () => axios.get('https://jsonplaceholder.typicode.com/todos')
    })

  return <div>
      <h1 className={'bg-red-500 font-bold text-3xl h-screen'}>Hello World</h1>
      <pre>
          {JSON.stringify(todos, null, 4)}
      </pre>
  </div>
}

export default App
