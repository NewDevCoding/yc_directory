import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";


export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string}> }) {
  
  const query = (await searchParams).query

  const posts = [
    {
      _createdAt: new Date(),
      views: 35,
      author: {
        _id: 1,
        name: 'Isaac',
      },
      _id: 1,
      description: "post",
      image: "https://cdnb.artstation.com/p/assets/covers/images/001/694/405/large/jesus-velazco-cropped.jpg?1451069260",
      category: "robots",
      title: "we robots"
    }
  ]
  
  return (
    <> 
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrapreneurs</h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Bring Your Idea to Life
        </p>

        <SearchForm query={query}/>
      
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {
            query ? `Search results for ${query}`
            :
            "All Startups"
          }
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
          
          posts.map((post:  StartupCardType, index: number) => (
            <StartupCard key={post._id} post={post}/>
          ))
        ) : (
          <p className="no-results">No Startups Found</p>
        )
          }
        </ul>
      </section>

      
    </>
  );
}
