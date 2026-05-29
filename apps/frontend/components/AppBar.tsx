import {
    SignInButton,
    SignUpButton,
    Show,
    UserButton,
} from '@clerk/nextjs'

export function AppBar() {
    return (
        <div className="w-full border-b border-border bg-background text-foreground flex justify-between items-center px-4 py-3">
            <div>DPin Up</div>
            <div className="flex gap-2">
                <Show when="signed-out">
                    <SignInButton />
                    <SignUpButton />
                </Show>
                <Show when="signed-in">
                    <UserButton />
                </Show>
            </div>
        </div>
    )
}