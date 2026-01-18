import { Check } from "lucide-react";

export default function ProductDetailsSkeleton() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start animate-pulse">
            
            <div className="relative aspect-[4/5] rounded-[2.5rem] bg-secondary/40 shadow-sm" />


            <div className="flex flex-col text-right space-y-8">
                <div>

                    <div className="h-4 bg-secondary/50 rounded-full w-24 mb-4 ml-auto" />
                    
                    <div className="h-12 bg-secondary/50 rounded-2xl w-full mb-4 ml-auto" />
                    <div className="h-12 bg-secondary/50 rounded-2xl w-2/3 ml-auto" />
                    

                    <div className="h-10 bg-secondary/50 rounded-xl w-32 mt-6 ml-auto" />
                </div>

                <div className="space-y-4">
                    <div className="h-6 bg-secondary/60 rounded-md w-20 pr-3 border-r-4 border-secondary/30 ml-auto" />
                    <div className="space-y-2">
                        <div className="h-4 bg-secondary/40 rounded w-full ml-auto" />
                        <div className="h-4 bg-secondary/40 rounded w-full ml-auto" />
                        <div className="h-4 bg-secondary/40 rounded w-4/5 ml-auto" />
                    </div>
                </div>


                <div className="space-y-4">
                    <div className="h-6 bg-secondary/50 rounded-md w-32 ml-auto" />
                    <div className="flex flex-wrap gap-3 flex-row-reverse justify-end">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="px-12 py-7 bg-secondary/30 rounded-2xl border-2 border-transparent" />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-border/50">
                    <div className="h-20 bg-secondary/20 rounded-2xl w-full" />
                    <div className="h-20 bg-secondary/20 rounded-2xl w-full" />
                </div>
            </div>
        </div>
    );
}