import { Button } from './components/Button';
import './styles/globals.css';

export function App() {
  return (
    <main className="w-screen h-screen flex items-center justify-center bg-gray-900 gap-4">
      <Button>
        My component
      </Button>
      <Button asChild>
        <a href="#">My link</a>
      </Button>
    </main>
  )
}
