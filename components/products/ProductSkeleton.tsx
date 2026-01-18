export default function ProductSkeleton() {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="space-y-4 animate-pulse">
                    <div className="bg-secondary/60 rounded-[2rem] aspect-[4/5] w-full" />
                    <div className="space-y-2 px-2">
                        <div className="h-4 bg-secondary/60 rounded w-2/3" />
                        <div className="h-4 bg-secondary/60 rounded w-1/4" />
                    </div>
                </div>
            ))}
        </div>
    );
}