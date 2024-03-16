import {useQuery} from "@tanstack/react-query";

function App() {
    const { data: todos } = useQuery({
        queryKey: ['todos'],
        queryFn: () => fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json())
    })
  return <div>
      <h1 className={'bg-red-500 font-bold text-3xl h-screen'}>Hello World</h1>
      <pre>
          {JSON.stringify(todos, null, 4)}
      </pre>
  </div>
}

export default App
