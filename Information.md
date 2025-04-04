Full Route Cache ===> Time-based Caching 
                 ===> On-demand Caching 
                 ===> Disable Caching 

So , for static route we have to handle caching 


1.
export const dynamic = "force-dynamic" // disable caching features --> dynamic route 
export const revalidate = 0;


2.
On-demand Caching :: revalidatePath(" / ")
whenever create or delete in Prisma query we cache the revalidatePath of Home Page 