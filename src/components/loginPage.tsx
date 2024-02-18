import { Button } from "@/components/ui/button"
import { Input } from "./ui/input"


function LoginPage() {
    return(
            <div className="flex flex-col gap-10 bg-zinc-900 justify-center items-center h-screen">
                <Input placeholder="Email" className="h-10 w-75 rounded-xl"/>
                <Input placeholder="Senha" className="h-10 w-75 rounded-xl"/>
                <Button className="rounded-3xl px-8" variant="outline">Login</Button>
            </div>
    )
}

export default LoginPage