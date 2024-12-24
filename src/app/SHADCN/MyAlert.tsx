import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { OctagonAlert, Terminal } from "lucide-react"

const MyAlert = () => {
  return (
    <Alert variant={'destructive'} className="mb-4">
    <OctagonAlert/>
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components and dependencies to your app using the cli.
    </AlertDescription>
  </Alert>
  
  )
}

export default MyAlert