import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Navbar from "@/UI/components/Navbar";
import ActivityGraph from "@/UI/widgets/ActivityGraph";

const page = async() => {
    const session = await getServerSession(authOptions)
    console.log(session)
    if(session?.user) {
        return (
            <>
            <div className="flex flex-col gap-10">
                <Navbar/>
                <div className="mt-24 text-blue-600">Welcome back {session?.user.username}!</div>

            
            </div>
            <ActivityGraph />
            </>
            

            
        
    );
    }
    return <h2>Please login to see the dashboard</h2>
    
};

export default page;