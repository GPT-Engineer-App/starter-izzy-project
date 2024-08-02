import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">My Awesome App</h1>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Welcome to Your App</CardTitle>
            <CardDescription>This is a basic structure you can build upon.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Feel free to modify and expand this template!</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Counter: {count}</span>
              <Button onClick={() => setCount(count + 1)}>Increment</Button>
            </div>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            Click the button to increase the counter.
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; 2024 My Awesome App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
