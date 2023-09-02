
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.scss'
import Advice from "./components/Advice";

const queryClient = new QueryClient()

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
        <Advice/>
    </QueryClientProvider>
 
  )
}

export default App
