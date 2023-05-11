import Dashboard  from "./Dashboard"
import CardStat from "./CardStat"
import CardOrders from "./CardOrders"
import CardCustomer from "./CardCustomer"


export const Home = () => {
  return (
    <div className="flex">
        <Dashboard/>
        <main className=" pl-4 pr-4">
          <section>
          <CardStat/>
          </section>

          <section className="pt-4">
            <CardOrders/>
          </section>

          <section>

          </section>
        </main>
        
        <article className="">
          <CardCustomer/>
        </article>
    </div>
  )
}
