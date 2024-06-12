import { Label } from "@/components/ui/label"
import Link from "next/link"
export default function PageNotFound() {

    return (
        <main>

            <div className="flex flex-col justify-center  h-screen items-center">
                <h2 className="text-3xl p-3">
                    Page Not Found
                </h2>

                <h1 className="text-7xl p-3">404</h1>

                <p className="text-xl p-3">Redirect to <Link href='/' className="underline hover:text-gray-400">Home</Link></p>
            </div>


            {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>

                <h1 style={{ display: 'inline-block', fontSize: '25px', fontWeight: '500', padding: 25, margin: 25, lineHeight: '50px', borderRightWidth: 1 }}>404</h1>
                <div style={{ display: 'inline-block' }}>
                    <h2 style={{ fontSize: '15px', fontWeight: '400' }}>This page could not be found. </h2>
                </div>
            </div> */}

        </main >
    )
}