import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/theme-toggle'
import { ShoppingCart, Package, Star } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="h-6 w-6 text-brand" />
            <h1 className="text-2xl font-bold">Food Delivery</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Food Delivery</h2>
          <p className="text-muted-foreground text-lg">
            shadcn/ui + Tailwind CSS + Lucide Icons Demo
          </p>
        </div>

        {/* Component Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Featured Dish</CardTitle>
                <Badge>New</Badge>
              </div>
              <CardDescription>Try our latest creation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.9 rating</span>
              </div>
              <Input placeholder="Search dishes..." />
            </CardContent>
            <CardFooter>
              <Button className="w-full">Order Now</Button>
            </CardFooter>
          </Card>

          {/* Card 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Counter Demo</CardTitle>
              <CardDescription>Testing state management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <p className="text-5xl font-bold text-brand">{count}</p>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setCount(count - 1)}
              >
                Decrease
              </Button>
              <Button 
                className="flex-1"
                onClick={() => setCount(count + 1)}
              >
                Increase
              </Button>
            </CardFooter>
          </Card>

          {/* Card 3 */}
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>Explore different styles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full" variant="default">Default</Button>
              <Button className="w-full" variant="secondary">Secondary</Button>
              <Button className="w-full" variant="outline">Outline</Button>
              <Button className="w-full" variant="ghost">Ghost</Button>
            </CardContent>
            <CardFooter>
              <Badge variant="secondary">4 variants</Badge>
            </CardFooter>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Design Features</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline">Dark Theme</Badge>
            <Badge variant="outline">Rounded-2xl Cards</Badge>
            <Badge variant="outline">Smooth Hover</Badge>
            <Badge variant="outline">Focus Rings</Badge>
            <Badge variant="outline">Brand Color: #5b8cff</Badge>
            <Badge variant="outline">Tailwind CSS</Badge>
            <Badge variant="outline">shadcn/ui</Badge>
            <Badge variant="outline">Lucide Icons</Badge>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
